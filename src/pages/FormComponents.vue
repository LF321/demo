<template>
  <div class="column" style="width: 100%; height: 100vh; background:rgb(128,128,128)">
      <q-radio v-model="shape" value="aa"  label="AA" />
      <q-radio v-model="shpre" value="bb"  label="BB" />
  </div>
</template>

<script>
// eslint-disable-next-line import/named
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'FormComponents',
  data () {
    return {
      shape: 'false'
    }
  }
})
</script>
