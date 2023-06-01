<template>
  <div class="root" style="height:100vh">
    <div class="column" style="font-size: 2em">
        <q-icon name="font_download"></q-icon>
    </div>
    <q-tabs v-model="tab">
        <q-tab name="tab1" label="推广" />
        <q-tab name="tab2" label="日常" />
        <q-tab name="tab3" label="吐槽" />
        <q-tab name="tab4" label="表白" />
        <q-tab name="tab5" label="闲置" />
        <q-tab name="tab6" label="失物" />
        <q-tab name="tab7" label="全部" />
    </q-tabs>

    <q-tab-panels v-model="tab" animated swipeable class="q-tab-panels">
        <q-tab-panel name="tab1" class="q-tab-panel">
        推广页面
        </q-tab-panel>
        <q-tab-panel name="tab2" class="q-tab-panel">
        日常页面
        </q-tab-panel>
        <q-tab-panel name="tab3" class="q-tab-panel">
        吐槽页面
        </q-tab-panel>
        <q-tab-panel name="tab4" class="q-tab-panel">
        表白页面
        </q-tab-panel>
        <q-tab-panel name="tab5" class="q-tab-panel">
        闲置页面
        </q-tab-panel>
        <q-tab-panel name="tab6" class="q-tab-panel">
        失物页面
        </q-tab-panel>
        <q-tab-panel name="tab7" class="q-tab-panel">
        全部页面
        </q-tab-panel>
    </q-tab-panels>

    <q-tabs v-model="tab" class="text-teal">
        <q-tab name="mails" icon="mail" label="番职圈" />
        <q-tab name="alarms" icon="alarm" label="课程表" />
        <q-tab name="movies" icon="movie" label="我的" />
    </q-tabs>
  </div>
</template>

<script>
// eslint-disable-next-line import/no-duplicates
import { defineComponent } from 'vue'
// eslint-disable-next-line import/no-duplicates
import { ref } from 'vue'

export default defineComponent({
  name: 'PYPI',
  data () {
    return {
      shouldshowRedEnvelope: false
    }
  },
  setup () {
    return {
      tab: ref('mails')
    }
  },
  methods: {
  }
})
</script>

<style scoped>
.root{
  display: flex;
  flex-direction: column;
}

.text-teal{
    position: absolute;
    bottom: 0;
    width: 100vw;
}

.q-tab-panels{
    height: 100%;
}

.q-tab-panel{
    height: 100%;
}
</style>
