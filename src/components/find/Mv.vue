<template>
    <div class="mv-page">
        <Summary title="找电影" txt="豆瓣高分/动作"/>
        <My-swiper :config="config"/>
        <Mv-rank/>
    </div>
</template>

<script>
import MySwiper from "../MySwiper";
import MvRank from "./MvRank";
import Summary from "./Summary";
import { mapState, mapActions } from "vuex";
export default {
  components: { MySwiper, MvRank,Summary },
  computed: {
    ...mapState(["findData"]),
    config: function() {
      let data = Object.assign(
        {},
        { mvList: this.findData.hotmv },
        { showHotBtn: false },
        { slidesPerColumn: 2 },
        { title: { txt: "豆瓣热门", more: "全部99+" } }
      );
      return data;
    }
  },
  methods: { ...mapActions(["getFindHotMv"]) },
  created() {
    this.getFindHotMv("/getFindHotMv");
  }
};
</script>


