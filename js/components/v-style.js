export const TAG = 'v-style'

Vue.component(TAG, {
  render: function (createElement) {
    return createElement('style', this.$slots.default)
  }
});