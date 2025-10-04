# Game 2D - Project Info

## Stack
- TypeScript (~5.8.3) - strict mode
- Kaboom.js (3000.1.17) - game engine
- Vite (rolldown-vite@7.1.12) - dev server on port 3000
- Biome (^2.2.4) - linter/formatter (tabs, double quotes, auto-organize imports)
- Bun - package manager
- Lefthook - git hooks (pre-commit: format staged files, pre-push: lint + type-check)

## Files
- `src/main.ts` - game scene, sprite loading, player movement, collision, camera
- `src/kaboomCtx.ts` - kaboom instance (debug mode on in dev, off in production)
- `src/constants.ts` - scaleFactor (4), dialogueData for interactive objects
- `src/utils.ts` - displayDialogue(), setCamScale()
- `src/style.css` - UI styles (textbox, buttons, monogram font)
- `public/spritesheet.png` - character animations (39x31 sliced)
- `public/map.png` + `map.json` - game map and boundaries
- `index.html` - canvas element (#game) and dialogue UI (#textbox-container)

## Game Logic
- Player moves by clicking/tapping or arrow keys
- Character has walk/idle animations for 4 directions
- Camera follows player with responsive scaling
- Colliding with named boundaries triggers dialogue
- Dialogue displays character-by-character in HTML textbox
- Close dialogue with button or Enter key

## Scripts
- `bun run dev` - dev server
- `bun run build` - TypeScript compile + build
- `bun run lint` / `lint:fix` / `format` - Biome code quality
