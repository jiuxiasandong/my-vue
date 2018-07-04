<template>
    <div class="setpage">
        <mt-header title="设置">
            <mt-button icon="back" slot="left" @click="goback"></mt-button>
        </mt-header>
        <div class="cells">
            <div class="cell-wrapper">
                <mt-cell is-link>
                    <div class="title" slot="title">意见反馈</div>
                </mt-cell>
            </div>
            <div class="cell-wrapper">
                <mt-cell is-link>
                    <div class="title" slot="title">给应用评分</div>
                </mt-cell>
            </div>
            <div class="cell-wrapper">
                <mt-cell is-link>
                    <div class="title" slot="title">清除缓存</div>
                </mt-cell>
            </div>
            <div class="cell-wrapper last">
                <mt-cell is-link>
                    <div class="title" slot="title">关于</div>
                </mt-cell>
            </div>
        </div>
        <div class="logout" v-if="mineInfo.logOutFlag">
            <mt-button size="large" @click="logOut">退出登录</mt-button>
        </div>
    </div>
    
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  computed: { ...mapState(["mineInfo"]) },
  methods: { ...mapActions(["logOut", "logOutShow","goback"]) },
  created() {
    this.logOutShow();
  }
};
</script>
<style lang="scss" scoped>
.setpage {
  background-color: #f6f8fb;
  height: 100%;
  .mint-header {
    background-color: #fafafa;
    border-bottom: 1px solid #b8bbbf;
    color: #29b429;
    font-size: 15px;
  }
  .cells {
    margin-top: 35px;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
    .cell-wrapper {
      padding: 0 5px;
      background-color: #fff;
      &:after {
        content: " ";
        display: block;
        height: 1px;
        background-color: #eee;
      }
      &.last::after {
        border-bottom: none;
      }
      .title {
        width: 100px;
        letter-spacing: 2px;
      }
    }
  }
  .logout {
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
    margin-top: 35px;
    .mint-button--large {
      background-color: #fff;
      box-shadow: none;
      border-radius: 0;
    }
  }
}
</style>

