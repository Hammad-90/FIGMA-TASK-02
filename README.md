# PLAY — YouTube-style React App

Frontend assignment project built in React to match the PLAY Figma / screenshot design.

This is the **frontend-only** version. A Node.js + Express + database backend can be added later.

## Features

- Home feed with horizontal video cards (thumbnail + title + channel + description)
- Sidebar navigation: Home, Liked Videos, History, My content, Collection, Subscribers, Support, Settings
- Header with PLAY logo, search, Log in, and purple Sign up button
- Search results page
- Watch page with related videos
- Channel page
- Login / Sign up screens
- Responsive layout (sidebar becomes a drawer on smaller screens)
- Reusable components: `Header`, `Sidebar`, `VideoCard`, `VideoList`, `Layout`

## Run locally

```bash
cd play-app
npm install
npm run dev
```

Then open the URL Vite prints (usually `http://localhost:5173`).

## Project structure

```
src/
  components/   reusable UI
  pages/        one file per screen
  data/videos.js  mock video data
  App.jsx       routes
```

## Notes for submission

- Follows the dark PLAY UI from the assignment screenshot.
- Uses React Router for multiple pages.
- Video data is mocked so the UI works before the backend module.
- Restricted mode is on by default in Settings for a school-safe app.
