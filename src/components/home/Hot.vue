<template>
    <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="homeData.loadBtm.hot.allLoaded" ref="loadmore">
        <Mv-list :mvList="homeData.hotmv" currentTab="Hot"/>
    </mt-loadmore>
</template>
<script>
import MvList from "./MvList";
import { mapState, mapActions } from "vuex";
export default {
  computed: { ...mapState(["homeData"]) },
  methods: {
    ...mapActions(["getHomeHotMv", "scrollTop", "scrollBtm", "endLoaded"]),
    loadTop() {
      setTimeout(() => {
        this.scrollTop({
          url: "/scrollTop",
          currentTab: "Hot",
          start: this.homeData.loadTop.hot.start,
          end: this.homeData.loadTop.hot.end,
          count: this.homeData.loadTop.hot.count
        });
        this.$refs.loadmore.onTopLoaded();
      }, 1000);
    },
    loadBottom() {
      if (this.homeData.loadBtm.hot.count == 3) {
        this.endLoaded({ currentTab: "Hot" }); // if all data are loaded
      }
      setTimeout(() => {
        this.scrollBtm({
          url: "/scrollBtm",
          currentTab: "Hot",
          start: this.homeData.loadBtm.hot.start,
          end: this.homeData.loadBtm.hot.end,
          count: this.homeData.loadBtm.hot.count
        });
        this.$refs.loadmore.onBottomLoaded();
      }, 1000);
    } 
  },
  components: { MvList },
  created() {
    this.getHomeHotMv("/getHomeHotMv");
  }
};
</script>


