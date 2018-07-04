<template>
  <div class="swiper">
      <div class="title">
        <span class="txt">{{config.title.txt}}</span> 
        <span class="more">{{config.title.more}}</span>
        <i class="iconfont icon-arrowright"></i>
      </div>
      <div class="content">
          <swiper :options="{slidesPerView: 3.4,slidesPerColumn: config.slidesPerColumn,spaceBetween: 20}">
              <swiper-slide v-for="(mv,i) in config.mvList" :key="i">
                  <div class="wrapper" @click="goDescribe(mv.id)">
                      <div class="add">
                          <i class="iconfont icon-fork"></i>
                      </div>
                      <img :src="mv.subject?mv.subject.images.small:mv.images.small">
                      <div class="name">{{mv.subject?mv.subject.title:mv.title}}</div>
                      <Star :count="mv.subject?mv.subject.rating.average:mv.rating.average"/>
                      <mt-button size="small" v-if="config.showHotBtn">正在热议</mt-button>
                  </div>
              </swiper-slide>
          </swiper>
      </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import Star from "./Star";
export default {
  props: ["config"],
  components: { Star },
  methods: {
    ...mapActions(["goDescribe"])
  }
};
</script>
<style lang="scss" scoped>
.swiper {
  .title {
    padding: 20px 15px 0;
    display: flex;
    align-items: center;
    .txt {
      font-weight: bolder;
      font-size: 18px;
      flex: 7;
    }
    .more {
      flex: 2;
      text-align: right;
    }
  }
  .content {
    padding: 15px;
    .wrapper {
      position: relative;
      img {
        width: 100px;
        height: 140px;
        border-radius: 4px;
      }
      .name {
        font-size: 18px;
        font-weight: bold;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        padding-top: 5px;
      }
      .add {
        position: absolute;
        left: 0;
        top: 0;
        width: 25px;
        height: 25px;
        background: rgba(192, 192, 191, 0.5);
        text-align: center;
        line-height: 25px;
        .icon-fork {
          position: absolute;
          left: 0;
          top: 0;
          right: 0;
          bottom: 0;
          margin: auto;
          transform: rotate(45deg);
          color: #fff;
          font-size: 16px;
          font-weight: bold;
        }
      }
    }
  }
}
</style>