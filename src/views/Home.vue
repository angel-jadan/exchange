<template>
  <div class="container">
    <bounce-loader :loading="isLoading" :color="'#68d391'" :size="100" />
    <PxAssetsTable v-if="!isLoading" :assets="assets" />
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
      isLoading: false,
    }
  },

  created() {
    this.isLoading = true
    api
      .getAssets()
      .then((assets) => (this.assets = assets))
      .finally(() => (this.isLoading = false))
  },
}
</script>
