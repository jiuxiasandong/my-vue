<template>
    <div class="user">
        <mt-header fixed title="注册豆瓣">
             <mt-button slot="left" @click="goback">取消</mt-button>
        </mt-header>
        <div class="welcome">欢迎加入豆瓣</div>
        <form @submit.prevent="regSubmit(userInfo)">
            <mt-field placeholder="手机号/邮箱" type="text" v-model="userInfo.account" required></mt-field>
            <mt-field placeholder="密码(最少6位)" class="regpwd" :type="userInfo.type" v-model="userInfo.password" required></mt-field>
            <mt-field placeholder="昵称" type="text" v-model="userInfo.nickname"></mt-field>
            <mt-button size="large" :disabled="false">注册</mt-button>
            <i class="iconfont icon-eye2" :style="{color:userInfo.color}" @click="seePwd"></i>
        </form>
        <p class="notice">点击注册代表你已阅读并同意用户使用协议</p>
    </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  computed: {
    ...mapState(["userInfo"])
  },
  methods: {
    ...mapActions(["regSubmit", "seePwd", "goback"])
  }
};
</script>
<style lang="scss" scoped>
@import "../styles/page/user.scss";
</style>

