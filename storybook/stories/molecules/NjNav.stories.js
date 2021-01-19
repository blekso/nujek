import NjNav from '@nujek/ui/components/molecules/NjNav/NjNav'
import NjNavSimple from '@nujek/ui/components/molecules/NjNav/NjNavSimple'
import NjNavBasic from '@nujek/ui/components/molecules/NjNav/NjNavBasic'
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
  title: 'NjNav',
  component: NjNav,
  NjNavSimple,
  NjNavBasic
}

export const DefaultNav = (arg, { argTypes }) => ({
  components: { NjNav },
  template: `
    <div>
      <NjNav class="bg-gray-200" v-bind="$props">
        <template #burger-menu>
          <NjBurger :open.sync="isOpenBurger" />
        </template>
      </NjNav>
    
      <NjSidebar :show.sync="isOpenBurger" />
    </div>
  `,
  computed: {
    ...mapState({
      navOpen: (state) => state.nav.navOpen
    }),
    ...mapGetters({
      mainNavigation: 'nav/main'
    }),
    isOpenBurger: {
      get: function () {
        return this.navOpen
      },
      set: function (val) {
        this.$store.dispatch('nav/set', val)
      }
    }
  },
  methods: {
    ...mapActions({
      toggleSidebar: 'nav/toggle',
      closeSidebar: 'nav/close'
    })
  }
})

export const SimpleNav = (arg, { argTypes }) => ({
  components: { NjNavSimple },
  template: `
    <div>
      <NjNavSimple class="bg-gray-200" v-bind="$props">
        <template #logo>
          <img src="http://placekitten.com/100/100" alt="logo" />
        </template>
        <template #burger-menu>
          <NjBurger :open.sync="isOpenBurger" />
        </template>
      </NjNavSimple>
    
      <NjSidebar :show.sync="isOpenBurger" />
    </div>
  `,
  computed: {
    ...mapState({
      navOpen: (state) => state.nav.navOpen
    }),
    ...mapGetters({
      mainNavigation: 'nav/main'
    }),
    isOpenBurger: {
      get: function () {
        return this.navOpen
      },
      set: function (val) {
        this.$store.dispatch('nav/set', val)
      }
    }
  },
  methods: {
    ...mapActions({
      toggleSidebar: 'nav/toggle',
      closeSidebar: 'nav/close'
    })
  }
})

export const BasicNav = (arg, { argTypes }) => ({
  components: { NjNavBasic },
  template: `
    <div>
      <NjNavBasic class="bg-gray-200" v-bind="$props">
        <template #logo>
          <img src="http://placekitten.com/100/100" alt="logo" />
        </template>
        <template #nav>
          <img src="http://placekitten.com/100/100" alt="logo" />
        </template>
        <template #toolbar>
          <img src="http://placekitten.com/100/100" alt="logo" />
        </template>
        <template #burger-menu>
          <NjBurger :open.sync="isOpenBurger" />
        </template>
      </NjNavBasic>
      <NjSidebar :show.sync="isOpenBurger" />
    </div>
  `,
  computed: {
    ...mapState({
      navOpen: (state) => state.nav.navOpen
    }),
    ...mapGetters({
      mainNavigation: 'nav/main'
    }),
    isOpenBurger: {
      get: function () {
        return this.navOpen
      },
      set: function (val) {
        this.$store.dispatch('nav/set', val)
      }
    }
  },
  methods: {
    ...mapActions({
      toggleSidebar: 'nav/toggle',
      closeSidebar: 'nav/close'
    })
  }
})
