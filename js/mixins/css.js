export default {
  beforeCreate() {
    const { name, css } = this.$options
    if (!name || !css) return console.error('the component should have a name and css', this)
    this.$store.commit('css_add', { key: name, styleString: css })
  },
  destroyed() {
    const { name } = this.$options
    if (name) this.$store.commit('css_remove', name)
  }
}