import { boot } from 'quasar/wrappers'

import ElementPlus from 'element-plus';
import  'element-plus/lib/theme-chalk/index.css';
import locale from 'element-plus/lib/locale/lang/zh-cn'

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async ({ app/*, router*/}) => {
  // something to do
  //  app.use(router)
  app.use(ElementPlus,{ locale })
})
