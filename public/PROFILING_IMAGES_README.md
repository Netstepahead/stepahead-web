# Profiling images (Network Leadership page)



The Network Leadership page (`/network-leadership`) loads **two** images from this **`public`** folder.



## Where to save them



1. Open your project folder: **`startup-storyteller`**

2. Go to the **`public`** folder (next to `index.html`, **not** inside `src`).

3. Put the files **directly in `public`**, not in a subfolder, unless you change the code.



## Exact file names (case matters on Linux / production)



| Language | File name | Full path (example) |

|----------|-----------|------------------------|

| English  | `profiling.jfif` | `public/profiling.jfif` |

| Hebrew   | `Profiling_heb.png` | `public/Profiling_heb.png` |



- English uses **JFIF** (same as JPEG); Hebrew stays **PNG**.

- **`Profiling_heb.png`** uses a capital **`P`** as shown; English asset is **`profiling.jfif`** (lowercase **`p`**).

- Do **not** put these under `src/` — Vite only serves arbitrary URLs from **`public/`** using paths like `/profiling.jfif`.



## Quick test after copying



1. Run the dev server (`npm run dev`).

2. In the browser, open:  

   `http://localhost:8080/profiling.jfif`  

   and  

   `http://localhost:8080/Profiling_heb.png`  

   (use your dev port if it’s not 8080).

3. If you see the image, the path is correct. If you get 404, check spelling and capitalization.



## If you deploy to a subpath (e.g. GitHub Pages)



The page uses Vite’s `BASE_URL` via `publicAsset()` in `Academy.tsx`, so paths stay correct as long as the files stay in **`public/`** at build time.

