<template>
  <div>
    <q-btn class="button" color="primary" @click="showDiolog" label="弹出对话框"></q-btn>
    <q-btn class="button" color="primary" @click="showFoodDiolog" label="弹出食物框"></q-btn>

    <q-dialog v-model="alert">
    <q-card>
      <q-card-section>
        <text style="font-size: 20px; font-weight: bold;">标题</text>
      </q-card-section>
      <q-card-section>
        内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
      </q-card-section>
      <q-card-actions align="right">
        <q-btn flat color="primary" label="取消" @click="close" />
        <q-btn flat color="primary" label="确定" @click="close" />
      </q-card-actions>
    </q-card>
    </q-dialog>

    <q-dialog v-model="food">
    <q-card>
      <div class="food-image">
        <q-img src="~/assets/food.jpg"></q-img>
        <ion-icon class="location" name="location-outline"></ion-icon>
      </div>

      <div class="food-details-c">
        <q-card-section>
        <text class="food-title">Cafe Bacas</text>
        </q-card-section>
        <q-card-section>
          内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
        </q-card-section>
        <q-card-actions align="right">
          <q-btn flat color="primary" label="RESRVE" @click="RESRVE" />
        </q-card-actions>
      </div>
    </q-card>
    </q-dialog>
  </div>
</template>

<script>
// eslint-disable-next-line import/named
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'DialogDemo',
  data () {
    return {
      alert: false,
      food: false
    }
  },
  methods: {
    showDiolog () {
      this.alert = true
    },
    showFoodDiolog () {
      this.food = true
    },
    close () {
      this.alert = false
    },
    RESRVE () {
      this.food = false
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
