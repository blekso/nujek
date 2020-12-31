import Vue from 'vue'
// const transformName = (string) => string.replace(/\s+/g, '-').toLowerCase()

// export const getConfig = (component, props) => {
//   const componentProps = component?.options?.props

//   if (!props || !componentProps) {
//     return component
//   }

//   const customProps = {}

//   Object.keys(props).forEach((customPropName) => {
//     const defaultProp = componentProps[customPropName]

//     if (!defaultProp) {
//       return
//     }
//     const newDefaultValue = props[customPropName]

//     console.log('install', newDefaultValue)

//     customProps[customPropName] = {
//       type: defaultProp?.type,
//       default: ['object', 'function'].includes(typeof newDefaultValue)
//         ? () => newDefaultValue
//         : newDefaultValue
//     }
//   })

//   return customProps
// }

// install function executed by Vue.use()
// eslint-disable-next-line max-len
const install = function installNujek(vueInstance, settings) {
  if (install.installed) return

  install.installed = true

  // eslint-disable-next-line no-param-reassign
  vueInstance.prototype.$nujek = true

  if (!settings) {
    return
  }

  // Object.keys(settings).forEach((componentName) => {
  //   const componentSettings = settings[componentName]

  //   // if (
  //   //   typeof componentSettings === 'function' &&
  //   //   typeof componentSettings.extend !== undefined
  //   // ) {
  //   //   const component = componentSettings
  //   //   vueInstance.component(componentName, configure(component))
  //   //   return
  //   // }

  //   const { component, props } = componentSettings

  //   configure(component, props)

  //   // vueInstance.component(
  //   //   componentName.replace('nj', 'n'),
  //   //   configure(component, props)
  //   // )
  // })

  const modsName = 'nujekClasses'
  const propName = 'types'

  console.log('install nujek plugin')

  // Vue.mixin({
  //   // Dependency injection forces us to explicitly require that function
  //   provide: {
  //     [modsName](baseClass) {
  //       console.log("$nujekClasses", baseClass)
  //       // baseClass = baseClass || transformName(this.$options.name)
  //       // return (this[propName] || []).map((type) => `${baseClass}--${type}`)
  //       return ' ok'
  //     },
  //     nujekConfig(componentName) {
  //       console.log("$nujekConfig", componentName)
  //       //Object.keys(settings).forEach((componentName) => {
  //       //const componentSettings = settings[componentName]
  //       //const { component, props } = componentSettings
  //       //return getConfig(component, props)
  //       //})
  //       return 'test'
  //     }
  //   },
  //   props: {
  //     // Prop name is now dynamic and allows to avoid conflits
  //     [propName]: {
  //       type: Array,
  //       default: () => []
  //     }
  //   }
  // })
}

// Create module definition for Vue.use()
const plugin = {
  install
}

// Default export is library as a whole, registered via Vue.use()
export default plugin
