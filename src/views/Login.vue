<template>
    <div class="user">
        <mt-header fixed title="" class="log-header">
             <span @click="goback" slot="left" class="iconfont icon-fork"></span>
        </mt-header>
        <div class="welcome">欢迎来到豆瓣</div>
        <form @submit.prevent="logSubmit(userInfo)">
            <mt-field placeholder="手机号/邮箱" type="text" v-model="userInfo.account"></mt-field>
            <mt-field placeholder="密码" class="logpwd" type="password" v-model="userInfo.password"></mt-field>
            <mt-button size="large" :disabled="false">登录</mt-button>
        </form>
        <div class="pipe">
            <router-link to="/register" class="regBtn">注册豆瓣</router-link>
            <span class="space">|</span>
            <router-link to="" class="forgetBtn">忘记密码</router-link>
        </div>
        <div class="footer">
            <div class="blog" @click="openBlog">
                <i class="iconfont icon-blog"></i>
                <span>微博登录</span>
            </div>
            <span class="space">|</span>
            <div class="wechat" @click="openWechat">
                <i class="iconfont icon-wechat"></i>
                <span>微信登录</span>
            </div>
        </div>
    </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  computed: {
    ...mapState(["userInfo"])
  },
  methods: {
    ...mapActions(["logSubmit","openBlog","openWechat","goback"])
  }
};
</script>
<style lang="scss" scoped>
@import "../styles/page/user.scss";
</style>




