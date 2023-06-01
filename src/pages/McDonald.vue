<template>
  <div class="column page">
    <div class="row header">
      <!-- <div><q-img class="back column rounded-borders" src="~/assets/back.png"></q-img></div>
      <div><text style="color: white;">麦乐送</text></div>
      <div class="shoppingCar1"></div>
      <div class="shoppingCar2"></div> -->
      <div class="header-left">
        <q-img class="back-icon-c" />
        <text class="back-text">麦乐送</text>
      </div>

      <div class="header-right">
        <q-img class="shopping-cart-icon" />
        <q-img class="more-icon" />
      </div>
    </div>

    <!-- <div class="top2 row">
      <div>促销产品&热卖产品</div>
      <div>
        主食&超值套餐
      </div>
      <div>小食</div>
    </div> -->
    <div class="tab-view">
      <div class="tab">
        <text class="tab-text">促销产品&热卖产品</text>
        <div class="bottom-line"></div>
      </div>
      <div class="v-line"></div>
      <div class="tab">
        <text class="tab-text">主食&超值套餐</text>
      </div>
      <div class="tab">
        <text class="tab-text">小食</text>
      </div>
    </div>

    <!-- <div class="column list">
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
    </div> -->
    <q-list class="column goods-list" bordered separator>
      <q-item class="goodItem" v-for="item in goodList" :key="item.id">
        <q-img class="goods-image" :src="item.image"></q-img>
        <div class="column">
          <text class="goods-text">{{ item.title }}</text>
          <text class="goods-price">￥{{ item.price }} 起</text>
        </div>
      </q-item>
    </q-list>
  </div>
</template>

<script>
// eslint-disable-next-line import/named
import { defineComponent } from 'vue'
import axios from 'axios'
import { BASE_URL } from '../constant/network'

export default defineComponent({
  name: 'McDonald',
  data () {
    return {
      goodList: [
        {
          id: 1,
          title: 'AAAAA',
          price: '20.00'
        },
        {
          id: 2,
          title: '豪华派对聚享餐',
          price: '30.00'
        }
      ]
    }
  },
  methods: {
  },
  // setup () {
  //   // eslint-disable-next-line no-undef
  //   axios({
  //     method: 'get',
  //     url: 'http://localhost:3000/posts'
  //   }).then((res) => {
  //     console.log(res)
  //   })
  // }
  mounted () {
    axios.get(BASE_URL + '/mcdonalds').then(
      (data) => {
        this.goodList = data.data
        console.log(data.data)
      }
    )

    // 创建新的商品
    // axios.post(BASE_URL + '/mcdonalds', {
    //   id: 4,
    //   image: 'https://tse3-mm.cn.bing.net/th/id/OIP-C.vHE3sPF-hxRGUOQgP5ZLXAHaFj?w=263&h=197&c=7&r=0&o=5&pid=1.7',
    //   title: '汉堡000',
    //   price: 7.00
    // }).then(
    //   (res) => {
    //   }
    // )

    // 修改商品信息
    axios.put(BASE_URL + '/mcdonalds/2', {
      id: 4,
      image: 'https://img.zcool.cn/community/01d87c5cf66ee8a801205e4b79fb5a.jpg@1280w_1l_2o_100sh.jpg',
      title: '汉堡123',
      price: 6.00
    }).then(
      (res) => {
      }
    )
  }
})
</script>

<style scoped>
.page{
  display: flex;
  flex-direction: column;
}

.header{
  display: flex;
  justify-content: space-between;
  align-items: center;
  background:rgb(221, 0, 0);
  width: 100%;
  height:60px;
}

.back-icon-c{
  background: grey;
  width: 30px;
  height: 30px;
  margin: 5px;
  margin-right: 10px;
}

.shopping-cart-icon{
  background: grey;
  width: 30px;
  height: 30px;
  margin: 10px;
  margin-right: 20px;
}

.more-icon{
  background: grey;
  width: 6px;
  height: 30px;
  margin: 10px;
  margin-right: 20px;
}

/* .shoppingCar0{
  width: 5px;
  height: 20px;
  background: white;
  margin-right: 5px;
} */

/* .shoppingCar1{
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
} */

.tab-view{
  background: rgb(169, 0, 0);
  height:60px;
  width: 100%;
  display: flex;
  align-items: center;
}

.tab{
  height: 100%;
  position: relative;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.tab-text{
  font-size: 16px;
  color: white;
  font-weight: bold;
}

.bottom-line{
  width: 100%;
  height: 6px;
  background: red;
  position: absolute;
  bottom: 0;
}

.v-line{
  width: 1px;
  height: 35px;
  background: grey;
}

.goodItem{
  display: flex;
  align-items: center;
}

.goods-image{
  width: 60px;
  height: 60px;
  margin-right: 10px;
}

.goods-text{
  font-weight: bold;
  margin: 4px;
}

.goods-price{
  color: grey;
  font-weight: lighter;
}

/* .list0{
  padding: 0px;
}

.picture{
  height: 40px;
  width: 40px;
} */

</style>
