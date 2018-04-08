module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Lust for the Devil',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/skull.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Londrina+Sketch' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=UnifrakturMaguntia' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=IM+Fell+DW+Pica' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Shrikhand' }
    ],
    css: [
      // node.js module but we specify the pre-processor
      { src: './assets/main.scss', lang: 'sass' },
      // { src: 'bulma/bulma.sass', lang: 'sass' },
      { src: 'font-awesome/scss/font-awesome.scss', lang: 'scss' },
    ]
  },
  modules: [
    // provide path to the file with resources
    ['nuxt-sass-resources-loader', './assets/main.scss']
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#0ee58b' },
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
