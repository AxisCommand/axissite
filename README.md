# Axis / AxBOTS landing page

A fast, dependency-free static landing page for GitHub Pages. It uses the existing `cover.jpg` and `logo.jpg` assets and has no build step.

## Before publishing

1. Open `config.js` to update links if needed:
   - `boostyUrl` — beta access page.
   - `discordUrl` — community invite.
   - `githubUrl` — source repository.
   - `telegramManagerUrl` — manager contact and team applications.
   - `telegramChannelUrl` — Axis project channel.
   - `youtubeVideoId` — the ID of the YouTube demo video. The workshop opens on this player first.
2. Update product copy in `index.html` as the beta becomes more specific. The Minecraft version answer is intentionally marked as not finalized.
3. Replace `cover.jpg` or `logo.jpg` if you have better exports. Keep the filenames, or update every reference in `index.html`.
4. If you later add screenshots, place them beside the HTML file and replace the showcase placeholders in `index.html`.

## Publish with GitHub Pages

1. Create a GitHub repository and upload all files in this folder to its root. Do not upload the parent folder itself.
2. In the repository, open **Settings → Pages**.
3. Choose **Deploy from a branch**, select the default branch and the `/ (root)` folder, then save.
4. Wait for the Pages deployment. The project-site URL will normally include the repository name, so the relative paths in this site are intentionally file-relative and work from a repository subpath.

## Local preview

You can double-click `index.html` for a quick preview. For the closest browser behavior, serve this folder with any simple local static server. No npm install or build command is required.

## Notes

- The Google Fonts import is optional; the page falls back to system fonts if it is unavailable. Remove the `@import` line in `styles.css` for a completely offline page.
- The image metadata uses `cover.jpg` as the Open Graph and Twitter preview image. Some social platforms require a publicly deployed URL before they can fetch it.
