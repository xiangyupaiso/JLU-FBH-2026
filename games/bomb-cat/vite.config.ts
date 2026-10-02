import { fileURLToPath, URL } from 'node:url'

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// The game ships two ways:
//   1. standalone, from its own directory          -> base './'
//   2. embedded in the wiki under /game-assets/bomb-cat/
//      -> build with --base=/game-assets/bomb-cat/ so the emitted asset URLs
//         are absolute and survive being served from a subdirectory.
export default defineConfig(() => {
  const base = process.env.GAME_BASE_PATH ?? './'

  return {
    base,
    plugins: [react()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
  }
})