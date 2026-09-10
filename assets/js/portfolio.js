/* Shared row calculation also runs in Node for layout validation. */
function portfolioRows(ratios, width, gap, target, openingCount = 0) {
  if (width >= 900 && openingCount > 0 && ratios.length) {
    const count = Math.min(openingCount, ratios.length);
    const opening = ratios.slice(0, count);
    const height = (width - gap * (count - 1)) / opening.reduce((sum, ratio) => sum + ratio, 0);
    const firstRow = opening.map((ratio, index) => ({ index, width: ratio * height, height }));
    const remaining = portfolioRows(ratios.slice(count), width, gap, target)
      .map(row => row.map(item => ({ ...item, index: item.index + count })));
    return [firstRow, ...remaining];
  }
  const rows = [];
  let row = [], sum = 0;
  const finish = (last = false) => {
    if (!row.length) return;
    const fitted = (width - gap * (row.length - 1)) / sum;
    const height = last ? Math.min(target, fitted) : fitted;
    rows.push(row.map(item => ({ index: item.index, width: item.ratio * height, height })));
    row = []; sum = 0;
  };
  ratios.forEach((ratio, index) => {
    const nextHeight = (width - gap * row.length) / (sum + ratio);
    const currentHeight = row.length ? (width - gap * (row.length - 1)) / sum : Infinity;
    if (row.length && nextHeight < target && Math.abs(currentHeight - target) < Math.abs(nextHeight - target)) finish();
    row.push({ index, ratio }); sum += ratio;
    if ((width - gap * (row.length - 1)) / sum <= target) finish();
  });
  finish(true);
  return rows;
}
if (typeof module !== 'undefined' && module.exports) module.exports = { portfolioRows };

