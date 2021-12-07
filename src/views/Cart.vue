<template>
  <div class="container">
    <div class="products">
      <h1>Review Products</h1>
      <h3 v-if="!products.length">Your cart is empty</h3>
      <ul v-else>
        <li v-for="product in products" :key="product.id">
          {{product.count}} {{product.name}}(s) @ {{formatCurrency(product.price)}}
        </li>
      </ul>
    </div>
    <div class="summary">
      <h1>Summary</h1>
      <span>Subtotal</span>
      <span class="flex justify-end">
        {{formatCurrency(summary ? summary.subtotal : 0)}}
      </span>
      <span>Taxes</span>
      <span class="flex justify-end">
        {{formatCurrency(summary ? summary.taxes : 0)}}
      </span>
      <span>Total</span>
      <span class="flex justify-end">
        {{formatCurrency(summary ? summary.total : 0)}}
      </span>
      <app-button variant="primary">Checkout</app-button>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

import AppButton from '@/components/AppButton';
import { formatCurrency } from '@/utils/currency';

export default {
  components: {
    AppButton
  },
  setup() {
    const store = useStore();

    return {
      formatCurrency,
      products: computed(() => store.getters.products),
      summary: computed(() => store.getters.summary)
    }
  }
}
</script>

<style scoped>
.container {
  @apply max-w-screen-lg flex flex-wrap my-0 mx-auto pt-6 px-4 md:px-0;
}

.products {
  @apply flex w-full md:w-2/3 flex-col;
}

.products > h1 {
  @apply text-lg font-bold; 
}

.products > h3 {
  @apply text-gray-400 text-lg md:text-xl font-bold py-5 text-center;
}

.summary {
  @apply bg-gray-100 rounded-md flex w-full md:w-1/3 p-4 flex flex-wrap;
}

.summary > h1 {
  @apply text-gray-900 text-lg w-full font-bold pb-2;
}

.summary > span {
  @apply w-1/2;
}

.summary > button {
  @apply w-full mt-2;
}

li {
  @apply py-2;
}
</style>

