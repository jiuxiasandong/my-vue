<template>
  <div class="cell">
    <div class="count" v-if="count==0?false:true">{{count}}部</div>
    <mt-cell v-for="mv in mvlist" :key="mv.mvid" >
        <div class="content" @click="goDescribe(mv.mvid)">
            <img :src="mv.imgsrc" width="60" height="85">
            <div class="txt">
                <div class="title">
                <span>{{mv.title}}</span>
                <span>{{mv.time}}</span>
                </div>
                <div class="desc">
                    <div class="left">
                        <p>导演：{{mv.directors}}</p>
                        <p>主演：{{mv.casts}}</p>
                    </div>
                </div>
                <div class="comments">
                  <div class="stars-wrapper" v-if="mineInfo.selected=='seenMv'?true:false">
                    <svg class="icon icon-star-gray" aria-hidden="true" v-for="(star,i) in mv.stars" :key="i">
                      <use :xlink:href="star?'#icon-star':'#icon-star-gray'"></use>
                    </svg>
                  </div>
                  <div class="txt">{{mv.comments}}</div>
                </div>
            </div>
        </div>
    </mt-cell>
  </div>
</template>
<script>
import { mapState,mapActions } from "vuex";
export default {
  computed: { ...mapState(["mineInfo"]) },
  props: ["count", "mvlist"],
  methods: {
    ...mapActions(["goDescribe"])
  }
};
</script>
<style lang="scss" scoped>
.cell {
  .count {
    padding: 10px 15px;
    font-size: small;
    color: #7e7e7e;
  }
  .content {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 13px 0;
    .txt {
      .title {
        padding-bottom: 8px;
        font-size: 15px;
        color: #2c2c2c;
        display: flex;
        span:first-child {
          flex: 1;
        }
        span:last-child {
          font-size: x-small;
          color: #7e7e7e;
        }
      }
      flex: auto;
      padding: 3px 0 0 10px;
      .desc {
        font-size: 14px;
        display: flex;
        .left {
          flex: 1;
          font-size: x-small;
          p {
            width: 280px;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            &:last-child {
              line-height: 22px;
            }
          }
        }
      }
      .comments {
        background-color: #f1f1f1;
        padding: 10px;
        border-left: 2px solid #ffc107;
        .txt {
          font-size: small;
          padding-top: 5px;
        }
        .icon-star-gray {
          width: 14px;
        }
      }
    }
  }
}
</style>


