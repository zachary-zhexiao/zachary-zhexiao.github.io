# Photography portfolio

The gallery is part of the existing Jekyll / GitHub Pages site, at `/portfolio/`.
The homepage biography, portfolio image, and navigation all link to it.

## Content and design

- `portfolio/index.html`: independent page layout; no academic sidebar or external gallery service.
- `assets/css/portfolio.css`: responsive typography, justified image rows, and dark image viewer.
- `assets/js/portfolio.js`: aspect-ratio layout, collection selection, keyboard and touch navigation.
- `_data/portfolio.json`: ordered image manifest, collections, image descriptions, and original source mapping.
- `images/portfolio/`: 133 images in three WebP sizes each. Originals remain in `C:/Data/images`.

The collections are Beijing (34), Hong Kong (31), Shanghai (24), Sydney (5), UK (19), Elsewhere (10), and Black Myth: Wukong (10).
The final collection includes virtual photography and one promotional cover image; it is labeled separately.
All gallery images preserve their original aspect ratio. No external scripts, fonts, or image hosts are needed.
Images have been oriented using their EXIF orientation, converted to sRGB when an embedded profile is present,
and exported without EXIF location metadata. The original source files are unchanged.

## Updating images

To change order or descriptions, edit `_data/portfolio.json`. The page calculates collection counts automatically.
Each photo has an `id`, `category`, `collection`, `alt`, source dimensions (`width`, `height`), and three
image variants (`small`, `medium`, `large`), each with `src`, `width`, and `height`.
For new photographs, export WebP copies at up to 480×960, 960×1920, and 2160×2880 bounding boxes
(preserve aspect ratio; never enlarge a small original), save in `images/portfolio/`, then add a manifest entry.
The `source` field is a reference to the original file, not a public download link.

## Preview and publish

Use the site's usual Jekyll workflow (`bundle exec jekyll serve`) when its Ruby dependencies are installed,
then open `/portfolio/`. No extra Jekyll plugin or JavaScript package is required by the gallery.
Commit and push these changes through GitHub Desktop to the branch configured for GitHub Pages.
Public deployment has not been performed as part of this local edit.

Without JavaScript, all photos remain visible and each image link opens its large WebP file.
With JavaScript, the native dialog provides keyboard focus containment, Escape to close, left/right
navigation, and horizontal swipe navigation. Modified clicks still open the image normally in a new tab.

## Opening selection

All works starts with `Beijing/IMG_0735 2.JPG`, `Beijing/IMG_0742.jpg`, and `Beijing/IMG_0985.JPG`.
`opening_count: 3` keeps this trio together on gallery widths of at least 900px; narrower screens use responsive rows.
The next three images are the two selected Shanghai photographs followed by `UK/IMG_20240817_032946.jpg`.
The remaining horizontal/vertical source folders retain the Elsewhere category. Existing asset filenames are kept stable when a photo moves folders.
