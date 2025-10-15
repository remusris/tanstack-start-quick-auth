import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import { defineConfig } from 'vite'
import tsConfigPaths from 'vite-tsconfig-paths'
import viteReact from '@vitejs/plugin-react'
import { nitroV2Plugin } from '@tanstack/nitro-v2-vite-plugin'


export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [
    nitroV2Plugin(),
    tsConfigPaths({
      projects: ['./tsconfig.json'],
    }),
    tanstackStart(),
    viteReact(),
  ],
})
