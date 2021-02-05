import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { getAliases } from 'vite-aliases'


export default defineConfig({
  plugins: [vue()],
  alias: getAliases()
})
