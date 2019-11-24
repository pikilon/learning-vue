import { dynamicTemplate } from '../utils/loadDynamicTemplate.js'

Vue.component('my-button', dynamicTemplate({
  template: '/js/components/my-button.template.html'
}))