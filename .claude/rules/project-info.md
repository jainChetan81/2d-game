# Game 2D Project

## Project Overview
This is a 2D game project built with TypeScript and Vite, using the Kaboom.js game library.

## Tech Stack
- **Build Tool**: Vite (using rolldown-vite@7.1.12)
- **Language**: TypeScript (~5.8.3)
- **Game Library**: Kaboom (3000.1.17)
- **Linter/Formatter**: Biome (^2.2.4)
- **Package Manager**: Bun

## Project Structure
```
game-2d/
├── src/
│   ├── main.ts          # Entry point (imports CSS only, ready for game code)
│   └── style.css        # Generic styles (buttons, links, root styles)
├── public/              # Static assets
├── index.html           # HTML entry point with #app div
├── vite.config.ts       # Vite configuration
├── biome.json          # Biome linter/formatter config
├── tsconfig.json       # TypeScript configuration
└── package.json        # Dependencies and scripts
```

## Available Scripts

### Development
- `bun run dev` - Start development server on port 3000
- `bun run build` - Build for production (runs TypeScript compiler + Vite build)
- `bun run preview` - Preview production build

### Code Quality
- `bun run lint` - Check code with Biome (linting + formatting)
- `bun run lint:fix` - Fix linting issues automatically
- `bun run format` - Format code with Biome

## Biome Configuration
- **Formatter**: Enabled, uses tabs, double quotes
- **Linter**: Enabled with recommended rules
- **Import Organization**: Auto-organize imports on save
- Config file: `biome.json`

## Vite Configuration
- Basic setup in `vite.config.ts`
- Dev server runs on port 3000
- Uses rolldown-vite for faster builds

## Development Guidelines
1. Run `bun run lint` before committing
2. Use Biome for consistent formatting (tabs, double quotes)
3. TypeScript strict mode enabled
4. Entry point is `src/main.ts` which renders into `#app` div
5. Use Kaboom.js for game development features

## Notes
- Boilerplate code has been removed
- Project is set up and ready for game development
- All generic styles are preserved in style.css
