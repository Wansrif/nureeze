// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@nuxtjs/color-mode',
    '@nuxtjs/i18n',
    'nuxt-icon',
    '@vueuse/nuxt',
  ],
  colorMode: {
    classSuffix: '',
  },
  googleFonts: {
    families: {
      Manrope: true,
      'Source Sans Pro': true,
    },
  },
  i18n: {
    lazy: true,
    langDir: 'locales/',
    strategy: 'prefix_except_default',
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        name: 'English',
        file: 'en.json',
      },
      {
        code: 'id',
        iso: 'id-ID',
        name: 'Indonesia',
        file: 'id.json',
      },
    ],
    defaultLocale: 'en',
    vueI18n: './i18n.config.ts',
    compilation: {
      jit: true,
      strictMessage: false,
      escapeHtml: false,
    },
  },
  // app: {
  //   head: {
  //     script: [
  //       {
  //         src: 'https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js',
  //         defer: true,
  //       },
  //     ],
  //   },
  // },
});
