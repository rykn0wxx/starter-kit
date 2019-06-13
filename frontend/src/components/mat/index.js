import Vue from 'vue'
import { upperFirst, camelCase } from 'lodash'

const requireComponent = require.context(
  '@/components/mat', true, /\.vue$/
)

requireComponent.keys().forEach(fileName => {
  if (fileName === './index.js') {
    return
  }
  const componentConfig = requireComponent(fileName)

  const compName = upperFirst(
    camelCase(
      fileName.replace(/^\.\//, '').replace(/\.\w+$/, '')
    )
  )
  const componentName = `Mat${compName}`
  Vue.component(componentName, componentConfig.default || componentConfig)
})
