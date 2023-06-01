<template>
  <div class="column root">
    <div class="row top">
      <div class="column">
        <div class="row top-avatar">
          <div class="column avatar-bg"><q-img class="avatar" src="~/assets/头像.jpg"/></div>
          <text class="top-text1" style="color:blanchedalmond;">O麦金  立即开通</text>
        </div>
        <text class="top-text2" style="color: white;">成为麦当劳会员 享受更多优惠 ></text>

      </div>
      <div class="row">
        <div class="column topicon1-bg"><q-img class="topicon1" src="~/assets/icon1.jpg"/></div>
        <div class="v-line column"></div>
        <div class="column topicon2-bg"><q-img class="topicon2" src="~/assets/icon2.jpg"/></div>
      </div>
    </div>

    <div class="order-method row">
      <div class="delivery column" >
        <text class="order-method-text1" style="color: cornflowerblue;">麦乐送</text>
        <text class="order-method-text2" style="color: cornflowerblue;">0元霸王餐</text>
      </div>
      <div class="oneself column">
        <text class="order-method-text1" style="color: cornflowerblue;">到店自取</text>
        <text class="order-method-text2" style="color: cornflowerblue;">潮辣食尚来袭</text>
      </div>
    </div>

    <div class="dessert row">
      <div>
        <div class="dessert-iocn"><q-img src="~/assets/甜品站.png"></q-img></div>
        <text class="dessert-text" >甜品站</text>
      </div>
      <div>
        <div class="dessert-iocn"><q-img src="~/assets/麦咖啡.png"></q-img></div>
        <text class="dessert-text" >麦咖啡</text>
      </div>
      <div>
        <div class="dessert-iocn"><q-img src="~/assets/会员日.png"></q-img></div>
        <text class="dessert-text" >会员日</text>
      </div>
      <div>
        <div class="dessert-iocn"><q-img src="~/assets/亲子乐园.png"></q-img></div>
        <text class="dessert-text" >亲子乐园</text>
      </div>
    </div>

    <div class="row location">
      <div class="location-left">
        <!-- <q-icon name="location_on" ></q-icon> -->
        <q-img class="location-icon" src="~/assets/地图icon.jpg"></q-img>
        <text class="location-icon-text"> 广州番禺职业技术学院</text>
      </div>
      <div class="location-right">
        <q-icon name="edit" ></q-icon>
        <text> 切换</text>
       </div>
    </div>

    <div class="col food-shows">
      <div class="food-show"><q-img class="food-show" src="~/assets/首页图1.jpg"></q-img></div>
      <div class="food-show"><q-img class="food-show" src="~/assets/首页图2.jpg"></q-img></div>
      <div class="food-show"><q-img class="food-show" src="~/assets/首页图3.jpg"></q-img></div>
      <div class="food-show"><q-img class="food-show" src="~/assets/首页图4.jpg"></q-img></div>
      <div class="food-show-last"></div>
    </div>

    <div class="row last-text">
      <text style="color: lightgray;">———— 我是有底线的 ————</text>
    </div>

    <van-tabbar class="tabbars" v-model="active" route>
      <van-tabbar-item class="tabbar" replace to="/mc-donaldHome" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item class="tabbar" replace to="/mc-donaldReward" icon="search">奖励计划</van-tabbar-item>
      <van-tabbar-item class="tabbar" replace to="/mc-donaldShopping" icon="friends-o">麦麦商城</van-tabbar-item>
      <van-tabbar-item class="tabbar" replace to="/mc-donaldSetting" icon="setting-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
// eslint-disable-next-line import/no-duplicates
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'McDonaldHome',
  data () {
    return {
      value: 3,
      active: 0
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
  background: rgb(246, 246, 246);
}
.tabbars{
  display: flex;
  bottom: 0;
}

.top{
  background:rgb(16, 79, 133);
  height:100px;
  padding: 20px;
  /* border-top-left-radius: 20px;
  border-top-right-radius: 20px; */
  border-bottom-left-radius: 40px;
  border-bottom-right-radius: 40px;
}

.top-avatar{
  background: #000;
  align-items: center;
  height: 30px;
  border-radius: 100px;
  margin-top: -10px;
  margin-bottom: 7px;
}

.avatar-bg{
  background:rgb(238, 233, 237);
  width: 25px;
  height: 25px;
  border-radius: 100%;
  align-items: center;
  justify-content: center;
}

.avatar{
  width: 20px;
  height: 10px;
}

.top-text1{
  font-size: 12px;
  font-weight: bold;
  margin-left: 10px;
}

.top-text2{
  font-size:8px;
}

.topicon1-bg{
  position: absolute;
  /* background: black; */
  background:rgb(16, 67, 112);
  width: 50px;
  height: 30px;
  right: 68px;
  top: 10px;
  border-top-left-radius: 100px;
  border-bottom-left-radius: 100px;
  align-items: center;
  justify-content: center;
}

.topicon1{
  width: 40px;
  height: 20px;
}

.topicon2-bg{
  position: absolute;
  /* background: black; */
  background:rgb(16, 67, 112);
  width: 50px;
  height: 30px;
  right: 18px;
  top: 10px;
  border-top-right-radius: 100px;
  border-bottom-right-radius: 100px;
  align-items: center;
  justify-content: center;
}

.topicon2{
  width: 30px;
  height: 25px;
}

.v-line{
  position: absolute;
  z-index: 5;
  width: 1px;
  height: 18px;
  background: grey;
  right: 68px;
  top: 15px;
}

.order-method{
  justify-content: center;
  width: 100vw;
  position: absolute;
  top: 80px;
}

.delivery{
  background-image: url('assets/外送.jpg');
  background-size: 180px 180px;
  /* background:rgb(61, 114, 221); */
  height:180px;
  width: 180px;
  align-items: center;
  padding: 15px;
  border-radius: 10%;
}

.oneself{
  background-image: url('assets/自取.jpg');
  background-size: 170px 190px;
  /* background:rgb(61, 114, 221); */
  height:180px;
  width: 180px;
  align-items: center;
  padding: 15px;
  margin-left: 1px;
  border-radius: 10%;
}

.order-method-text1{
  font-size: 18px;
  font-weight: bold;
}

.order-method-text2{
  font-size:smaller;
}

.dessert{
  justify-content: space-around;
  height: 80px;
  width: 100vw;
  margin-top: 180px;
}

.dessert-iocn{
  width: 50px;
  height: 50px;
}

.location{
  background-image: url('assets/地图bg.jpg');
  background-size: 658px 117px;
  height: 60px;
  /* background: gainsboro; */
  justify-content: space-between;
  align-items: center;
  border-radius: 15px;
  margin: 20px;
  padding: 20px;
}

.location-icon{
  height: 25px;
  width: 20px;
}

.location-icon-text{
  font-size: 16px;
  font-weight: bold;
  width: 100%;
  margin-left: 5px;
  font-family: Microsoft Yahei;
}

.food-shows{
  display: flex;
  flex-direction: column;
  align-items: center;
}

.food-show{
  background:green;
  height:400px;
  width: 400px;
  border-radius: 5%;
  margin-bottom: 10px;
}

.last-text{
  justify-content: center;
  margin-bottom: 60px;
}
</style>
