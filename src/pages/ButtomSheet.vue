<template>
  <div>
    <q-btn class="button" color="primary" @click="show" label="弹出菜单"></q-btn>
  </div>
</template>

<script>
// eslint-disable-next-line import/named
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ButtomSheet',
  data () {
    return {
    }
  },
  methods: {
    show () {
      this.$q.bottomSheet({
        message: '底部菜单',
        actions: [
          {
            label: '菜单1',
            id: 'ID1'
          },
          {
            label: '菜单2',
            id: 'ID2'
          }
        ]
      })
    }
  }
})
</script>

<style scoped>
  .button{
    margin: 20px;
  }

  .food-image{
    position: relative;
    z-index: 2;
  }

  .food-details-c{
    position: relative;
    z-index: 1;
  }

  .location{
    width: 50px;
    height: 50px;
    background: blue;
    border-radius: 50%;
    position: absolute;
    bottom: -25px;
    right: 24px;
    z-index: 3;
  }

  .food-title{
    font-size: 22px;
    font-weight: bold;
  }
</style>
