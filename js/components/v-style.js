export default Vue.extend({
  name: 'vstyle',
  render: function (createElement) {
    return createElement('style', this.$slots.default)
  }
});