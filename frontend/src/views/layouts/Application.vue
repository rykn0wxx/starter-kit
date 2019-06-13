<template>
  <div class="layouts-application layout-column flex bg-gray-200">
    <GlbToolbar />
    <main class="main-content layout-column flex overflow-y-auto overflow-x-hidden lg:px-24 px-6 lg:py-0 py-2 relative" role="main">
      <transition :name="transitionType" appear>
        <RouterView class="layout-padding flex-noshrink" />
      </transition>
    </main>
  </div>
</template>

<script>
export default {
  name: 'LayoutsApplication',
  data () {
    return {
      transitionType: 'zoom-in',
      curPageIndex: null
    }
  },
  watch: {
    '$route': {
      handler: 'routeHandler',
      immediate: true
    }
  },
  methods: {
    routeHandler (newVal, oldVal) {
      if (this.curPageIndex) {
        this.transitionType = (newVal.meta.index > this.curPageIndex) ? 'slide-left' : 'slide-right'
      }
      this.curPageIndex = newVal.meta.index
    }
  }
}
</script>

<style lang="scss" scoped>
$trans-duration: 1s;
@import '../../sass/animations';

// .slide-enter-active, .slide-leave-active {
//   transition-duration: 10s;
//   transition-property: opacity, transform, visibility;
//   transition-timing-function: ease-in-out;
// }
// .slide-leave-active {
//   position: absolute;
// }
// .slide-enter {
//   transform: translate3d(-100%, 0, 0);
//   opacity: 0;
//   visibility: hidden;
// }
// .slide-enter-to {
//   transform: translate3d(0, 0, 0);
//   opacity: 1;
//   visibility: visible;
// }
// .slide-leave {
//   transform: translate3d(0, 0, 0);
//   opacity: 1;
//   visibility: visible;
// }
// .slide-leave-to {
//   transform: translate3d(100%, 0, 0);
//   opacity: 0;
//   visibility: hidden;
// }
</style>
