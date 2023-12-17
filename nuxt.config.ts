// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/tailwind.css'],
  modules: ["@nuxtjs/tailwindcss"],
  // postcss: {
  //   plugins: {
  //     tailwindcss: {},
  //     autoprefixer: {},
  //   },
  // },
  app : {
    head :{
      title: "Powerhuman Salvia",
      meta : [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: '' },
        { name: 'format-detection', content: 'telephone=no' },
      ],
      link :[
        {
          rel:"icon",
          type:'image/svg+xml',
          sizes:'16x16',
          href:'/logo-white.svg'
        },
        {
          rel:'stylesheet',
          href:'https://pro.fontawesome.com/releases/v5.10.0/css/all.css',
          integrity:"sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p",
          crossorigin:"anonymous"
        },
      ] 
    }
  }
})
