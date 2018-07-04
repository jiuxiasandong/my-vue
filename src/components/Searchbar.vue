<template>
  <div class="searchbar">
    <div class="location" v-if="showLocation" @click="goProvince">
      <span>{{provinceData.currentcity}}</span>
      <i class="iconfont icon-arrowdown"></i>
    </div>
    <div class="search-input" @click="goSearch">
      <i class="iconfont icon-search"></i>
      <input type="text" placeholder="电影/电视剧/影人">
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  computed: { ...mapState(["provinceData"]) },
  props: {
    showLocation: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    ...mapActions(["goSearch", "goProvince"])
  }
};
</script>
<style lang="scss" scoped>
@import "../styles/index.scss";
.searchbar {
  display: flex;
  padding: 5px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 9;
  background-color: #fff;
  .location {
    display: flex;
    flex: 1.3;
    align-items: center;
    justify-content: center;
    letter-spacing: 1px;
    font-size: 14px;
    .icon-arrowdown{
      font-size: 20px;
    }
  }
  .search-input {
    margin: 10px;
    ::-webkit-input-placeholder {
      font-size: 14px;
    }
  }
}
</style>

