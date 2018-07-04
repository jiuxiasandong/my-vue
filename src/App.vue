<template>
  <div id="app">
    <transition :name="transitionName">
      <router-view class="views"/>
    </transition>  
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  computed: { ...mapState(["transitionName", "mineInfo"]) },
  name: "App",
  methods: {
    ...mapActions(["routerAnimate", "pushUserMv"])
  },
  watch: {
    $route(to, from) {
      this.routerAnimate({ to, from });
      window.scrollTo(0,0);
    },
    "mineInfo.mvInfo": {
      handler: function(val, oldVal) {
        this.pushUserMv({ url: "/pushUserMv", mvInfo: val });
      },
      deep: true
    }
  }
};
</script>
