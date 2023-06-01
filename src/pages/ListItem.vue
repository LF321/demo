<template>
  <div class="column root">
    <!-- <q-list bordered separator>
      <q-item clickable>
        <q-item-section>123</q-item-section>
      </q-item>
      <q-item>
        <q-item-section>
          <q-item-label>
            000
          </q-item-label>
          456
        </q-item-section>
      </q-item>
    </q-list> -->

    <div class="row top">
      <div class="column shoppingCar0"></div>
      <div><q-img class="iconM column rounded-borders" src="~/assets/麦当劳icon.jpg"></q-img></div>
      <div><text style="color: white;">麦乐送</text></div>
      <div class="shoppingCar1"></div>
      <div class="shoppingCar2"></div>
    </div>

    <div class="top2 row">
      <div>促销产品&热卖产品</div>
      <div>
        主食&超值套餐
      </div>
      <div>小食</div>
    </div>

    <div class="column list">
      <q-list bordered separator>
        <q-item class="list0" v-for="item in items" :key="item.id">
          <q-item-section avatar>
            <q-avatar rounded>
              <q-img class="picture" src="~/assets/food.jpg"></q-img>
            </q-avatar>
          </q-item-section>
          <q-item-section>
            <q-item-label>{{ item.name}}</q-item-label>
            <q-item-label caption>{{ item.price}}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line import/named
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ListItem',
  data () {
    return {
      items: [
        {
          id: 1,
          name: '麦趣鸡盒子',
          price: '￥20.00'
        },
        {
          id: 2,
          name: '豪华派对聚享餐',
          price: '￥30.00'
        },
        {
          id: 3,
          name: '麦乐家庭餐',
          price: '￥25.00'
        },
        {
          id: 4,
          name: '咖喱猪扒麦饭卷组合',
          price: '￥22.00'
        },
        {
          id: 5,
          name: '五色嫩鸡麦饭卷组合',
          price: '￥22.00'
        },
        {
          id: 6,
          name: '五色至牛麦饭卷组合',
          price: '￥22.00'
        }
      ]
    }
  },
  methods: {
  }
})
</script>

<style scoped>
.root{
  display: flex;
}

/* .picture{
  width: 40px;
} */

.top{
  background:red;
  height:40px;
  align-items: center;
  padding: 5px;
}

.iconM{
  width: 20px;
  height: 20px;
  /* border-radius: 4px; */
  margin-right: 5px;
}

.shoppingCar0{
  width: 5px;
  height: 20px;
  background: white;
  margin-right: 5px;
}

.shoppingCar1{
  width: 20px;
  height: 20px;
  background: yellow;
  position: absolute;
  right: 50px;
}

.shoppingCar2{
  width: 10px;
  height: 20px;
  background: white;
  position: absolute;
  right: 15px;
}

.top2{
  background:orange;
  height:40px;
  align-items: center;
  padding: 5px;
  justify-content: space-between;
}

.list0{
  padding: 0px;
}

.picture{
  height: 40px;
  width: 40px;
}

</style>
