# Memory Card: A Pokémon Game using TypeScript + React

This is a simple memory card game built with React and TypeScript!

[Live Preview](https://memory-card-sooty-ten.vercel.app/)

## Features

- **Pokémon Theme:** Enjoy your favorite Pokémon!
- **Two Game Modes:** Choose between "Normal" mode and the more challenging "A Plethora of Pikachu!" mode.
- **Score Tracking:**  See your current score and high score as you play.

## Tech Stack

- React
- TypeScript

## Prerequisites

Before you begin, ensure you have installed:
- Node.js (v18 or higher)
- npm (v9 or higher)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/blue0206/memory-card.git
```

2. Navigate to the project directory:
```bash
cd memory-card
```

3. Install dependencies:
```bash
npm install
```

## Development

To start the development server:

```bash
npm run dev
```

This will start the application in development mode. 
Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

## Building for Production

To create a production build:

```bash
npm run build
```

This will create an optimized build in the `dist` directory.

To preview the production build locally:

```bash
npm run preview
```

## How To Play
- Get points by clicking on a pokémon but don't click any more than once!
- The game has two modes: Normal and A Plethora of Pikachu!
- The Normal mode is easy to play but the A Plethora of Pikachu! mode is a challenge!
- Clicking on a pokémon twice will result in a loss and your points will be reset!

## Project Structure

```
memory-card/
├── src/
│   ├── components/    # React components
│   ├── styles/        # CSS styles
│   ├── types/         # TypeScript type definitions
│   ├── interfaces/    # TypeScript interface definitions
│   ├── App.tsx        # Main application component
│   └── main.tsx       # Application entry point
└── index.html         # HTML template
```

## Acknowledgments

- Built as part of The Odin Project curriculum