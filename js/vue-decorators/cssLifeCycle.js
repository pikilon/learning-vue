export default (styleString, vueProps) => {
  const { name, beforeCreate, destroyed } = vueProps
  if (!name) return console.error('the component should have a name')
  const result = {
    beforeCreate() {
        this.$store.commit('css_add', { key: name, styleString })
        if (beforeCreate) beforeCreate()
      },
      destroyed() {
        this.$store.commit('css_remove', name)
        if (destroyed) destroyed()
    }
  }
  return {...vueProps, ...result}
}