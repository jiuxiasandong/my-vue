<template>
     <mt-tab-container>
        <mt-tab-container-item >
            <div v-for="(mv,i) in mvList" :key="i" class="content" @click="goDescribe(mv.id)">
                <img :src="mv.images.small">
                <div class="txt">
                    <div class="title">{{mv.title}}</div>
                    <div class="desc">
                        <div class="left">
                            <p>导演：{{mv.directors.map(item=>item.name).join('/').toString()}}</p>
                            <p>主演：{{mv.casts.map(item=>item.name).join('/').toString()}}</p>
                        </div>
                        <div class="right">
                            <p class="want">{{mv.collect_count}}人想看</p>
                            <p class="button"><mt-button size="small" 
                              @click.stop="signFast({
                                                    mvid:mv.id,
                                                    title:mv.title,
                                                    directors:mv.directors.map(item=>item.name).join('/').toString(),
                                                    casts:mv.casts.map(item=>item.name).join('/').toString(),
                                                    imgsrc:mv.images.small,
                                                    comments:''
                            })">想看</mt-button></p>
                        </div>
                    </div>
                </div>
            </div> 
        </mt-tab-container-item>
    </mt-tab-container>
</template>
<script>
import { mapState, mapActions } from "vuex";
import getbg from "../../assets/utils/getbg";
export default {
  props: ["mvList"],
  methods: {
    ...mapActions(["signFast", "goDescribe"]),
  }
};
</script>
<style lang="scss" scoped>
.mint-cell-title {
  flex: 0;
}
.mint-tab-item-label span {
  font-size: 16px;
}
.mint-button--small {
  border: 1px solid #ff7834;
  background: transparent;
  color: #ff7834;
  font-size: 14px
}
.mint-cell {
  border-bottom: 1px solid #eee;
}
.content {
  display: flex;
  justify-content: space-between;
  padding: 13px;
  border-bottom: 1px solid #eee;
  img {
    width: 100px;
    height: 130px;
  }
  .txt {
    .title {
      padding-bottom: 8px;
      font-size: 18px;
      font-weight: bold;
      color: #2c2c2c;
    }
    flex: auto;
    padding: 3px 0 0 10px;
    .desc {
      font-size: 14px;
      display: flex;
      .left {
        flex: 1;
        font-size: 14px;
        p {
          padding: 10px 15px 0 0;
          white-space: pre-wrap;
          &:last-child {
            line-height: 22px;
          }
        }
      }
      .right {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        font-size: 14px;
        .want {
          line-height: 39px;
          color: #ff7834;
        }
        .button {
          width: 100%;
          text-align: right;
        }
      }
    }
  }
}
</style>


