<template>
    <div class="star">
        <svg class="icon icon-star" aria-hidden="true" v-for="(star,i) in stars" :key="i">
          <use :xlink:href="'#icon-'+star"></use>
        </svg>
        <span class="rating" v-if="showRate">{{String(count).indexOf('.')>-1?count:count+'.0'}}</span> 
    </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  computed: { ...mapState(["stars"]) },
  props: {
    count: {
      required: true
    },
    showRate: {
      default: true
    }
  },
  methods: {
    ...mapActions(["createStars"]),
  },
  created() {
    this.createStars(this.count);
  }
};
</script>
<style lang="scss" scoped>
.star {
  span {
    display: inline-block;
    width: 10px;
    height: 10px;
  }
  span.rating {
    width: auto;
    height: auto;
    margin: 0 6px;
    font-size: 14px;
  }
  .icon-star{
    width: 14px;
    height: 14px;
  }
}
</style>



