Vue.component('v-style', {
  render: function (createElement) {
    return createElement('style', this.$slots.default)
  }
});