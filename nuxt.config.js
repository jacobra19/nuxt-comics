export default {
    env: {
        baseAPI: process.env.API
    },
    buildModules: [
        ['@nuxtjs/vuetify', { /* module options */ }]
    ],
    modules: ['@nuxtjs/axios'],

    components: true,
}