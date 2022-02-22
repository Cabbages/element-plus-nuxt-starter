export default defineNuxtRouteMiddleware((to, from) => {
  console.log('defineNuxtRouteMiddleware')
    const { buttons } = useResources()
    if(buttons.value.includes(to.fullPath) ) {
     return navigateTo('/404')
    } else if(to.fullPath === 'private') {
      return null
    }
  })