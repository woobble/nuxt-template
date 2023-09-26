// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  typescript: { typeCheck: true, shim: false },
  devtools: { enabled: true,
    timeline: {
      enabled: true,
    },
 },
  modules: [
    '@nuxt/ui',
    '@nuxt/image',
    '@nuxtjs/plausible',
    '@nuxtjs/fontaine',
    '@nuxtjs/google-fonts',
    '@vueuse/nuxt'
  ],
  image: {
    screens: {
      sm: 640,
      lg: 1024
    }
  },
  fontMetrics: {
    inline: false,
    fonts: [
      {
        family: 'Roboto',
        fallbacks: ['Arial']
      }
    ],
  },
  googleFonts: {
    display: 'swap',
    download: true,
    families: {
      'Roboto': true,
    },
  },
  colorMode: {
    preference: 'dark',
  },
  postcss: {
    plugins: {
      "tailwindcss/nesting": "postcss-nesting",
      tailwindcss: {},
      autoprefixer: {},
      ...(process.env.NODE_ENV === "production" ? { cssnano: {} } : {}),
    },
  },
  nitro: {
    preset: "bun",
  },
})
