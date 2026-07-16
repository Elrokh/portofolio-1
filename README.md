# PortfolioCraft

A complete interactive portfolio builder built with React.js, Tailwind CSS and JSX.

The project is pre-filled with the professional profile of **Mustafa Ibrahim Galal** and includes separate front-end and graphic design portfolios, live editing, responsive preview controls, local autosave, section reordering, visual customization, a public portfolio route and PDF export.

## Main features

- Three portfolio template directions: Modern Developer, Minimal Professional and Creative Designer.
- Full personal profile editor with a professional profile image.
- About, education, skills, experience and certificate editors.
- Separate Front End and Graphic Design project collections.
- Live desktop, tablet and mobile preview.
- Native drag-and-drop section ordering.
- Section visibility controls.
- Dark and light portfolio modes.
- Editable palette, typography and corner radius.
- LocalStorage autosave.
- Public route using a custom slug.
- Copyable public portfolio URL.
- High-resolution PDF export using html2canvas and jsPDF.
- Responsive landing page and dashboard.

## Tech stack

- React.js
- React Router
- Tailwind CSS
- Framer Motion
- Lucide React
- html2canvas
- jsPDF
- Vite

## Installation

```bash
npm install
npm run dev
```

Open the local Vite URL shown in the terminal.

## Production build

```bash
npm run build
npm run preview
```

## Main routes

```text
/                         Landing page
/dashboard                Portfolio dashboard
/builder                   Interactive builder
/portfolio/mustafa-elrokh  Public portfolio
```

## Image locations

The supplied professional image is stored at:

```text
src/assets/images/mustafa-profile.jpg
```

Demo project artwork is stored in:

```text
public/projects/
```

Replace the SVG demo artwork or edit its path directly inside the Projects panel.

## Important note about publishing

The current project is a complete front-end implementation and saves data in the user's browser with LocalStorage. The shareable route works inside the deployed React application. To support multiple accounts and permanent cloud-hosted portfolios, connect the context layer to a backend such as Firebase, Supabase or a custom API.
