<template>
    <div class="province">
        <header v-show="provinceData.show">
            <div class="back iconfont icon-arrowleft" @click="goback"></div> 
            <div class="btns">
                <mt-button @click="toggleView({name:'Inland',page:'province'})" :class="provinceData.currentTab.inland">国内</mt-button>
                <mt-button @click="toggleView({name:'Abroad',page:'province'})" :class="provinceData.currentTab.abroad">国外</mt-button>
            </div>     
        </header>
        <section>
          <div class="search-wrapper">
            <div class="search-input" :class="provinceData.show?'':'moveTop'">
                <i class="iconfont icon-search"></i>
                <input type="search" placeholder="输入城市名称查询" @input="searchCity" @focus="moveTop">
                <div class="cancel" @click="moveBack" v-show="provinceData.cancel">取消</div>
                <ul class="result-list">
                  <li v-for="city in provinceData.scity" :key="city" @click="toggleCity(city)">{{city}}</li>
                </ul>
            </div>
          </div>
          <component v-show="provinceData.show" :is="provinceData.currentTab.name"></component>
        </section>
    </div>
</template>
<script>
import Inland from "../components/province/Inland";
import Abroad from "../components/province/Abroad";
import { mapState, mapActions } from "vuex";
export default {
  computed: { ...mapState(["provinceData"]) },
  components: { Inland, Abroad },
  methods: {
    ...mapActions([
      "toggleView",
      "searchCity",
      "moveTop",
      "moveBack",
      "toggleCity",
      "goback"
    ])
  }
};
</script>
<style lang="scss" scoped>
@import "../styles/index.scss";
.province {
  $h: 47px;
  header {
    transition: all 2s ease;
    display: flex;
    width: 100%;
    position: fixed;
    left: 0;
    top: 0;
    height: $h;
    border-bottom: 1px solid #dcdcdc;
    padding: 0 10px;
    .back {
      flex: 1;
      display: flex;
      align-items: center;
      font-size: x-large;
      color: $green;
    }
    .btns {
      flex: 9;
      display: flex;
      justify-content: center;
      align-items: center;
      padding-right: 30px;
      .mint-button {
        height: 30px;
        width: 85px;
        font-size: small;
        border-radius: 0;
        border: 1px solid $black;
        background-color: #fff;
        color: $black;
        &:first-child {
          border-top-left-radius: 4px;
          border-bottom-left-radius: 4px;
        }
        &:last-child {
          border-top-right-radius: 4px;
          border-bottom-right-radius: 4px;
        }
        &.on {
          color: #f1f1f1;
          background-color: $black;
        }
      }
    }
  }
  section {
    padding-top: $h;
    .search-wrapper {
      padding: 12px;
      height: 25px;
      .search-input {
        .result-list {
          position: absolute;
          top: 25px;
          width: 100%;
          & > li {
            width: 100%;
            padding: 10px 0;
            border-bottom: 1px solid #ddd;
            color: $black;
          }
        }
        .cancel {
          width: 45px;
          height: 25px;
          background-color: #fff;
          display: flex;
          justify-content: center;
          align-items: center;
          color: $green;
        }
      }
    }
    .moveTop {
      position: absolute;
      top: 5px;
      left: 10px;
      right: 10px;
      margin: auto;
    }
    .moveTop {
      animation: moveTop 0.3s ease;
    }
  }
  @keyframes moveTop {
    from {
      top: 48px;
    }
    to {
      top: 5px;
    }
  }
}
</style>

