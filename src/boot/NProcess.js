import { boot } from 'quasar/wrappers'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

NProgress.inc(0.2)
NProgress.configure({ easing: 'ease', speed: 600, showSpinner: false })

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async ( {  router } ) => {
        // 设置title
        router.beforeEach((to, from, next) => {
              // 启动进度条
              NProgress.start()

              // 设置头部
              if (to.meta.title) {
                document.title = to.meta.title
              } else {
                document.title = "默存"
              }
              next()
        })

        router.afterEach(() => {
              // 关闭进度条
              NProgress.done()
        })
})
