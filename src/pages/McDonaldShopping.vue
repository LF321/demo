<template>
  <div class="column root">
    <div class="row top">
      <div class="column">
        <text class="top-text1">麦麦商城</text>
      </div>
      <div class="row">
        <div class="column topicon1-2-bg"><q-img class="topicon1-2" src="~/assets/icon1-2.jpg"/></div>
        <div class="v-line column"></div>
        <div class="column topicon2-2-bg"><q-img class="topicon2-2" src="~/assets/icon2-2.jpg"/></div>
      </div>
    </div>

    <div class="row member">
      <div class="column member-left">
        <text class="row member-left-text" style="color: orange;">吃一餐超值 越吃越划算</text>
        <div class="member-left-icon"></div>
      </div>
      <div class="column member-right">
        <div class="row member-right-gift">
          <div class="column member-right-gift-text">
            <text class="member-right-gift-text1">积分好礼</text>
            <text class="row member-right-gift-text2">超值优惠等你兑</text>
          </div>
          <div class="column member-right-gift-icon"></div>
        </div>

        <div class="row member-right-exchange">
          <div class="column member-right-exchange-text">
            <text class="member-right-exchange-text1">积点兑换</text>
            <text class="row member-right-exchange-text2">兑换免费咖啡</text>
          </div>
          <div class="column member-right-exchange-icon"></div>
        </div>
      </div>
    </div>

    <div class="column recommends">
      <div class="row recommend-text">爆品推荐</div>
      <div class="row recommend-cards">
        <div class="column recommend">
          <q-img class="recommend-card" src="~/assets/早餐卡.jpg"/>
          <q-img class="recommend-icon" src="~/assets/iconGood0.png"/>
          <text class="recommend-card-text" >早餐卡</text>
        </div>
        <div class="column recommend">
          <q-img class="recommend-card" src="~/assets/礼品卡.jpg"/>
          <q-img class="recommend-icon" src="~/assets/iconGood1.png"/>
          <text class="recommend-card-text" >礼品卡￥50</text>
        </div>
        <div class="column recommend">
            <q-img class="recommend-card" src="~/assets/MB.jpg"/>
            <q-img class="recommend-icon" src="~/assets/iconGood2.png"/>
          <text class="recommend-card-text" >联合会</text>
        </div>
        <div class="column recommend">
          <q-img class="recommend-card" src="~/assets/礼品卡2.jpg"/>
          <q-img class="recommend-icon" src="~/assets/iconGood3.png"/>
            <!-- <q-icon name="thumb_up_alt" size="26px" style="width: 25px;height: 25px;"></q-icon> -->
          <text class="recommend-card-text" >礼品卡</text>
        </div>
      </div>
    </div>

    <div class="column giftCard">
      <div class="row giftCard-text">
        <div class="row giftCard-text-left">
          <text class="giftCard-text1">麦有礼</text>
          <text class="giftCard-text2">送一份美味心意</text>
        </div>
        <q-btn unelevated rounded class="column giftCard-btn">挑选更多</q-btn>
      </div>
      <div class="row giftCard-cards">
        <div class="column giftCard-card">
          <div class="row giftCard-insideCard1"></div>
          <div class="row giftCard-card-text1">
            <text>礼品卡￥50</text>
            <q-icon name="arrow_forward"></q-icon>
          </div>
        </div>
        <div class="column giftCard-card">
          <div class="row giftCard-insideCard2"></div>
          <div class="row giftCard-card-text2">
            <text>礼品卡￥100</text>
            <q-icon name="arrow_forward"></q-icon>
          </div>
        </div>
        <div class="column giftCard-card">
          <div class="row giftCard-insideCard3"></div>
          <div class="row giftCard-card-text3">
            <text>礼品卡￥50</text>
            <q-icon name="arrow_forward"></q-icon>
          </div>
        </div>
      </div>
    </div>

    <div class="column select">
      <text class="row select-text" >为您精选</text>
      <div class="row select-row">
        <div class="column select-row1">
          <div class="row select-row1-picut"></div>
          <text class="row select-row1-text">麦当劳亲子读书会</text>
          <div class="row select-row1-priceAdd">
            <div class="column select-row1-price">￥45</div>
            <div><q-icon class="column select-row1-add" name="add"></q-icon></div>
          </div>
        </div>
        <div class="column select-row2">
          <div class="row select-row1-picut"></div>
          <text class="row select-row1-text">麦当劳亲子读书会</text>
          <div class="row select-row1-priceAdd">
            <div class="column select-row1-price">￥45</div>
            <div><q-icon class="column select-row1-add" name="add"></q-icon></div>
          </div>
        </div>
      </div>
      <div class="row select-row">
        <div class="column select-row1">
          <div class="row select-row1-picut"></div>
          <text class="row select-row1-text">麦当劳亲子读书会</text>
          <div class="row select-row1-priceAdd">
            <div class="column select-row1-price">￥45</div>
            <div><q-icon class="column select-row1-add" name="add"></q-icon></div>
          </div>
        </div>
        <div class="column select-row2">
          <div class="row select-row1-picut"></div>
          <text class="row select-row1-text">麦当劳亲子读书会</text>
          <div class="row select-row1-priceAdd">
            <div class="column select-row1-price">￥45</div>
            <div><q-icon class="column select-row1-add" name="add"></q-icon></div>
          </div>
        </div>
      </div>
      <div class="row select-row">
        <div class="column select-row1">
          <div class="row select-row1-picut"></div>
          <text class="row select-row1-text">麦当劳亲子读书会</text>
          <div class="row select-row1-priceAdd">
            <div class="column select-row1-price">￥45</div>
            <div><q-icon class="column select-row1-add" name="add"></q-icon></div>
          </div>
        </div>
        <div class="column select-row2">
          <div class="row select-row1-picut"></div>
          <text class="row select-row1-text">麦当劳亲子读书会</text>
          <div class="row select-row1-priceAdd">
            <div class="column select-row1-price">￥45</div>
            <div><q-icon class="column select-row1-add" name="add"></q-icon></div>
          </div>
        </div>
      </div>
    </div>

  <div class="row last-text">
    <text style="color: grey;">到底了</text>
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
  name: 'McDonaldShopping',
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
  background: rgb(243, 241, 241);
}
.tabbars{
  display: flex;
  bottom: 0;
  z-index: 999;
}

