<template>
    <mt-popup v-model="descData.badgePop" position="bottom">
        <div class="badge">
            <mt-header>
              <mt-button class="iconfont icon-fork" slot="left" @click="hideBadgePop"></mt-button>
              <mt-button slot="right" @click="submitBadge(mvInfo)">确定</mt-button>
            </mt-header>
            <mt-navbar v-model="descData.selected">
              <mt-tab-item id="want"><span>想看</span></mt-tab-item>
              <mt-tab-item id="seen"><span>看过</span></mt-tab-item>
            </mt-navbar>
            <mt-tab-container v-model="descData.selected">
              <mt-tab-container-item id="want">
                  <div class="tab">
                      <div class="title">为电影打标签</div>
                      <div class="tags-wrapper">
                          <div class="tags" v-for="(badge,i) in descData.badges" :key="i" @click="toggleClass(i)">
                              <mt-badge size="large" color="#fff" :class="descData.badges[i].statu?'on':''">{{badge.name}}</mt-badge>
                          </div>
                      </div>
                      <mt-field placeholder="写几句评价吧..." type="textarea" rows="6" v-model="descData.comments"></mt-field>
                      <mt-checklist v-model="descData.issue" :options="['发布后分享到微信、微博']"></mt-checklist>
                      <div class="botom">
                          <div class="txt-1">同步到</div>
                          <div class="txt-2">豆瓣广播</div>
                      </div>
                  </div>
              </mt-tab-container-item>
              <mt-tab-container-item id="seen">
                  <div class="tab">
                      <div class="mark title">点击星星评分</div>
                      <div class="stars-wrapper">
                        <svg class="icon icon-star-gray" @click="markStar(i+1)" aria-hidden="true" v-for="(star,i) in descData.stars" :key="i">
                          <use :xlink:href="star?'#icon-star':'#icon-star-gray'"></use>
                        </svg>
                      </div>
                      <div class="title">为电影打标签</div>
                      <div class="tags-wrapper">
                          <div class="tags" v-for="(badge,i) in descData.badges" :key="i" @click="toggleClass(i)">
                              <mt-badge size="large" color="#fff" :class="descData.badges[i].statu?'on':''">{{badge.name}}</mt-badge>
                          </div>
                      </div>
                      <mt-field placeholder="写几句评价吧..." type="textarea" rows="6" v-model="descData.comments"></mt-field>
                      <mt-checklist v-model="descData.issue" :options="['发布后分享到微信、微博']"></mt-checklist>
                      <div class="botom seenbtm">
                          <div class="txt-1">同步到</div>
                          <div class="txt-2">豆瓣广播</div>
                      </div>
                  </div>
              </mt-tab-container-item>
            </mt-tab-container>
        </div>
    </mt-popup>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  props: ["mvInfo"],
  computed: {
    ...mapState(["descData"])
  },
  methods: { ...mapActions(["hideBadgePop", "toggleClass", "submitBadge","markStar"]) }
};
</script>
<style lang="scss" scoped>
.mint-popup-bottom {
  border: 1px solid #fff;
  height: 100%;
}
.badge {
  $bg: #fefefe;
  background-color: $bg;
  .mint-navbar {
    border-bottom: 1px solid #eee;
    background-color: $bg;
    .mint-tab-item {
      color: #aaa;
      padding: 15px 0;
    }
    .mint-tab-item.is-selected {
      border-bottom: 2px solid #515151;
      color: #515151;
    }
    .mint-tab-item-label span {
      font-size: 16px;
    }
  }
  .mint-header {
    background-color: $bg;
    color: #515151;
    margin-bottom: 10px;
    .mint-header-button.is-left {
      .mint-button {
        font-size: large;
        font-weight: bold;
      }
      .icon-fork{
        font-size: 18px;
      }
    }
    .mint-header-button.is-right {
      .mint-button {
        background-color: #ff9800;
        color: #f1f1f1;
        height: 25px;
        border-radius: 3px;
        width: 60px;
        margin-left: 30px;
      }
    }
  }

  .tab {
    $fontColor: #7e7e7e;
    padding: 20px;
    .title {
      padding: 8px;
      color: $fontColor;
      text-align: center;
      font-size: 20px;
    }
    .tags-wrapper {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      .tags {
        .mint-badge {
          &.on {
            color: #ff9800;
            border: 1px solid #ff9800;
          }
          color: $fontColor;
          margin: 5px;
          border: 1px solid #ddd;
        }
        .mint-badge.is-size-large {
          font-size: 14px;
          padding: 2px 14px;
        }
      }
    }
    .mint-field.is-textarea {
      border: 1px solid #ddd;
      margin-top: 30px;
    }
    .botom {
      height: 140px;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      text-align: center;
      color: #aaa;
      &.seenbtm{
        height: 62px;
      }
      .txt-1 {
        position: relative;
        margin-bottom: 10px;
      }
      .txt-1::after,
      .txt-1::before {
        content: " ";
        display: block;
        width: 36%;
        height: 1px;
        top: 9px;
        background-color: #eee;
        position: absolute;
      }
      .txt-1::after {
        left: 0;
      }
      .txt-1::before {
        right: 0;
      }
    }
    .stars-wrapper{
      text-align: center;
      .icon-star-gray{
        width: 40px;
        height: 40px;
      }
    }
  }
}
</style>
