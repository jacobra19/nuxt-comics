export default {
    env: {
        baseAPI: process.env.API,
        mycomicshop: process.env.mycomicshop || '',

    },
    buildModules: [
        ['@nuxtjs/vuetify', { /* module options */ }]
    ],
    modules: ['@nuxtjs/axios'],

    components: true,

    serverMiddleware: {
        '/api': '~/api'
    },
}