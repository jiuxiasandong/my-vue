<template>
  <div class="app-views">
    <router-view class="section"/>
    <Foot/>       
  </div>
</template>

<script>
import Foot from '../components/Foot';
export default {
  name: 'Layout',
  components:{
    Foot
  }
}
</script>

<style>

</style>
