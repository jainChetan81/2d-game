# Game 2D

A 2D game built with TypeScript and Kaboom.js game library.

## Tech Stack & Configuration

### Core Technologies
- **Language**: TypeScript (~5.8.3)
- **Build Tool**: Vite (using rolldown-vite@7.1.12)
- **Game Library**: Kaboom.js (3000.1.17)
- **Package Manager**: Bun
- **Linter/Formatter**: Biome (^2.2.4)

### Vite Configuration
- Development server runs on port 3000
- Uses rolldown-vite for optimized builds
- Hot Module Replacement (HMR) enabled for fast development
- Configuration file: `vite.config.ts`

### Biome Configuration
Our code quality is maintained using Biome, which handles both linting and formatting:
- **Formatter Settings**:
  - Indentation: Tabs
  - Quote Style: Double quotes
  - Auto-organize imports on save
- **Linter**: Enabled with recommended rules
- Configuration file: `biome.json`

### TypeScript Configuration
- Strict mode enabled
- ES modules target
- Configuration file: `tsconfig.json`

### Environment-Based Debug Mode
The Kaboom game context automatically switches between debug modes:
- **Development** (`bun run dev`): Debug mode enabled
- **Production** (`bun run build`): Debug mode disabled

This is controlled via Vite's `import.meta.env.MODE` in `src/kaboomCtx.ts`.

## Getting Started

### Installation
```bash
bun install
```

### Development
```bash
bun run dev
```
Starts the development server at `http://localhost:3000`

### Build
```bash
bun run build
```
Compiles TypeScript and builds for production

### Preview
```bash
bun run preview
```
Preview the production build locally

### Code Quality
```bash
# Check linting and formatting
bun run lint

# Auto-fix linting issues
bun run lint:fix

# Format code
bun run format
```

## Project Structure
```
game-2d/
├── src/
│   ├── main.ts          # Application entry point
│   ├── kaboomCtx.ts     # Kaboom game context initialization
│   ├── constants.ts     # Game constants
│   └── style.css        # Global styles
├── public/              # Static assets
├── index.html           # HTML entry point
├── vite.config.ts       # Vite configuration
├── biome.json          # Biome linter/formatter config
├── tsconfig.json       # TypeScript configuration
└── package.json        # Dependencies and scripts
```

---

## About the Game

### Overview
This is an **interactive 2D portfolio game** - a unique way to explore a developer's resume and work experience. Players control a character in a top-down view, walking around a bedroom and interacting with various objects to learn about the developer's skills, projects, and interests.

### How It Works

#### Player Controls
- **Movement**: Click or tap anywhere on the screen to move the character to that location
- **Interaction**: Walk up to interactive objects to trigger dialogue boxes
- **Mobile & Desktop**: Fully responsive with touch-to-mouse conversion for seamless cross-platform experience

#### Character System
The player character features:
- **4-directional movement**: Walk up, down, left, and right
- **Animated sprites**: Smooth walking animations in all directions
- **Idle animations**: Character has distinct idle poses for each direction
- **Spritesheet-based**: Uses a 39x31 frame spritesheet (`spritesheet.png`)

#### Interactive Objects
The game world contains several interactive elements:
- **PC**: Information about programming languages and skills
- **Desk/Resume**: Link to downloadable resume and contact information
- **TV**: Favorite tech content creators and influences
- **Bed**: Personal thoughts and creative process
- **Sofa**: YouTube channel and tutorials
- **Library**: Reading habits and technical books
- **CS Degree**: Educational background
- **Projects Area**: Portfolio projects and technical details

### Technical Implementation

#### Game Architecture
- **Game Engine**: Kaboom.js handles sprite rendering, animations, and game loop
- **Map System**: JSON-based tilemap (`map.json`) defines the room layout
- **Sprite Management**: Sliced spritesheet with defined animation frames
- **UI Layer**: HTML/CSS overlay for dialogue boxes and text rendering
  - Game canvas renders the 2D world
  - Textbox container displays interactive dialogue
  - Supports embedded HTML links in dialogue text

#### Asset Pipeline
- `spritesheet.png` - Character sprites and animations
- `map.png` - Visual tileset for the room
- `map.json` - Tiled map data with collision layers
- `monogram.ttf` - Custom font for retro aesthetic

#### Dialogue System
Dialogues are defined in `constants.ts` with:
- Key-value pairs mapping objects to dialogue text
- Support for HTML links to external resources (GitHub, YouTube, resume)
- Dynamic text rendering via DOM manipulation
- Close button to dismiss and continue exploring

### Game Features
✨ **Interactive Portfolio**: Learn about the developer by exploring their virtual space
🎮 **Smooth Controls**: Click/tap to move with pathfinding
📱 **Cross-Platform**: Works on desktop and mobile devices
🎨 **Pixel Art Style**: Retro aesthetic with custom sprites and tilemap
🔗 **External Links**: Direct links to GitHub, YouTube, resume, and contact info
⚡ **Fast Loading**: Optimized with Vite for quick startup times


