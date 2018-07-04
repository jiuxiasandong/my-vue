<template>
    <div class="details">
        <mt-header title="电影" :style="{background:mv.bg}">
            <mt-button icon="back" slot="left" @click="goback"></mt-button>
            <mt-button icon="share" class="iconfont icon-share" slot="right" @click="entryPop"></mt-button>
        </mt-header>
         <div class="ad" :style="{background:mv.bg}">
            <img :src="mv.images.large">
        </div>
          <div class="desc"> 
            <div class="left">
                <div class="title">{{mv.title}}</div>
                <div class="genre">{{mv.genres.join("/")}}</div>  
                <div class="cast">{{mv.casts.map(item => item.name).join("/")}}</div>  
                <div class="year">{{mv.year}}</div>
            </div>
            <div class="right">
                <div>豆瓣评分</div>
                <div class="rate">{{ mv.rating.average}}</div>
                <Star :count=" mv.rating.average" :showRate="false"/> 
                <div class="collect_count">{{mv.collect_count}}人</div>
            </div>
        </div>  
        <div class="btns">
            <mt-button size="small" class="want" @click="signWant()">想看</mt-button>    
            <mt-button size="small" class="seen" @click="signSeen()">看过</mt-button>    
        </div> 
        <div class="ticket" @click="goBuy({
                                          mvid:mv.id,
                                          title:mv.title,
                                          directors:mv.directors.map(item=>item.name).join('/').toString(),
                                          casts:mv.casts.map(item=>item.name).join('/').toString(),
                                          imgsrc:mv.images.small,
                                          comments:'',
                                          })">
          <i class="iconfont icon-ticket"></i>
          <span>选座购票</span>
          <i class="iconfont icon-arrowright"></i>
        </div>
        <mt-popup v-model="descData.entryPop" position="bottom">
          <div class="service-entry">
            <div v-for="entry in descData.entries" :key="entry.name">
              <svg class="icon" aria-hidden="true">
                <use :xlink:href="'#icon-'+entry.name"></use>
              </svg>
              <div class="entry-txt">{{entry.txt}}</div>
            </div>
          </div>
          <div class="copylink">
            <i class="iconfont icon-link"></i>
            <span>复制链接</span>
          </div>
          <mt-button size="large" type="default" @click="entryPop">取消</mt-button>
        </mt-popup>
        <Badge :mvInfo="{
                          mvid:mv.id,
                          title:mv.title,
                          directors:mv.directors.map(item=>item.name).join('/').toString(),
                          casts:mv.casts.map(item=>item.name).join('/').toString(),
                          imgsrc:mv.images.small
                        }"/>
    </div>
</template>
<script>
import Star from "../Star";
import Badge from "./Badge";
import { mapState, mapActions } from "vuex";
export default {
  computed: { ...mapState(["descData"]) },
  props: ["mv"],
  components: { Star, Badge },
  methods: {
    ...mapActions(["entryPop", "goBuy", "goback", "signWant", "signSeen"])
  }
};
</script>
<style lang="scss" scoped>
.details {
  .mint-header {
    color: #fff !important;
    .mint-button {
      font-size: 25px;
    }
  }
  .ad {
    padding: 30px;
    img {
      width: 250px;
      height: 350px;
      margin: auto;
    }
  }
  .desc {
    padding: 20px;
    display: flex;
    .left {
      color: #8c858c;
      font-size: 14px;
      flex: 8;
      .title {
        padding-bottom: 8px;
        color: #000;
        font-size: 30px;
        font-weight: bold;
      }
      .cast {
        margin: 5px 0;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
    }
    .right {
      padding: 10px;
      background-color: #fff;
      -webkit-box-shadow: 0px 0px 38px -6px rgba(191, 191, 191, 1);
      -moz-box-shadow: 0px 0px 38px -6px rgba(191, 191, 191, 1);
      box-shadow: 0px 0px 38px -6px rgba(191, 191, 191, 1);
      font-size: 14px;
      text-align: center;
      color: #8c858c;
      .rate {
        font-size: 22px;
        color: #000;
        font-weight: bold;
      }
    }
  }
  .btns {
    margin-top: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    .mint-button--small {
      background-color: transparent;
      border: 1px solid #ffce44;
      box-shadow: none;
      color: #ffce44;
    }
    .want {
      width: 120px;
    }
    .seen {
      width: 206px;
    }
  }
  .ticket {
    padding-bottom: 18px;
    margin: 50px 20px 0;
    border-bottom: 1px solid #eee;
    display: flex;
    align-items: center;
    font-size: 20px;
    span {
      flex: 8;
      font-weight: bolder;
      text-indent: 10px;
    }
    .icon-ticket,
    .icon-arrowright {
      font-size: 20px;
    }
  }
  .mint-button {
    border-radius: 0;
  }
  .mint-popup {
    width: 100%;
    .service-entry {
      display: flex;
      justify-content: space-around;
      padding: 15px 0;
      svg {
        font-size: 40px;
        margin: 10px;
      }
      .entry-txt {
        text-align: center;
        font-size: 14px;
        color: #8c858c;
      }
    }
    .copylink {
      height: 90px;
      border-top: 1px solid #eee;
      display: flex;
      justify-content: center;
      padding-left: 10px;
      flex-direction: column;
      .icon-link {
        font-size: 40px;
        color: #000;
      }
      span {
        font-size: 12px;
        margin-top: 5px;
        color: #8c858c;
      }
    }
  }
}
</style>


