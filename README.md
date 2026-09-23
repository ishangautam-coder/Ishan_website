# Explained by Ishan Gautam — Website

Static website for the *Explained by Ishan Gautam* YouTube channel (economy and current affairs analysis). Plain HTML/CSS/JS, no build step.

## Structure
```
index.html            Home page
analysis.html          Full analysis listing
about.html             About the channel
articles/               Individual analysis pieces
assets/style.css       Design system
assets/script.js       Small progressive-enhancement script
```

## Deploying on Render.com (Static Site)
1. In the Render dashboard, click **New → Static Site**.
2. Connect this repository (`ishangautam-coder/Ishan_website`).
3. Settings:
   - **Build Command:** leave blank (no build needed)
   - **Publish Directory:** `.` (repo root)
4. Click **Create Static Site**. Render will deploy on every push to `main`.

## Editing content
Each article in `articles/` is a standalone HTML file using the shared `assets/style.css`. To add a new piece, copy an existing article file, update the content, and add a card linking to it on `index.html` and `analysis.html`.

## Updating the YouTube link
Update the channel URL (currently a placeholder) in `index.html`, `analysis.html`, `about.html`, and each file in `articles/`.
