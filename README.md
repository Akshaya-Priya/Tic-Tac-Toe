# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


## Goals of this Project
- Add a good CSS
- Show who is playing X or O
- Dynamic size of board
- Switching of turns
- The Game Ends if:
    * Board is entirely filled (draw)
    * A player wins
- Once the Game Ends:
    * there Should be a New Game Button
    * Winner Announcement
    * Track of Previous Games
    * Disable the Board Clicks
- Player Options:
    * vs Computer
    * vs Pass and Pass