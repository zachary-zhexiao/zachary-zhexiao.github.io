(() => {
  'use strict';
  const badge = document.getElementById('scholar-citations');
  if (!badge) return;
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 8000);
  fetch(badge.dataset.source, { signal: controller.signal, cache: 'no-cache' })
    .then(response => {
      if (!response.ok) throw new Error('Citation update unavailable');
      return response.json();
    })
    .then(data => {
      if (data.scholar_id !== badge.dataset.scholarId) return;
      const count = data.citedby;
      const updated = Date.parse(data.updated);
      const saved = Date.parse(badge.dataset.updated);
      if (!Number.isSafeInteger(count) || count < 0 || !Number.isFinite(updated) || updated < saved) return;
      badge.textContent = count.toLocaleString('en-US');
      badge.title = `Total citations · Last updated ${new Date(updated).toISOString().slice(0, 10)}`;
      badge.dataset.updated = data.updated;
    })
    // Keep the verified server-rendered snapshot when Scholar or GitHub is unavailable.
    .catch(() => {})
    .finally(() => clearTimeout(timeout));
})();
