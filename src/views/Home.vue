<template>
  <!--Inspired by https://ecomm.design/site/year-day-2/-->
  <div class="home">
    <div class="splash">
      <div class="overlay">
        <h1>We make it easy to plan your holidays.</h1>
        <router-link to="/shop" class="shop-all-link">
          <app-button class="shop-all-button">Shop All</app-button>
        </router-link>
      </div>
    </div>
    <div class="preview">
      <h2>The holidays shouldn't be about prep, they should be about family.</h2>
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
    </div>
  </div>
</template>

<script>
import { useAsyncState } from '@vueuse/core'
import { fetchMostPopularProducts } from '@/utils/data';
import ProductCard from '@/components/ProductCard';
import AppButton from '@/components/AppButton';

export default {
  name: 'Home',
  components: { AppButton, ProductCard },
  setup() {
    const { state: products, isReady } = useAsyncState(fetchMostPopularProducts);

    return {
      loadingProducts: Array.from(Array(4).keys()),
      products,
      isReady
    }
  }
}
</script>

<style class="postcss">
.splash {
  @apply bg-fixed bg-gray-900 bg-center;
  background-image: url("../assets/table.jpg");
  height: 500px;
}

.overlay {
  @apply bg-gray-900 bg-opacity-40 h-full w-full flex flex-col justify-center items-center px-4;
}

.overlay > h1 {
  @apply text-white text-4xl md:text-6xl pb-4 text-center;
  font-family: 'Satisfy', cursive;
  max-width: 35rem;
}

.shop-all-link {
  @apply w-full flex justify-center;
}

.shop-all-button {
  @apply w-full md:w-36;
}

.products {
  @apply flex overflow-x-scroll max-w-full;
}
</style>
