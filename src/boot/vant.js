import { boot } from 'quasar/wrappers'
import vant from 'vant'
import 'vant/lib/index.css'

export default boot(({ app }) => {
  // Set i18n instance on app

  app.use(vant)
})

export { vant }
