import { defineNuxtPlugin } from '#app'
// if you do not want to import all, comment this
import ElementPlus from 'element-plus/lib'
import locale from 'element-plus/lib/locale/lang/zh-cn'

// we are explore import components on demand, but @nuxt/components seem not support components/ComponentA/index.js
// https://github.com/nuxt/components#library-authors

export default defineNuxtPlugin((nuxtApp) => {
  console.log('defineNuxtPlugin')
  nuxtApp.vueApp.use(ElementPlus, {
    locale,
    size: "small"
  })
})
