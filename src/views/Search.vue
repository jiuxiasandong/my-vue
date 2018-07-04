<template>
  <div class="search-page" @input="searchStart(searchData.keyword)">
    <mt-search v-model="searchData.keyword" cancel-text="取消" placeholder="搜索影视" :autofocus="true" :show="true">
      <mt-cell v-if="searchData.hotshow" v-for="(item,i) in searchData.hotSearch" :title="item.title" :value="item.value" :key="i"></mt-cell>
      <div v-if="searchData.listshow" class="search-result">
        <div class="classify">影视</div>
          <div v-for="(mv,i) in searchData.mvList" :key="i" class="content" @click="goDescribe(mv.id)">
              <img :src="mv.images.small" width="70" height="100">
              <div class="txt">
                  <h2>{{mv.title}}</h2>
                  <Star :count="mv.rating.average" :showRate="true"/> 
                  <div class="desc">
                      <p>导演：{{mv.directors[0].name}}</p>
                      <p>主演：{{mv.casts.map((item,i)=>item.name).join('/').toString()}}</p>
                  </div>
              </div>
          </div>
          <div class="classify tip">{{searchData.mvList[0]?"":"暂无内容"}}</div>
      </div>
    </mt-search>
    <span class="cancel" @click="goback"></span>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Star from "../components/Star";
export default {
  computed: {
    ...mapState(["searchData"])
  },
  methods: {
    ...mapActions(["getSearchMv","goback","goDescribe"]),
    searchStart(keyword) {
      this.getSearchMv({ url: "/getSearchMv", keyword });
    }
  },
  components: { Star },
};
</script>

<style lang="scss" scoped>
.search-page {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  left: 0;
  .mint-cell:first-child {
    background-color: #f1f1f1;
    border-top: 1px solid #ddd;
  }
  .cancel {
    background-color: transparent;
    position: absolute;
    right: 0;
    top: 0;
    padding: 16px 22px;
    z-index: 1;
  }
  .search-result {
    .classify {
      height: 30px;
      background: #eee;
      padding: 5px 13px;
      line-height: 30px;
      color: #7e7a7a;
    }
    .tip {
      background-color: #fff;
    }
    .content {
      width: 100%;
      display: flex;
      justify-content: space-between;
      padding: 13px;
      font-size: small;
      border-bottom: 1px solid #eee;
      .txt {
        h2 {
          padding-bottom: 8px;
          color: #2c2c2c;
          font-size: 16px;
        }
        flex: auto;
        padding: 3px 0 0 10px;
        .desc {
          display: flex;
          color: #aaa;
          flex-direction: column;
          p {
            white-space: pre-wrap;
            padding-top: 5px;
            &:last-child {
              line-height: 22px;
            }
          }
        }
      }
    }
  }
}
</style>
