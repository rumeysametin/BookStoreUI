// https://nuxt.com/docs/api/configuration/nuxt-config
export default({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
  ],
  router: {
    middleware: [
      { name: 'your-middleware', override: true }
    ]
  },
})
