/**
 * Client app enhancement file.
 *
 * https://v1.vuepress.vuejs.org/guide/basic-config.html#app-level-enhancements
 */

export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData // site metadata
}) => {
  // ...apply enhancements to the app
  if (siteData.pages) {
    if (siteData.pages[0].excerpt) {
      siteData.pages[0].summary = siteData.pages[0].excerpt
    }
  }
}
