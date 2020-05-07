// @ts-ignore
import colors from 'vuetify/es5/util/colors'
import {Configuration} from '@nuxt/types'

const nuxtConfig: Configuration = {
  mode: 'universal',
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: process.env.npm_package_description || ''}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ]
  },
  loading: {color: '#fff'},
  css: [],
  plugins: [
    '~/plugins/moment',
  ],
  typescript: {
    typeCheck: true,
    ignoreNotFoundWarnings: true
  },
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify'
  ],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
  ],
  axios: {},
  build: {
    extend(config, ctx) {}
  },
  serverMiddleware: [
    { path: '/api', handler: '~/api' },
  ],
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
}
module.exports = nuxtConfig
