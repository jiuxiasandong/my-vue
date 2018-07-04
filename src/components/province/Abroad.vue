<template>
    <div class="abroad">
        <mt-index-list>
            <mt-index-section v-for="citys in provinceData.abroadCityIndex" :key="citys.classify" :index="citys.classify">
                <div class="cell" v-for="city in citys.list" :key="city" @click="toggleCity(city)">
                    <mt-cell :value="city"></mt-cell>
                </div>
            </mt-index-section>
        </mt-index-list>
    </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  computed: { ...mapState(["provinceData"]) },
  methods: {
    ...mapActions(["toggleCity"])
  }
};
</script>
