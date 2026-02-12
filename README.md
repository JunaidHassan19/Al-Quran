# Al Quran — Read, Listen, Reflect

A calm, modern web application for reading the Holy Quran. Browse all 114 surahs, listen to recitations, track your reading plan, and capture personal reflections — all in a beautifully designed, distraction-free interface.

## Features

- **Surah Library** — Browse all 114 surahs with search, filter by revelation type (Meccan / Medinan), and sort by number, name, or length.
- **Verse of the Day** — Displays a highlighted verse in Arabic with English and Urdu translations.
- **Audio Recitation** — Built-in audio player with waveform animation for listening to verse recitations.
- **Reading Plan Dashboard** — Weekly rhythm tracker with a checklist for surah sessions, reflections, and memorization blocks. Progress is saved in the browser.
- **Listening Queue** — Add surahs to a personal listening queue for focused recitation sessions.
- **Reflection Notes** — Capture insights and tag them by theme (Mercy, Guidance, Patience, Gratitude, and more).
- **Responsive Design** — Optimized for desktop, tablet, and mobile screens with a focus-friendly layout.

## Tech Stack

- **HTML** — Semantic markup with accessibility attributes (`aria-*` labels, roles).
- **CSS** — Custom properties, responsive grid layouts, glassmorphism styling, and smooth animations.
- **JavaScript** — Vanilla JS with no external dependencies. All 114 surahs are stored client-side for fast filtering and search.

## Getting Started

No build tools or server required. Simply open `index.html` in a browser:

```bash
# Clone the repository
git clone https://github.com/JunaidHassan19/Al-Quran.git

# Open in your browser
open Al-Quran/index.html
```

Or serve locally with any static file server:

```bash
npx serve Al-Quran
```

## Project Structure

```
Al-Quran/
├── index.html   # Main page with all sections (hero, surah library, plans, about)
├── script.js    # Application logic — surah data, search/filter, audio, plans, queue
├── styles.css   # Complete styling — layout, components, responsive breakpoints
└── README.md    # Project documentation
```

## Author

Designed and built by **Junaid Hassan** — [github.com/JunaidHassan19](https://github.com/JunaidHassan19)

## License

This project is open source. Feel free to use, modify, and share.
