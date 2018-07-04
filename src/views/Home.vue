<template>
  <div class="home">
    <Searchbar/> 
    <mt-navbar>
        <mt-tab-item id="hot" :class="homeData.currentTab.hot=='on'?'is-selected':''">
            <span @click="toggleView({name:'Hot',page:'home'})">正在热映</span>
        </mt-tab-item>
        <mt-tab-item id="soon" :class="homeData.currentTab.soon=='on'?'is-selected':''">
            <span @click="toggleView({name:'Soon',page:'home'})">即将上映</span>
        </mt-tab-item>
    </mt-navbar>
    <div class="spinner" v-if="homeData.spinner">
      <mt-spinner type="triple-bounce" color="#1ea362"></mt-spinner>
    </div>
    <component :is="homeData.currentTab.name"></component>
  </div>
</template>

<script>
import Searchbar from "../components/Searchbar";
import Hot from "../components/home/Hot";
import Soon from "../components/home/Soon";
import { mapState, mapActions } from "vuex";
export default {
  computed: { ...mapState(["homeData"]) },
  components: { Searchbar, Hot, Soon },
  methods: { ...mapActions(["toggleView"]) }
};
</script>
<style lang="scss" scoped>
@import "../styles/index.scss";
.home {
  padding-bottom: 50px;
  position: relative;
  .mint-navbar .mint-tab-item {
    padding: 13.5px 0;
    color: #aaa;
  }
  .mint-navbar {
    border-bottom: 1px solid #ddd;
    position: fixed;
    top: 55px;
    width: 100%;
    z-index: 9;
    background-color: #fff;
  }
  .mint-tab-item-label span {
    font-size: 18px;
  }
  .mint-navbar .mint-tab-item.is-selected {
    border-bottom: 2px solid #000;
    color: #000;
  }
}
</style>


