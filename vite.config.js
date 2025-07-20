import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 8090,
    host:'0.0.0.0',
    proxy: {
      '/api': {
        target: 'http://124.220.206.154/v1', // 后端服务器地址
        changeOrigin: true, // 修改请求头中的Origin为目标服务器域名
        rewrite: (path) => path.replace(/^\/api/, ''), // 移除路径中的/api前缀
      },
    },
  },
  resolve:{
    alias:{
      '@': path.resolve(__dirname, 'src'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@api': path.resolve(__dirname, 'src/api'),
    }
  }
})
