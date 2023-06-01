<template>
  <div>
    <q-btn class="button" color="primary" @click="navigateToPageRedEnvelope">红包</q-btn>
    <q-btn class="button" color="primary" @click="dhk">对话框</q-btn>
    <q-btn class="button" color="primary" @click="navigateToPageButtomSheet">菜单</q-btn>
    <q-btn class="button" color="primary" @click="navigateToPageListItem">列表</q-btn>
    <q-btn class="button" color="primary" @click="navigateToPageMcDonald">麦当劳</q-btn>
    <q-btn class="button" color="primary" @click="navigateToPageForm">表单</q-btn>
    <q-btn class="button" color="primary" @click="navigateToPagePypi">番职+</q-btn>
    <q-btn class="button" color="primary" @click="navigateToPageMcDonaldHome">麦当劳小程序</q-btn>
  </div>
</template>

<script>
// eslint-disable-next-line import/named
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MainLayout',
  methods: {
    // 用有意义的英文单词组合命名函数名和变量
    navigateToPageRedEnvelope () {
      // 跳转到红包页面
      this.$router.push('./red-envelope')
    },
    dhk () {
      // 跳转到红包页面
      this.$router.push('./dialog-demo')
    },
    navigateToPageButtomSheet () {
      // 跳转到红包页面
      this.$router.push('./buttom-sheet')
    },
    navigateToPageListItem () {
      // 跳转到红包页面
      this.$router.push('./list-item')
    },
    navigateToPageMcDonald () {
      // 跳转到红包页面
      this.$router.push('./mc-donaldm')
    },
    navigateToPageForm () {
      // 跳转到红包页面
      this.$router.push('./form')
    },
    navigateToPagePypi () {
      // 跳转到红包页面
      this.$router.push('./pyp-i')
    },
    navigateToPageMcDonaldHome () {
      // 跳转到红包页面
      this.$router.push('./mc-donaldHome')
    }
  },
  setup () {
  }
})
</script>

<style scoped>
  .button{
    margin: 20px;
  }
</style>
