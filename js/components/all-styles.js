export default Vue.extend({
  render: function (createElement) {
    return createElement('style', this.$store.getters.css_all)
  }
});