<template>
  <div class="info">
    <div class="fix-top">
      <div class="set" @click="goSetpage"><i class="iconfont icon-set"></i></div>
      <div class="user">
        <div class="pic"><i class="iconfont icon-pic"></i></div>
        <div class="desc">
          <p class="username" @click="goLogin(mineInfo.nickname)">{{mineInfo.nickname}}</p>
          <p class="ticket">
            <i class="iconfont icon-ticket"></i> 
            <span>我的电影票</span>
          </p>
        </div>
      </div>
      <mt-navbar v-model="mineInfo.selected">
        <mt-tab-item v-for="(nav,i) in mineInfo.navs" :key="i" :id="nav.id">
            <span>{{nav.name}}</span>
        </mt-tab-item>
      </mt-navbar>
    </div>
    <mt-tab-container v-model="mineInfo.selected">
      <mt-tab-container-item id="wantMv">
        <Cell :count="mineInfo.mvInfo.wantMv.count" :mvlist="mineInfo.mvInfo.wantMv.mvlist"/>
      </mt-tab-container-item>
      <mt-tab-container-item id="nowMv">
        <Cell :count="mineInfo.mvInfo.nowMv.count" :mvlist="mineInfo.mvInfo.nowMv.mvlist"/>
      </mt-tab-container-item>
      <mt-tab-container-item id="seenMv">
        <Cell :count="mineInfo.mvInfo.seenMv.count" :mvlist="mineInfo.mvInfo.seenMv.mvlist"/>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Cell from "../components/mine/Cell";
export default {
  computed: { ...mapState(["mineInfo"]) },
  components: { Cell },
  methods: {
    ...mapActions(["getNickname", "goLogin", "goSetpage"])
  },
  mounted() {
    this.getNickname();
  }
};
</script>
<style lang="scss" scoped>
.info {
  background-color: #f1f1f1;
  padding-top: 2.58rem;
  display: flex;
  flex-direction: column;
  .mint-navbar .mint-tab-item.is-selected {
    border-bottom: 2px solid #515151;
    color: #515151;
  }
  .mint-navbar .mint-tab-item span {
    font-size: 14px;
    color: #aaa;
  }
  .fix-top {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 999;
    background-color: #1ea362;
    height: 2.58rem;
  }
  .set {
    text-align: right;
    padding: 15px;
    i {
      font-size: 25px;
      color: #fff;
    }
  }
  .user {
    padding-bottom: 10px;
    display: flex;
    justify-content: space-around;
    .pic {
      padding: 0 20px;
      i {
        font-size: 50px;
      }
    }
    .desc {
      flex: 1;
      color: #fff;
      line-height: 40px;
      .username {
        font-size: 20px;
        &::after {
          content: ".";
          display: block;
          width: 200px;
          height: 1.5px;
          background-color: #fff;
        }
      }
      .ticket{
        font-size: 16px;
      }
    }
  }
  .count {
    padding: 10px 15px;
    font-size: small;
    color: #7e7e7e;
  }
}
</style>



