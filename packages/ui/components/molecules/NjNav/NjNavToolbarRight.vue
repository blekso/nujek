<template>
  <div :class="getThemeClass('wrapper')">
    <slot name="header">
      <header :class="getThemeClass('header')">
        <div class="col-span-4 flex">
          <slot name="burger-menu" />
          <slot name="logo" />
          <slot name="nav" />
        </div>
        <div class="flex justify-end">
          <slot name="toolbar" />
        </div>
      </header>
    </slot>
  </div>
</template>
<script>
import Component from '../../../base/Component'
import NjBurger from '../../atoms/NjBurger'
import Vue from 'vue'
import NjNavItem from './NjNavItem'
Vue.component('NjNavItem', NjNavItem)

const NjNavToolbarRight = Component.extend({
  name: 'NjNavToolbarRight',
  components: {
    NjBurger
  },
  props: {
    burgerOpen: {
      type: Boolean,
      default: false
    },
    classes: {
      type: Object,
      default() {
        return {
          wrapper: 'w-full',
          header: 'grid md:grid-cols-6'
        }
      }
    }
  }
})
export default NjNavToolbarRight
</script>
