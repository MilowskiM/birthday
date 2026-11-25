# Dad's 60th Birthday Card

A full-screen birthday scene with falling confetti, followed by Michael's message. Portrait artwork is selected for tall phone screens. The full artwork remains visible at every screen size. Motion can be paused and follows reduced-motion preferences.

## Add the two images

The images are supplied separately from this ZIP because this session could not download their bytes. Download both PNGs and place them alongside index.html, keeping these exact filenames:

- Bears Birthday Touchdown at 60.png (portrait)
- Chicago Bears 60th Birthday Stadium Celebration.png (landscape)

Open index.html in your browser to view the finished card. No installation or build is required. The animation is falling confetti over the still artwork; the player himself is not animated.

## Publish on GitHub Pages

1. Create a GitHub repository, for example dad-birthday.
2. Upload index.html, styles.css, script.js, .nojekyll, and both PNGs to the repository's top level. Upload the extracted files, not the ZIP or its enclosing folder.
3. In the repository, open Settings > Pages.
4. Under Build and deployment, set Source to Deploy from a branch.
5. Choose main and /(root), then Save.
6. Wait for GitHub's deployment to finish. The Pages settings will show the website link, usually https://YOUR-USERNAME.github.io/dad-birthday/.

GitHub documentation: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

To edit the message, change the text in index.html. All files run locally and on GitHub Pages without external fonts, libraries, or services.
