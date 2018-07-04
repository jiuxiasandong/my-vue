<template>
    <div class="mv-page">
        <Summary title="找电视" txt="豆瓣高分/爱情"/>
        <My-swiper :config="config1"/>
        <My-swiper :config="config2"/>
        <My-swiper :config="config3"/>
    </div>
</template>

<script>
import MySwiper from "../MySwiper";
import Summary from "./Summary";
import { mapState, mapActions } from "vuex";
export default {
  components: { MySwiper,Summary },
  computed: {
    ...mapState(["findData"]),
    config1: function() {
      let data = Object.assign(
        {},
        { mvList: this.findData.cntv },
        { showHotBtn: true },
        { slidesPerColumn: 1 },
        { title: { txt: "近期热门国产剧", more: "全部50+" } }
      );
      return data;
    },
    config2: function() {
      let data = Object.assign(
        {},
        { mvList: this.findData.usatv },
        { showHotBtn: true },
        { slidesPerColumn: 1 },
        { title: { txt: "近期热门美剧", more: "全部50+" } }
      );
      return data;
    },
    config3: function() {
      let data = Object.assign(
        {},
        { mvList: Array.prototype.slice.call(this.findData.usatv).reverse() },
        { showHotBtn: true },
        { slidesPerColumn: 1 },
        { title: { txt: "近期热门日剧", more: "全部50+" } }
      );
      return data;
    }
  },
  methods: { ...mapActions(["getFindHotTv"]) },
  created() {
    this.getFindHotTv("/getFindHotTv");
  }
};
</script>


