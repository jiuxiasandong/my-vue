<template>
    <div class="inland">
        <mt-index-list>
            <div class="current-city">
                <div class="text">当前城市</div>
                <mt-button>{{provinceData.currentcity}}</mt-button>
            </div>
            <div class="hotcity">热门城市</div>
            <div class="city-wrapper">
                <mt-button v-for="city in provinceData.inlandHotCity" :key="city" @click="toggleCity(city)">{{city}}</mt-button>
            </div>
            <mt-index-section v-for="citys in provinceData.inlandCityIndex" :key="citys.classify" :index="citys.classify">
                <div class="cell" v-for="city in citys.list" :key="city" @click="toggleCity(city)">
                    <mt-cell :value="city"></mt-cell>
                </div>
            </mt-index-section>
        </mt-index-list>
    </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  computed: { ...mapState(["provinceData"]) },
  methods: {
    ...mapActions(["toggleCity"])
  }
};
</script>
<style lang="scss" scoped>
.inland {
  $gap: 10px;
  background-color: #fafafa;
  .hotcity {
    padding: 3px $gap;
    text-indent: 10px;
    color: #515151;
  }
  .current-city {
    padding: 3px $gap;
    color: #515151;
    .text {
      text-indent: 10px;
    }
    .mint-button--normal {
      margin-left: 10px;
      margin-top: 10px;
      width: 100px;
      height: 30px;
      background-color: #fff;
      font-size: small;
    }
  }
  .city-wrapper {
    padding: $gap;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    .mint-button {
      margin: 5px;
      width: 100px;
      height: 30px;
      background-color: #fff;
      font-size: 15px;
      color: #434343;
    }
  }
  
}
</style>

