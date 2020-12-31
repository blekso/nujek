const styleMixin = (name) => ({
  computed: {
    getElementCssClass(name) {
      return name + ' - css style mxin'
    }
  }
})

export default styleMixin
