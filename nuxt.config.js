export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'lena',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300&display=swap'}
    ]
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    {src: '~/assets/scss/main.scss', lang: 'scss'}
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~plugins/aos', ssr: false },
    { src: '@/plugins/vue-material-design-icons', mode: 'client' },
    { src: '~/plugins/app-contlors.js'}
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
      [
        '@nuxtjs/firebase',
        {
          config: {
            apiKey: "AIzaSyB4RsDewLvjifrsKpVfMWo1F1d42OSeXJk",
            authDomain: "lenaplash-16c83.firebaseapp.com",
            databaseURL: "https://lenaplash-16c83-default-rtdb.firebaseio.com",
            projectId: "lenaplash-16c83",
            storageBucket: "lenaplash-16c83.appspot.com",
            messagingSenderId: "812865894070",
            appId: "1:812865894070:web:fc05f855b22f932cf8d817",
            measurementId: "G-48Y7B3JHDF"
          },
          services: {
            auth: true // Just as example. Can be any other service.
          }
        }
      ]
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    vendor: ['moment', 'lodash'],
  }
}
