<template>
  <main>
    <PxHeader/>
    <PxAssetsTable/> 
  </main>
</template>

<script>

import PxHeader from '@/components/PxHeader.vue';
import PxAssetsTable from '@/components/PxAssetsTable.vue';

export default {
  name: "App",
  components: {
    PxHeader,
    PxAssetsTable,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