.top{
  height:80px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-bottom-left-radius: 40px;
  border-bottom-right-radius: 40px;
}

.top-text1{
  font-size: xx-large;
  font-weight: bolder;
  margin-top: 10px;
  margin-left: 20px;
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
  justify-content: center;
  align-items: center;
}

.member-left{
  background-image: url('assets/麦金会员bg.jpg');
  background-size: 170px 200px;
  width: 170px;
  height: 200px;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
}

.member-left-text{
  width: 80px;
  font-size: 16px;
  font-weight: bold;
  margin-top: 30px;
}

.member-left-icon{
  background-image: url('assets/麦金会员.jpg');
  background-size: 104px 54px;
  width: 100px;
  height: 50px;
  border-radius: 10px;
  margin-top: 5px;
}

.member-right{
  margin-left: 10px;
}

.member-right-gift{
  background: rgb(255, 255, 255);
  width: 180px;
  height: 90px;
  border-radius: 15px;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
}

.member-right-gift-text1{
  font-size: large;
  font-weight: bolder;
}

.member-right-gift-text2{
  font-size: 12px;
  background: lightcoral;
  width: 100px;
  height: 22px;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
}

.member-right-gift-icon{
  background-image: url('assets/首页图1.jpg');
  background-size: 45px 50px;
  width: 50px;
  height: 50px;
  border-radius: 100%;
}

.member-right-exchange{
  position: relative;
  background: white;
  width: 180px;
  height: 90px;
  border-radius: 15px;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  margin-top: 10px;
}

.member-right-exchange-text1{
  font-size: large;
  font-weight: bold;
}

.member-right-exchange-text2{
  font-size: 12px;
  background: orange;
  width: 90px;
  height: 22px;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
}

