# Youthcode Foundation — Website

A single-page site for **Youthcode Foundation**, a youth empowerment organisation based in Thembalethu, George, Western Cape, South Africa.

🔗 **Live site:** enable GitHub Pages (see below) to get your link.

## What's in here

```
.
├── index.html      → All page content and structure
├── styles.css      → Full design system (colours, type, layout, responsive rules)
├── script.js       → Nav, typewriter effect, stat counters, programme tabs, scroll reveals
├── assets/
│   ├── logo.png    → Full Youthcode Foundation logo (wordmark + mark)
│   └── mark.png     → Cropped circular mark, used as favicon and in the nav/footer
└── README.md
```

No build step, no dependencies, no framework. Just open `index.html` in a browser, or deploy as-is.

## How to publish this on GitHub Pages

1. Create a new repository on GitHub (e.g. `youthcode-foundation`).
2. Upload all the files in this folder to the repository (keep the `assets/` folder structure intact).
3. In your repository, go to **Settings → Pages**.
4. Under **Build and deployment → Source**, choose **Deploy from a branch**.
5. Select the `main` branch and `/ (root)` folder, then click **Save**.
6. After a minute or two, your site will be live at:
   `https://<your-username>.github.io/<repository-name>/`

## Updating content later

- **Text and section content** → edit `index.html` directly.
- **Colours, fonts, spacing** → edit the `:root` variables at the top of `styles.css`.
- **Programme cards, roadmap, impact numbers** → all hand-written in `index.html`, search for the relevant section comment (e.g. `PROGRAMMES`, `ROADMAP`, `IMPACT`).
- **Logo** → replace `assets/logo.png` and `assets/mark.png` with new files of the same name to update branding everywhere at once.

## Contact details on the site

- Founder: Xolela Max Booi
- Email: tutusebooi@gmail.com
- Phone: 083 479 0698
- Location: Thembalethu, George, Western Cape

Update these in `index.html` under the `CONTACT` section if they change.
