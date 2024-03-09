import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    hmr: true,
    proxy: {
      '/msearchcdn': {
        target: 'http://msearchcdn.kugou.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/msearchcdn/,''),
      },
      '/mobilecdnbj': {
        target: 'http://mobilecdnbj.kugou.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/mobilecdnbj/,''),
      }
    }
  },
  base: './',
  plugins: [vue()],
  resolve: {
    // 文件系统路径的别名
    alias: {
      'vue': 'vue/dist/vue.esm-bundler.js',
      '@':path.resolve(__dirname,'./src'),
    },
  },
  
})
