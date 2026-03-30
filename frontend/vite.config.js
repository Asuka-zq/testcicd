import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
    base: process.env.NODE_ENV === 'production'
    ? '/[testcicd]/'  // 替换为您的仓库名，如 '/my-vue-app/'
    : '/',
})
