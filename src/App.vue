<template>
  <div id="app" class="wrap">
    <transition :name="transitionName">
       <keep-alive>
          <router-view class="child-view"></router-view>
       </keep-alive>
  </transition>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
@Component
export default class App extends Vue {
  transitionName  = 'slide-right'
  @Watch('$route')
  onRouterChange(to: any, from: any) {
    const toDepth = to.path.split('/').length
    const fromDepth = from.path.split('/').length
    this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
  }
}
</script>

<style lang="scss">
@import 'common/css/app';
@import 'common/css/global';
.wrap{
  background-color: #EFEFF4;
  height: 100%;
}
.child-view {
  position: absolute;
  height: 100%;
  // top: .4rem;
  width: 100%;
  transition: all .5s cubic-bezier(.55,0,.1,1);
}
.slide-left-enter, .slide-right-leave-active {
  opacity: 0;
  -webkit-transform: translate(30px, 0);
  transform: translate(30px, 0);
}
.slide-left-leave-active, .slide-right-enter {
  opacity: 0;
  -webkit-transform: translate(-30px, 0);
  transform: translate(-30px, 0);
}

.fadeInUp-enter-active, .fadeInUp-leave-active {
  opacity: 1;
  transform: none;
  transition: transform .5s
}
.fadeInUp-enter, .fadeInUp-leave-to {
   opacity: 0;
  transform: translate3d(0, 100%, 0);
}

.fadeInRight-enter-active, .fadeInRight-leave-active {
    opacity: 1;
    transform: none;
    transition: transform .5s
}
.fadeInRight-enter, .fadeInRight-leave-to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
}
</style>
