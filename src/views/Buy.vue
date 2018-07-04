<template>
<div class="buy">
     <mt-header title="跳转中">
        <mt-button slot="left" icon="back" @click="goback"></mt-button>
    </mt-header>
    <mt-progress :value="buyData.barVal" :bar-height="1"></mt-progress>
    <div class="middle">
        <div class="tip">正在离开豆瓣，前往猫眼电影</div>
        <div class="btn">
            <mt-button>点击跳转</mt-button>
        </div>
    </div>
</div>
</template>
<script>
import { Progress } from "mint-ui";
import { mapState, mapActions } from "vuex";
export default {
  computed: { ...mapState(["buyData"]) },
  methods: { ...mapActions(["startPro", "goback"]) },
  mounted() {
    this.startPro();
  }
};
</script>
<style lang="scss" scoped>
.buy {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  margin: auto;
  .mint-header {
    color: #1ea362;
    background-color: #f5f5f5;
  }
  .mt-progress {
    height: 2px;
  }
  .middle {
    //   height: 500px;/
    .tip {
      height: 350px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #515151;
    }
    .btn {
      display: flex;
      justify-content: center;
      align-items: center;
      .mint-button--default {
        height: 30px;
        width: 180px;
        font-size: 16px;
        letter-spacing: 2px;
        color: #f1f1f1;
        background-color: #c32a2a;
      }
    }
  }
}
</style>

