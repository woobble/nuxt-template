export default defineNuxtPlugin((nuxtApp) => {
    const colorMode = useColorMode()
    
    nuxtApp.hook("app:mounted", () => {
        if (colorMode.preference !== 'dark') {
          colorMode.preference = 'dark'
        }
    })
})