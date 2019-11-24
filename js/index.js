// Vue.component('my-button',{
//   template: //html
//   `
//     <button>My button</button>
//   `
// })
import './components/my-button.js';


var app = new Vue({
  el: '#app',
  template: //html
  `<my-button />`,
  data: {
    message: 'Hola Vue!'
  }
})
