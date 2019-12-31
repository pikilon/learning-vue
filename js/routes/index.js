import app from '../components/app/index.js'

const routes = [
  {path: '/:testSlug?', component: app},
]
export default new VueRouter({ routes })