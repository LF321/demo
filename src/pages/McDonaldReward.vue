<template>
  <div class="column root">
    <div class="row top">
      <div class="column top-left">
        <div class="row top-left-up">
          <div class="column">
            <text class="top-left-text1" style="color: firebrick;">麦麦</text>
            <text class="top-left-text1-2" style="color: firebrick;">会员</text>
          </div>
          <q-img class="top-left-iocn-M" src="~/assets/M.png"/>
        </div>
        <text class="top-left-text2" style="color: firebrick;">奖励计划</text>
      </div>
      <div class="row">
        <div class="column topicon1-2-bg"><q-img class="topicon1-2" src="~/assets/icon1-2.jpg"/></div>
        <div class="v-line column"></div>
        <div class="column topicon2-2-bg"><q-img class="topicon2-2" src="~/assets/icon2-2.jpg"/></div>
      </div>
    </div>

  <div class="row member">
    <div class="column avatar-bg"><q-img class="avatar" src="~/assets/头像.jpg"/></div>
    <div class="column member-left-text">
      <text class="row member-left-text1">麦麦</text>
      <div class="row member-left-text2" style="color: white;"><text >积分会员</text></div>
    </div>

    <div class="column member-right">
      <q-btn class="member-right-btn" rounded unelevated >立即开通</q-btn>
      <div class="column member-right-O">O麦金会员</div>
    </div>
  </div>

  <div class="row integrals">
    <div class="row integral">
      <div class="integral-lottery column">
        <div class="integral-text">积分抽奖</div>
      </div>
      <div class="integral-gift column">
        <div class="integral-text">积分好礼</div>
      </div>
    </div>

    <div class="colthes"></div>

    <div class="points-redemption"></div>

    <div class="row actives">
      <div class="active1 column">
      </div>
      <div class="active2 column">
      </div>
    </div>

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
  name: 'McDonaldReward',
  data () {
    return {
      value: 2,
      active: 1
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
  background: rgb(235, 235, 235);
  border-radius: 35px;
  width: 100vw;
}
.tabbars{
  display: flex;
  bottom: 0;
}

.top{
  height:100px;
  padding: 20px;
  /* border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-bottom-left-radius: 40px;
  border-bottom-right-radius: 40px; */
}

.top-left-up{
  align-items: center;
  padding-left: 5px;
  margin-bottom: -5px;
}

.top-left-text1{
  font-size: 14px;
  font-weight: bold;
}

.top-left-text1-2{
  font-size: 14px;
  font-weight: bold;
  margin-top: -8px;
}

.top-left-iocn-M{
  background: yellow;
  width: 40px;
  height: 30px;
  margin-left: 2px;
}

.top-left-text2{
  font-size: 18px;
  font-family:Sthupo;
}

.topicon1-2-bg{
  position: absolute;
  /* background: black; */
  background: rgb(246, 246, 246);
  width: 50px;
  height: 30px;
  right: 68px;
  top: 10px;
  border-top-left-radius: 100px;
  border-bottom-left-radius: 100px;
  align-items: center;
  justify-content: center;
}

.topicon1-2{
  width: 40px;
  height: 20px;
}

.topicon2-2-bg{
  position: absolute;
  /* background: black; */
  background: rgb(246, 246, 246);
  width: 50px;
  height: 30px;
  right: 18px;
  top: 10px;
  border-top-right-radius: 100px;
  border-bottom-right-radius: 100px;
  align-items: center;
  justify-content: center;
}

.topicon2-2{
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

.member{
  height: 140px;
  background: rgb(244, 182, 21);
  justify-content: space-between;
  align-items: center;
  border-radius: 15px;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  margin-left: 20px;
  margin-right: 20px;
  padding: 20px;
}

.avatar-bg{
  background:rgb(238, 233, 237);
  width: 50px;
  height: 50px;
  border-radius: 100%;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
}

.avatar{
  width: 40px;
  height: 20px;
}

.member-left-text{
  margin-left: -60px;
}

.member-left-text1{
  font-size: 18px;
  font-weight: bold;
  width: 100%;
  margin-top: -20px;
}

.member-left-text2{
  font-size: 14px;
  width: 70px;
  margin-top: 5px;
  justify-content: center;
  background: red;
  border-top-left-radius: 10px;
  border-bottom-right-radius: 10px;
}

.member-right{
  position: relative;
}

.member-right-btn{
  background: rgb(252, 213, 110);
  width: 120px;
  font-size: 18px;
  font-weight: bolder;
  margin-top: -20px;
}

.member-right-O{
  position: absolute;
  background: rgb(227, 195, 146);
  height: 30px;
  justify-content: center;
  border-top-left-radius: 15px;
  border-bottom-right-radius: 15px;
  top: -40px;
  right: -10px;
}

.integrals{
  height: 100%;
  width: 100%;
  background: white;
  padding: 20px;
  border-radius: 20px;
  margin-top: -20px;
}

.integral{
  width: 100vw;
  justify-content: center;
}

.integral-lottery{
  position: relative;
  background-image: url('assets/积分抽奖.jpg');
  background-size:170px 130px;
  /* background:rgb(81, 178, 233); */
  height:130px;
  width: 150px;
  align-items: center;
  padding: 15px;
  border-radius: 10%;
}

.integral-text{
  position: absolute;
  background: white;
  width: 85px;
  font-size: 18px;
  font-weight: bold;
  border-bottom-right-radius: 15px;
  top: 0px;
  left: 0px;
}

.integral-gift{
  position: relative;
  background-image: url('assets/积分好礼.jpg');
  background-size: 170px 150px;
  height:130px;
  width: 150px;
  align-items: center;
  padding: 15px;
  border-radius: 10%;
  margin-left: 20px;
}

.colthes{
  background-image: url('assets/衣服.jpg');
  background-size: 450px 100px;
  height: 100px;
  width: 100%;
  margin-top: 20px;
  border-radius: 15px;
}

.points-redemption{
  background-image: url('assets/积分兑换.jpg');
  background-size: 365px 240px;
  height: 250px;
  width: 100%;
  /* background: rgb(253, 253, 253); */
  margin-top: 20px;
  border-radius: 15px;
  box-shadow: 0px 0px 20px 2px #cbc9c9;
}

.actives{
  width: 100vw;
  justify-content: center;
  margin-top: 20px;
}

.active1{
  background-image: url('assets/active1.jpg');
  background-size: 150px 90px;
  height:90px;
  width: 150px;
  border-radius: 10px;
}

.active2{
  background-image: url('assets/active2.jpg');
  background-size: 150px 90px;
  height:90px;
  width: 150px;
  border-radius: 10px;
  margin-left: 20px;
  margin-bottom: 50px;
}
</style>
