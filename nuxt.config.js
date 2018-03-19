module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Barbara Devil',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/skull.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Londrina+Sketch' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans' },
      { rel: 'stylesheet', href: 'animate.min.css' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  // modules: [
  //   '@nuxtjs/font-awesome',
  //   '@nuxtjs/bulma'
  // ],
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
