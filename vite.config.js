import path, { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  base: '/entertainment-app/',
  resolve: {
    alias: {
      '@pages': path.resolve(__dirname, '/pages/'),
      '@assets': path.resolve(__dirname, '/assets/'),
      '@global': path.resolve(__dirname,'/global-components/')
    }
  },
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        home: path.resolve(__dirname, 'home.html'),
        movies: path.resolve(__dirname, 'movies.html'),
        tvseries: path.resolve(__dirname, 'tv-series.html'),
        bookmarks: path.resolve(__dirname, 'bookmarks.html'),
      }
    },
  }
}) 
