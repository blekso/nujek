import NjNavToolbarRight from '@nujek/ui/components/molecules/NjNav/NjNavToolbarRight'
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
  title: 'NjNavToolbarRight',
  component: NjNavToolbarRight
}

export const DefaultNav = (arg, { argTypes }) => ({
  components: { NjNavToolbarRight },
  template: `
    <div>
      <NjNavToolbarRight class="bg-gray-200" v-bind="$props">
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
      </NjNavToolbarRight>
    
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