.member-right-exchange-icon{
  position: absolute;
  background-image: url('assets/麦咖啡2.jpg');
  background-size: 50px 60px;
  width: 50px;
  height: 60px;
  bottom: 0px;
  right: 7px;
}

.recommends{
  width: 100%;
  height: 170px;
}

.recommend-text{
  margin-top: 20px;
  margin-left: 20px;
  font-weight: bolder;
  font-size: x-large;
}

.recommend-cards{
  justify-content: space-around;
  height: 95px;
  width: 100vw;
  margin-top: 15px;
}

.recommend{
  position: relative;
  align-items: center;
  justify-content: center;
}

.recommend-card{
  background: rgb(132, 212, 225);
  width: 70px;
  height: 70px;
  border-radius: 10px;
}

.recommend-icon{
  position: absolute;
  width: 20px;
  height: 20px;
  top: -8px;
  left: -5px;
}

.recommendCard-text{
  font-size: 10px;
  margin-top: 5px;
}

.giftCard{
  background: rgb(239, 229, 202);
  height: 180px;
  border-radius: 20px;
  margin: 20px;
  justify-content: center;
}

.giftCard-text{
  justify-content: space-between;
  margin-left: 20px;
  margin-right: 20px;
}

.giftCard-text-left{
  align-items: center;
}

.giftCard-text1{
  font-size: x-large;
  font-weight: bold;
  color: rgb(225, 149, 8);
}

.giftCard-text2{
  color: rgb(224, 147, 5);
  margin-left: 10px;
}

.giftCard-btn{
  color: rgb(220, 145, 5);
  background: rgb(247, 246, 246);
  font-weight: bold;
}

.giftCard-cards{
  margin-left: 15px;

}

.giftCard-card{
  background: white;
  width: 100px;
  height: 100px;
  border-radius: 10px;
  margin: 5px;
  align-items: center;
}

.giftCard-insideCard1{
  width: 95px;
  height: 65px;
  background-image: url('assets/麦有礼1.jpg');
  background-size: 95px 65px;
  border-radius: 10px;
  margin-top: 2px;
}

.giftCard-insideCard2{
  width: 95px;
  height: 65px;
  background-image: url('assets/麦有礼2.jpg');
  background-size: 95px 65px;
  border-radius: 10px;
  margin-top: 2px;
}

.giftCard-insideCard3{
  width: 95px;
  height: 65px;
  background-image: url('assets/麦有礼3.jpg');
  background-size: 95px 65px;
  border-radius: 10px;
  margin-top: 2px;
}

.giftCard-card-text1{
  font-size: smaller;
  color: orange;
  align-items: center;
  justify-content: space-between;
  margin-top: 5px;
}

.giftCard-card-text2{
  font-size: smaller;
  color: red;
  align-items: center;
  justify-content: space-between;
  margin-top: 5px;
}

.giftCard-card-text3{
  font-size: smaller;
  color: blue;
  align-items: center;
  justify-content: space-between;
  margin-top: 5px;
}

.select{
  justify-content: space-between;
  margin: 20px;
}

.select-text{
  font-weight: bold;
  font-size: large;
  margin-top: -15px;
}

.select-row{
  align-items: center;
  justify-content: space-between;
  margin-top: 5px;
}

.select-row1{
  justify-content: space-between;
}

.select-row1-picut{
  width: 170px;
  height: 200px;
  background-image: url('assets/麦当劳亲子读书会.jpg');
  background-size: 170px 200px;
  border-radius: 10px;
}

.select-row1-text{
  padding-left: 5px;
  margin-right: 5px;
}

.select-row1-priceAdd{
  justify-content: space-between;
  padding-left: 5px;
  margin-right: 5px;
}

.select-row1-price{
  color: rgb(190, 6, 6);
  font-weight: bolder;
}

.select-row1-add{
  background: orange;
  width: 20px;
  height: 20px;
  border-radius: 100%;
}

.last-text{
  justify-content: center;
  margin-bottom: 60px;
}
</style>
