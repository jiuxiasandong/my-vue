<template>
    <div class="introduce">
        <div class="title">影人</div>
        <swiper :options="descData.swiperOption">
            <swiper-slide v-for="director in mv.directors" :key="director.name">
                <div class="wrapper">
                    <img :src="director.avatars.small" width="100" height="140">
                    <span class="name">{{director.name}}</span>
                    <span class="profession">导演</span>
                </div>
            </swiper-slide>
            <swiper-slide v-for="cast in mv.casts" :key="cast.id">
                <div class="wrapper">
                    <img :src="cast.avatars.small">
                    <span class="name">{{cast.name}}</span>
                    <span class="profession">演员</span>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  props: ["mv"],
  computed: { ...mapState(["descData"]) },
};
</script>
<style lang="scss" scoped>
.introduce {
  padding-bottom: 10px;
  .title {
    padding: 10px;
    color: #626161;
    font-size: 16px;
  }
  .wrapper {
    display: flex;
    flex-direction: column;
    padding-left: 10px;
    text-align: center;
    justify-content: space-between;
    font-size: 14px;
    letter-spacing: 1px;
    img{
        display: block;
        width: 100px;
        height: 140px;
        margin: auto;
    }
    span.name {
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
    span.profession {
      font-size: 12px;
      color: #626161;
    }
  }
}
</style>

