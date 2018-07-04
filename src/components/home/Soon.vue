<template>
    <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="homeData.loadBtm.soon.allLoaded" ref="loadmore">
        <Mv-list :mvList="homeData.soonmv" currentTab="Soon"/>
    </mt-loadmore>
</template>
<script>
import MvList from "./MvList";
import { mapState, mapActions } from "vuex";
export default {
  computed: { ...mapState(["homeData"]) },
  methods: {
    ...mapActions(["getHomeSoonMv", "scrollTop", "scrollBtm", "endLoaded"]),
    loadTop() {
      setTimeout(() => {
        this.scrollTop({
          url: "/scrollTop",
          currentTab: "Soon",
          start: this.homeData.loadTop.soon.start,
          end: this.homeData.loadTop.soon.end,
          count: this.homeData.loadTop.soon.count
        });
        this.$refs.loadmore.onTopLoaded();
      }, 1000);
    },
    loadBottom() {
      if (this.homeData.loadBtm.soon.count == 3) {
        this.endLoaded({ currentTab: "Soon" }); // if all data are loaded
      }
      setTimeout(() => {
        this.scrollBtm({
          url: "/scrollBtm",
          currentTab: "Soon",
          start: this.homeData.loadBtm.soon.start,
          end: this.homeData.loadBtm.soon.end,
          count: this.homeData.loadBtm.soon.count
        });
        this.$refs.loadmore.onBottomLoaded();
      }, 1000);
    }
  },
  components: { MvList },
  created() {
    this.getHomeSoonMv("/getHomeSoonMv");
  }
};
</script>