<template>
    <div class="describe">
        <Details :mv="descData.mv"/>
        <Intro :mv="descData.mv"/>
        <div class="spinner" v-if="descData.spinner">
          <mt-spinner type="snake" color="#1ea362"></mt-spinner>
      </div>
    </div>
</template> 
<script>
import Details from "../components/desc/Details";
import Intro from "../components/desc/Intro";
import { mapState, mapActions, mapGetters } from "vuex";
export default {
  computed: {
    ...mapState(["descData"])
  },
  components: { Details, Intro },
  methods: { ...mapActions(["getDescById", "backToTop"]) },
  created() {
    this.getDescById({
      url: "/getDescById",
      id: this.$route.query.id
    });
  }
};
</script>



