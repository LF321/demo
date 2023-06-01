<template>
  <div style="background: blue; height: 100vh; width: 100vw;">
    <q-btn color="primary" @click="showRedEnvelope">打开红包</q-btn>

    <div v-if="shouldshowRedEnvelope" class="mask column">
      <q-img class="red-envelop" src="~/assets/red.png" @click="stop"/>
      <q-icon name="close" size="32px" @click="close" />
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line import/named
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'RedEnvelope',
  data () {
    return {
      shouldshowRedEnvelope: false
    }
  },
  methods: {
    showRedEnvelope () {
      this.shouldshowRedEnvelope = true
    },
    close () {
      this.shouldshowRedEnvelope = false
    },
    stop (event) {
      // 阻止事件冒泡
      event.stopPropagation()
    }
  }
})
</script>

<style scoped>
  .mask{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
  }

  .red-envelop{
    width: 280px;
    margin-bottom: 20px;
  }
</style>