(() => {
  'use strict';
  if (typeof document === 'undefined') return;
  const gallery = document.querySelector('.gallery');
  if (!gallery) return;
  const photos = [...gallery.querySelectorAll('.photo')];
  const links = [...document.querySelectorAll('[data-collection]')];
  const status = document.getElementById('gallery-status');
  const dialog = document.querySelector('.lightbox');
  const viewerImage = dialog.querySelector('.viewer-image');
  const viewerError = dialog.querySelector('.viewer-error');
  let visible = photos, activeIndex = 0, opener = null, loadVersion = 0, resizeFrame = 0;

  function layout() {
    const width = gallery.clientWidth;
    if (!width) return;
    const gap = width < 560 ? 8 : 12;
    const target = width < 560 ? 245 : width < 1000 ? 300 : 405;
    const ratios = visible.map(photo => Number(photo.dataset.width) / Number(photo.dataset.height));
    gallery.style.gap = `${gap}px`;
    const openingCount = visible.length === photos.length ? Number(gallery.dataset.openingCount || 0) : 0;
    portfolioRows(ratios, width, gap, target, openingCount).flat().forEach(item => {
      const photo = visible[item.index];
      // Fractional-pixel slack keeps a justified row on one line at any zoom level.
      photo.style.flex = `0 0 ${Math.max(1, item.width - 0.03)}px`;
      photo.style.height = `${item.height}px`;
      photo.querySelector('img').sizes = `${Math.ceil(item.width)}px`;
    });
  }

  function filterCollection(collection) {
    const valid = links.some(link => link.dataset.collection === collection);
    if (!valid) collection = 'all';
    photos.forEach(photo => { photo.hidden = collection !== 'all' && photo.dataset.category !== collection; });
    visible = photos.filter(photo => !photo.hidden);
    links.forEach(link => {
      if (link.dataset.collection === collection) link.setAttribute('aria-current', 'true');
      else link.removeAttribute('aria-current');
    });
    const label = collection === 'all' ? 'All works' : visible[0].dataset.collectionLabel;
    status.textContent = `${label}: ${visible.length} images`;
    document.getElementById('collection-type').textContent = collection === 'black-myth' ? 'Virtual photography & game artwork' : collection === 'all' ? 'Photography & virtual worlds' : 'Photography';
    layout();
  }
  links.forEach(link => link.addEventListener('click', event => {
    event.preventDefault();
    const collection = link.dataset.collection;
    history.pushState(null, '', `#${collection}`);
    filterCollection(collection);
  }));
  function syncCollectionFromURL() {
    const collection = location.hash.slice(1);
    // Page anchors such as “Back to top” should preserve the chosen collection.
    if (!collection || links.some(link => link.dataset.collection === collection)) filterCollection(collection || 'all');
  }
  window.addEventListener('hashchange', syncCollectionFromURL);
  window.addEventListener('popstate', syncCollectionFromURL);

  function showPhoto(index) {
    activeIndex = (index + visible.length) % visible.length;
    const photo = visible[activeIndex], thumbnail = photo.querySelector('img');
    const version = ++loadVersion;
    viewerError.hidden = true;
    viewerImage.classList.add('is-loading');
    viewerImage.alt = thumbnail.alt;
    viewerImage.src = thumbnail.currentSrc || thumbnail.src;
    document.getElementById('viewer-caption').textContent = thumbnail.alt;
    document.getElementById('viewer-collection').textContent = photo.dataset.collectionLabel;
    document.getElementById('viewer-count').textContent = `${String(activeIndex + 1).padStart(2, '0')} / ${String(visible.length).padStart(2, '0')}`;
    dialog.querySelector('.viewer-original').href = photo.href;
    const full = new Image();
    full.onload = () => {
      if (version !== loadVersion || !dialog.open) return;
      viewerImage.src = full.src;
      viewerImage.classList.remove('is-loading');
    };
    full.onerror = () => {
      if (version !== loadVersion || !dialog.open) return;
      viewerImage.classList.remove('is-loading');
      viewerError.hidden = false;
    };
    full.src = photo.href;
  }
  photos.forEach(photo => photo.addEventListener('click', event => {
    if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey || typeof dialog.showModal !== 'function') return;
    event.preventDefault();
    opener = photo;
    dialog.showModal();
    document.body.classList.add('viewer-open');
    showPhoto(visible.indexOf(photo));
    dialog.querySelector('.viewer-close').focus();
  }));
  dialog.querySelector('.viewer-close').addEventListener('click', () => dialog.close());
  dialog.querySelector('.viewer-prev').addEventListener('click', () => showPhoto(activeIndex - 1));
  dialog.querySelector('.viewer-next').addEventListener('click', () => showPhoto(activeIndex + 1));
  dialog.addEventListener('keydown', event => {
    if (event.key === 'ArrowLeft') { event.preventDefault(); showPhoto(activeIndex - 1); }
    if (event.key === 'ArrowRight') { event.preventDefault(); showPhoto(activeIndex + 1); }
  });
  dialog.addEventListener('close', () => {
    ++loadVersion;
    document.body.classList.remove('viewer-open');
    viewerImage.removeAttribute('src');
    if (opener && !opener.hidden) opener.focus({ preventScroll:true });
  });
  let touchStart = null;
  const figure = dialog.querySelector('.viewer-figure');
  figure.addEventListener('touchstart', event => {
    touchStart = event.touches.length === 1 ? { x:event.touches[0].clientX, y:event.touches[0].clientY } : null;
  }, { passive:true });
  figure.addEventListener('touchend', event => {
    if (!touchStart || event.touches.length) { touchStart = null; return; }
    const dx = event.changedTouches[0].clientX - touchStart.x;
    const dy = event.changedTouches[0].clientY - touchStart.y;
    if (Math.abs(dx) > 55 && Math.abs(dx) > Math.abs(dy) * 1.4) showPhoto(activeIndex + (dx < 0 ? 1 : -1));
    touchStart = null;
  }, { passive:true });
  figure.addEventListener('touchcancel', () => { touchStart = null; }, { passive:true });
  const scheduleLayout = () => {
    cancelAnimationFrame(resizeFrame);
    resizeFrame = requestAnimationFrame(layout);
  };
  if (typeof ResizeObserver !== 'undefined') new ResizeObserver(scheduleLayout).observe(gallery);
  else window.addEventListener('resize', scheduleLayout);
  filterCollection(location.hash.slice(1));
})();
