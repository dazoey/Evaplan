import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  base: './', // Ensure relative paths for PWA assets
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      // devOptions: { // Remove devOptions for production-like testing
      //   enabled: true
      // },
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'mask-icon.svg'],
      manifest: {
        id: '/', // Explicitly define ID
        name: 'Evaplan',
        short_name: 'Evaplan',
        description: 'An event planner application',
        theme_color: '#ffffff',
        background_color: '#ffffff', // Often required
        display: 'standalone', // Essential for installability
        start_url: './index.html', // Point to index.html with relative path
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable' // Recommended for maskable icons
          }
        ],
        // Optional: Add screenshots and shortcuts for better presentation
        // shortcuts: [
        //   {
        //     name: 'Add Event',
        //     short_name: 'Add',
        //     description: 'Add a new event',
        //     url: '/add',
        //     icons: [{ src: '/icons/add-event-192.png', sizes: '192x192' }]
        //   }
        // ],
        // screenshots: [
        //   {
        //     src: '/screenshots/screenshot1.png',
        //     sizes: '1280x720',
        //     type: 'image/png'
        //   }
        // ],
        prefer_related_applications: false // Prevent browser from suggesting native app
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,webmanifest}'], // Cache all essential assets
      },
      injectRegister: 'auto', // Inject service worker registration code
      // other PWA options
    })
  ],
})
