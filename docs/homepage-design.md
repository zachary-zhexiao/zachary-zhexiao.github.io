# Homepage design

The academic homepage uses `_layouts/home.html` and `assets/css/home.css`.
Its content remains in `_pages/about.md`, with eight named sections and the original fragment URLs.
The existing Jekyll theme files remain available for other pages. The photography gallery is unchanged.

Design: a white background, dark blue links, serif headings, a profile column, aligned dates,
and image/text layouts for publications and projects. The profile becomes a compact header on mobile.
The original `images/Portfolio.jpg` remains the photography cover.

Current profile data is read from `site.author` in `_config.yml`. Homepage contact links use the
existing Email, Google Scholar, GitHub, and LinkedIn values. The existing visitor globe remains in the footer.
No new JavaScript library or Jekyll plugin is required. Only configured analytics are loaded.

Build validation checks section anchors, retained content URLs, image resources, and semantic headings.
The local preview uses the previously established Jekyll build helper to accommodate the installed Windows Ruby version.
These changes have not been committed, pushed, or publicly deployed.

The homepage now uses up to 1680px of width, with a wider desktop profile column. All navigation links share the top bar; on narrow screens that bar scrolls horizontally. Profile icons reuse the bundled Font Awesome fonts. Publication image panels stretch to the text-column height while preserving image aspect ratios.
