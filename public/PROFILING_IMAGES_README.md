# Profiling images (Network Leadership page)

The Network Leadership page (`/network-leadership`) loads **two** images from this **`public`** folder.

## Where to save them

1. Open your project folder: **`startup-storyteller`**
2. Go to the **`public`** folder (next to `index.html`, **not** inside `src`).
3. Put the files **directly in `public`**, not in a subfolder, unless you change the code.

## Exact file names (case matters on Linux / production)

| Language | File name | Full path (example) |
|----------|-----------|------------------------|
| English  | `Profiling.jfif` | `public/Profiling.jfif` |
| Hebrew   | `Profiling_heb.png` | `public/Profiling_heb.png` |

- English uses **JFIF** (same as JPEG); Hebrew stays **PNG**.
- **Capital `P`** in `Profiling.jfif` and **`Profiling_heb.png`** as shown.
- Do **not** put these under `src/` — Vite only serves arbitrary URLs from **`public/`** using paths like `/Profiling.jfif`.

## Quick test after copying

1. Run the dev server (`npm run dev`).
2. In the browser, open:  
   `http://localhost:8080/Profiling.jfif`  
   and  
   `http://localhost:8080/Profiling_heb.png`  
   (use your dev port if it’s not 8080).
3. If you see the image, the path is correct. If you get 404, check spelling and capitalization.

## Fallback (English only)

If `Profiling.jfif` is missing, the app tries `Profiling.png` next.

## If you deploy to a subpath (e.g. GitHub Pages)

The app uses Vite’s `BASE_URL`, so paths stay correct as long as the files stay in **`public/`** at build time.
