<template>
  <div class="container">
    <PxAssetsTable :assets="assets" />
  </div>
</template>

<script>
import api from '@/api'
import PxAssetsTable from '@/components/PxAssetsTable.vue'

export default {
  name: 'Home',

  components: {
    PxAssetsTable,
  },

  data() {
    return {
      assets: [],
    }
  },

  created() {
    api.getAssets().then((assets) => (this.assets = assets))
  },
}
</script>
