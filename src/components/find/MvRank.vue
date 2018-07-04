<template>
<div class="rank-list">
    <div class="classfy">{{findData.title}}</div>
    <swiper ref="rSwiper" :options="findData.swiperOption">
        <swiper-slide @slideNext="touchNext" class="slide1">
            <div class="item" v-for="(mv,i) in findData.rankMv.top250" :key="i" @click="goDescribe(mv.id)">
                <div class="order"><span>{{i+1}}</span></div>
                <div class="img"><img :src="mv.images.small"></div>
                <div class="desc">
                    <div class="title">{{mv.title}}</div>
                    <div class="rating">
                        <Star :count="mv.rating.average"/>
                        <span>{{mv.collect_count}}人评价</span>
                    </div>
                </div>
            </div>
        </swiper-slide>
         <swiper-slide @slidePrev="touchPrev" class="slide2">
             <div class="item" v-for="(mv,i) in findData.rankMv.usa" :key="i" @click="goDescribe(mv.subject.id)">
                <div class="order"><span>{{i+1}}</span></div>
                <div class="img"><img :src="mv.subject.images.small" width="40" height="55"></div>
                <div class="desc">
                    <div class="title">{{mv.subject.title}}</div>
                    <div class="rating">
                        <Star :count="mv.subject.rating.average"/>
                        <span>{{mv.subject.collect_count}}人评价</span>
                    </div>
                </div>
            </div>
        </swiper-slide>
    </swiper>
</div>
</template>
<script>
import { mapState, mapActions } from "vuex";
import Star from "../Star";
export default {
  components: { Star },
  computed: {
    ...mapState(["findData"])
  },
  methods: {
    ...mapActions([
      "getRankMv",
      "goDescribe",
      "getSwiper",
      "touchNext",
      "touchPrev"
    ])
  },
  mounted() {
    this.getRankMv("/getRankMv");
    this.getSwiper(this.$refs.rSwiper.swiper);
  }
};
</script>
<style lang="scss" scoped>
.rank-list {
  .slide1 {
    width: 310px;
  }
  .classfy {
    padding: 10px;
    font-size: 20px;
    font-weight: bold;
  }
  padding: 20px 0;
  .item {
    display: flex;
    .order {
      font-size: 14px;
      padding: 0 15px;
    }
    .img {
      img {
        width: 40px;
        height: 55px;
      }
    }
    .desc {
      flex: 1;
      padding: 10px;
      .title {
        font-size: 14px;
      }
      .rating {
        display: flex;
        font-size: 14px;
        padding: 5px 0 10px;
        border-bottom: 1px solid #ddd;
        color: #cdcdcd;
        span.middle {
          margin: 0 6px;
        }
      }
    }
  }
}
</style>

