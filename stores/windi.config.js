import { defineConfig } from 'windicss/helpers'
import formsPlugin from 'windicss/plugin/forms'
export default defineConfig({
  darkMode: 'class',
  safelist: 'h-full',
  theme: {},
  plugins: [formsPlugin]
})
