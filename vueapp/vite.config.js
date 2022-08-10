import { defineConfig, resolveBaseUrl } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { resolve } from "path";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  root: "./src/pages/",
  base: './',
  filenameHashing: true,
  lintOnSave: true,
  build: {
    assetsDir: "static",
    rollupOptions: {
      input: {
        main: "./src/pages/editor.html",
        panel: "./src/pages/panel.html"
      },
      output: { dir: "./dist" },
    }
  }
})
