<template>
    <div class="summary">
        <div class="sub first-sub" @click="goSearch">
            <div class="pre-icon"><i class="iconfont icon-list"></i></div>
            <div class="title">
                <span class="first">{{title}}</span>
                <span class="txt">{{txt}}</span>
            </div>
            <div class="after-icon"><i class="iconfont icon-arrowright"></i></div>
        </div>
        <div class="sub" @click="goMine">
            <div class="pre-icon"><i class="iconfont icon-heart"></i></div>
            <div class="title">
                <span class="first">我的影视</span>
                <span>{{findData.total}}</span>
            </div>
            <div><i class="iconfont icon-arrowright"></i></div>
        </div>
    </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
export default {
  computed: { ...mapState(["findData"]) },
  props: {
    title: String,
    txt: String
  },
  methods: { ...mapActions(["goSearch", "getTotal","goMine"]) },
  mounted() {
    this.getTotal();
  }
};
</script>
<style lang="scss" scoped>
.summary {
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  padding: 15px;
  display: flex;
  align-items: center;
  .first-sub {
    border-right: 1px solid #dddddd;
  }
  .sub {
    flex: 1;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .pre-icon {
      flex: 2;
      text-align: right;
      i {
        font-size: 30px;
        &.icon-list {
          color: purple;
        }
        &.icon-heart {
          color: crimson;
        }
      }
    }
    .title {
      display: flex;
      flex-direction: column;
      flex: 6;
      text-align: left;
      padding-left: 10px;
      span {
        font-size: 14px;
        &.first{
          font-size: 18px;
          font-weight: bold;
        }
      }
    }
    .after-icon {
      flex: 2;
      text-align: center;
    }
  }
}
</style>
