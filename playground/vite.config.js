import { defineConfig } from 'vite'
import solidPlugin from 'vite-plugin-solid'
import WindiCSS from 'vite-plugin-windicss'
export default defineConfig({
  plugins: [WindiCSS(), solidPlugin()],
  server: {
    port: 3000
  },
  build: {
    target: 'esnext'
  }
})
