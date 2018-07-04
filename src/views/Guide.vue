<template>
   <mt-swipe :auto="4000" :continuous="false" :showIndicators="true" ref="swiper">
        <mt-swipe-item v-for="(src,index) in guideList" :key="index">
            <img :src="src" @click="goHome({index,len})" width="100%" height="100%">
        </mt-swipe-item>
    </mt-swipe>
</template>

<script>
import { mapState,mapActions } from "vuex";
export default {
  computed: { ...mapState(["guideList"]) ,
    len:function(){
      return this.$refs.swiper.$children.length - 1
    }
  },
  created() {
    let count = localStorage.getItem("logcount");
    if (!count) {
      localStorage.setItem("logcount", 0);
    } else {
      localStorage.setItem("logcount", 1);
      this.$router.push("./app");
    }
  },
  methods: {
    ...mapActions(["goHome"])
  }
};
</script>


