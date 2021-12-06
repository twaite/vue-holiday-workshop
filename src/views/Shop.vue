<template>
  <div class="products">
    <template v-if="isReady">
      <product-card
        v-for="product in products"
        :product="product"
        :key="product.id" />
    </template>
    <template v-else>
      <product-card
        v-for="i in loadingProducts"
        :loading="true"
        :key="i" />
    </template>
  </div>
</template>

<script>
import { useAsyncState } from '@vueuse/core'
import { fetchProducts } from '@/utils/data';
import ProductCard from '@/components/ProductCard';

export default {
  components: { ProductCard },
  setup() {

    const { state: products, isReady } = useAsyncState(fetchProducts);

    return {
      // Create an array [1,2,3,4, ...]
      loadingProducts: Array.from(Array(8).keys()),
      products,
      isReady
    }
  }
}
</script>

<style scoped>
.products {
  @apply flex flex-wrap;
}
</style>
