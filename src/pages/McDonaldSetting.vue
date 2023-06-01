<template>
  <div class="root">
    <div class="row top">
      <div class="row top-left">
        <div class="column avatar-bg"><q-img class="avatar" src="~/assets/头像.jpg"/></div>
        <div class="column top-left-user">
          <div class="row top-left-user-name">
            <text class="top-left-user-name-text1">麦麦</text>
            <text class="column top-left-user-name-text2" style="color: gainsboro;">积分会员</text>
          </div>
          <div class="row top-left-user-integral">
            <q-icon class="top-left-user-integralIcon" size="22px" name="school"></q-icon>
            <text class=" top-left-user-integralCount" style="color: firebrick;">0</text>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="column topicon1-2-bg"><q-img class="topicon1-2" src="~/assets/icon1-2.jpg"/></div>
        <div class="v-line column"></div>
        <div class="column topicon2-2-bg"><q-img class="topicon2-2" src="~/assets/icon2-2.jpg"/></div>
      </div>
    </div>

    <div class="row tickets">
      <div class="column ticket">
        <div class="ticket-iocn"></div>
        <q-icon class="ticket-iocn" name="deck" size="40px"></q-icon>
        <text class="ticket-text" >到店券</text>
        <text class="ticket-textCount" style="color: grey;">共2张</text>
      </div>
      <div class="column ticket">
        <q-icon class="ticket-iocn" name="motorcycle" size="40px"></q-icon>
        <text class="ticket-text" >外卖券</text>
        <text class="ticket-textCount" style="color: grey;">共5张</text>
      </div>
      <div class="column ticket">
        <q-icon class="ticket-iocn" name="mail" size="40px"></q-icon>
        <text class="ticket-text" >送卡券</text>
        <text class="ticket-textCount" style="color: grey;">共7张</text>
      </div>
      <div class="column ticket">
        <q-icon class="ticket-iocn" name="repeat" size="40px"></q-icon>
        <text class="ticket-text" >兑换券</text>
        <text class="ticket-textCount" style="color: grey;">立即兑换</text>
      </div>
    </div>

    <div class="column integralCard">
      <div class="row integralCard-up">
        <div class="row integralCard-card">
          <q-img class="integralCard-card-icon"/>
          <div class="column integralCard-card-text">
            <div class="integralCard-card-text1">积点卡</div>
            <div class="integralCard-card-text2">积点客兑换商品</div>
          </div>
        </div>
      </div>
      <div class="row integralCard-down">
        <div class="column integralCard-balance">
          <text class="row integralCard-balance-text">余额</text>
          <div class="row integralCard-balance-counts">
            ￥<text class="integralCard-balance-counts-text">0.00</text>
            <div class="row integralCard-balance-counts-icon">
              <q-icon name="money" color="orange" size="16px"></q-icon>
              <text class="integralCard-balance-counts-icon-text" style="color: orange;">付款</text>
            </div>
          </div>
        </div>
        <div class="row integralCard-wallet">
          <q-icon class="integralCard-wallet-icon" name="wallet" size="16px" color="white"></q-icon>
          <txet class="integralCard-wallet-icon-text">麦当劳钱包</txet>
          <q-icon name="navigate_next" size="20px"></q-icon>
        </div>
      </div>
    </div>

    <div class="row orderCollections">
      <div class="row orderCollection">
        <div class="column orderCollection-text">
          <text class="orderCollection-text1" >我的订单</text>
          <text class="orderCollection-text2" style="color: grey;" >查看最近的订单</text>
        </div>
        <q-img class="column orderCollection-iocn" src="~/assets/订单.jpg"/>
        <!-- <q-icon class="column ticket-iocn" name="description" size="50px"></q-icon> -->
      </div>
      <div class="row v-line"></div>
      <div class="row orderCollection">
        <div class="column orderCollection-text">
          <text class="orderCollection-text1" >我的收藏</text>
          <text class="orderCollection-text2" style="color: grey;" >收藏餐厅好打卡</text>
        </div>
        <q-img class="column orderCollection-iocn" src="~/assets/收藏.jpg"/>
        <!-- <q-icon class="ticket-iocn" name="storefront" size="50px"></q-icon> -->
      </div>
    </div>

    <div class="column setting">
      <div class="row set">
        <text class="row set-text">发票管理</text>
        <q-icon class="row set-icon" name="navigate_next" size="32px" color="grey"></q-icon>
      </div>
      <div class="row set">
        <text class="row set-text">我的地址</text>
        <q-icon class="row set-icon" name="navigate_next" size="32px" color="grey"></q-icon>
      </div>
      <div class="row set">
        <text class="row set-text">投诉与建议</text>
        <q-icon class="row set-icon" name="navigate_next" size="32px" color="grey"></q-icon>
      </div>
      <div class="row set">
        <text class="row set-text">条款与规则</text>
        <q-icon class="row set-icon" name="navigate_next" size="32px" color="grey"></q-icon>
      </div>
      <div class="row set last-text">
        <text class="row set-text">设置</text>
        <q-icon class="row set-icon" name="navigate_next" size="32px" color="grey"></q-icon>
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
  name: 'McDonaldSetting',
  data () {
    return {
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
  background: rgb(243, 241, 241);
  border-radius: 35px;
  width: 100vw;
}
.tabbars{
  display: flex;
  bottom: 0;
}

.top-left{
  align-items: center;
  margin: 20px;
  margin-bottom: 0px;
}

.avatar-bg{
  background:rgb(238, 233, 237);
  width: 80px;
  height: 80px;
  border-radius: 100%;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
}

.avatar{
  width: 40px;
  height: 20px;
}

.top-left-user{
  margin-left: 10px;
}

.top-left-user-name{
  align-items: center;
}

.top-left-user-name-text1{
  font-weight: bold;
  font-size: large;
}

.top-left-user-name-text2{
  font-size: smaller;
  background: red;
  width: 65px;
  height: 18px;
  border-top-left-radius: 15px;
  border-bottom-right-radius: 15px;
  align-items: center;
  margin-left: 3px;
}

.top-left-user-integral{
  align-items: center;
}

.top-left-user-integralCount{
  font-weight: bold;
  font-size: x-large;
  margin-left: 5px;
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

.tickets{
  background: white;
  justify-content: space-around;
  align-items: center;
  height: 120px;
  margin: 20px;
  border-radius: 20px;
  margin-top: 0px;
  margin-bottom: 0px;
}

.ticket{
  align-items: center;
}

.ticket-iocn{
  margin-bottom: 2px;
}

.ticket-textCount{
  font-weight: lighter;
  font-size: xx-small;
}

.integralCard{
  margin: 20px;
}

.integralCard-up{
  position: relative;
  background: rgb(237, 181, 6);
  height: 120px;
  /* padding: 20px; */
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

.integralCard-card{
  position: absolute;
  align-items: center;
  background: rgb(229, 230, 234);
  width: 210px;
  height: 100px;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  bottom: 0px;
  margin-left: 20px;
}

.integralCard-card-icon{
  position: absolute;
  background-image: url('assets/麦咖啡3.jpg');
  background-size: 60px 80px;
  width: 60px;
  height: 80px;
  left: 15px;
  margin-bottom: 0px;
  bottom: 0px;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: smaller;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
}

.integralCard-card-text{
  align-items: end;
  position: absolute;
  right: 15px;
}

.integralCard-card-text1{
  font-weight: bold;
  font-size: large;
  font-family:'Courier New', Courier, monospace;
}

.integralCard-card-text2{
  font-weight: lighter;
  font-size: small;
}

.integralCard-down{
  background: rgb(246, 195, 28);
  height: 120px;
  /* padding: 20px; */
  justify-content: space-between;
  align-items: center;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
}

.integralCard-balance{
  margin-left: 20px;
}

.integralCard-balance-counts{
  align-items: center;
}

.integralCard-balance-counts-text{
  font-weight: bold;
  font-size: x-large;
}

.integralCard-balance-counts-icon{
  background: rgb(99, 60, 21);
  border-radius: 100px;
  width: 70px;
  height: 28px;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
}

.integralCard-balance-counts-icon-text{
  margin-left: 4px;
}

.integralCard-wallet{
  background: rgb(243, 210, 57);
  width: 140px;
  height: 50px;
  justify-content: center;
  align-items: center;
  border-top-left-radius: 100px;
  border-bottom-left-radius: 100px;
}

.integralCard-wallet-icon{
  background: rgb(237, 181, 6);
  width: 25px;
  height: 25px;
  border-radius: 100%;
}

.integralCard-wallet-icon-text{
  font-weight: bold;
}

.orderCollections{
  position: relative;
  justify-content: center;
  align-items: center;
  background: rgb(245, 245, 245);
  height: 90px;
  border-radius: 20px;
  margin: 20px;
  margin-top: 0px;
}

.orderCollection{
  width: 50%;
  justify-content: space-around;
}

.v-line{
  position: absolute;
  width: 1px;
  height: 60px;
  background: rgb(218, 218, 218);
  top: 20%;
  left: 50%;
}

.orderCollection-text1{
  font-size: large;
}

.orderCollection-text2{
  font-weight: lighter;
  font-size: smaller;
}

.orderCollection-iocn{
  width: 50px;
  height: 50px;
}

.setting{
  justify-content: center;
  margin: 20px;
  margin-top: 10px;
  padding-left: 10px;
  padding-right: 10px;
}

.set{
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.set-text{
  font-weight: bold;
  font-size: x-large;
}

.tabbars{
  display: flex;
  bottom: 0;
}

.last-text{
  margin-bottom: 100px;
}

</style>
