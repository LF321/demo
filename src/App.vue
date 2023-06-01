<template>
  <router-view v-slot="{ Component, route }">
    <transition :name="route.meta.transition || 'ease'">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<script>
// eslint-disable-next-line import/named
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App'
})
</script>

<style scoped>
.esae-enter-active,
.esae-enter-active {
  transition: opacity 2s ease;;
}

.esae-enter-from,
.esae-enter-to {
  transition: opacity 2s ease;;
}

/* 向左滑动 */
.slide-left-enter-from{
  position: fixed;
  top: 0;
  z-index: 1;
  transform: translateX(100%);
}
.slide-left-enter-active{
  transition: transform 1s;
}
.slide-left-enter-to{
  position: fixed;
  top: 0;
  z-index: 1;
  transform: translateX(0);
}
.slide-left-leave-from{
  position: fixed;
  z-index: -1;
  transform: translateX(0);
}
.slide-left-leave-active{
  transition: transform 1s;
}
.slide-left-leave-to{
  position: fixed;
  z-index: -1;
  transform: translateX(-100%);
}

/* 向右滑动 */
.slide-right-enter-from{
  position: fixed;
  top: 0;
  z-index: 1;
  transform: translateX(-100%);
}
.slide-right-enter-active{
  transition: transform 1s;
}
.slide-right-enter-to{
  position: fixed;
  top: 0;
  z-index: 1;
  transform: translateX(0);
}
.slide-right-leave-from{
  position: fixed;
  z-index: -1;
  transform: translateX(0);
}
.slide-right-leave-active{
  transition: transform 1s;
}
.slide-right-leave-to{
  position: fixed;
  z-index: -1;
  transform: translateX(100%);
}
</style>
