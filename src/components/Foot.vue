<template>
    <mt-tabbar fixed class="footer">
      <mt-tab-item v-for="(foot,i) in footList" :key="i">
        <router-link :to="foot.path" active-class="on">
          <i class="iconfont" :class="foot.icon"></i>
          <span>{{foot.txt}}</span>
        </router-link>
      </mt-tab-item>
    </mt-tabbar>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: { ...mapState(["footList"]) }
};
</script>
<style lang="scss" scoped>
.footer {
    border-top: 1px solid #ddd;
  a {
    color: #aaa;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    .on {
      color: #515151;
    }
    span {
      font-size: 15px;
      padding-top: 5px;
    }
    .icon-movie2,
    .icon-mine2 {
      font-size: 25px;
    }
    .icon-eye2 {
      font-size: 22px;
    }
  }
}
</style>

