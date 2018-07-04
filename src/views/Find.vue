<template>
  <div class="find">
    <Searchbar :showLocation="false"/> 
    <div class="nav-title">
        <span @click="toggleView({name:'Mv',page:'find'})" :class="findData.currentTab.mv">电影</span>
        <span @click="toggleView({name:'Tv',page:'find'})" :class="findData.currentTab.tv">电视剧</span>
    </div>
    <component :is="findData.currentTab.name"></component>
    <div class="spinner" v-if="findData.spinner">
      <mt-spinner type="triple-bounce" color="#1ea362"></mt-spinner>
    </div>
  </div>
</template>

<script>
import Searchbar from "../components/Searchbar";
import Mv from "@/components/find/Mv";
import Tv from "@/components/find/Tv";
import { mapState, mapActions } from "vuex";
export default {
  computed: { ...mapState(["findData"]) },
  components: { Searchbar, Mv, Tv },
  methods: { ...mapActions(["toggleView"]) }
};
</script>
<style lang="scss" scoped>
@import "../styles/index.scss";
.find {
  .nav-title {
    height: 45px;
    display: flex;
    font-size: 18px;
    position: fixed;
    top: 55px;
    width: 100%;
    z-index: 9;
    background-color: #fff;
    span {
      align-items: center;
      justify-content: center;
      display: flex;
      flex: 1;
      color: #aaa;
      &.on {
        border-bottom: 2px solid #000;
        color: #000;
      }
    }
  }
}
</style>
