<template>
  <div class="card-container">
    <div class="card">
      <div v-if="loading" class="image-skeleton" />
      <img
        v-else
        :src="`product-images/${product.image}`"
        @click="goToProductPage" />
      <div class="info">
        <h1 @click="goToProductPage">
          <div v-if="loading" class="name-skeleton" />
          <template v-else>
            {{product.name}}
          </template>
        </h1>
        <h2>
          <div v-if="loading" class="price-skeleton" />
          <template v-else>
            {{formatCurrency(product.price)}}
          </template>
        </h2>
        <div v-if="loading" class="actions-skeleton" />
        <div class="cart-actions" v-else>
          <app-button variant="primary">Add to Cart</app-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router';

import { formatCurrency } from '@/utils/currency';
import AppButton from '@/components/AppButton';

export default {
  props: {
    product: Object,
    loading: Boolean
  },
  components: { AppButton },
  setup(props) {
    const router = useRouter();

    const goToProductPage = () => {
      router.push(props.product ? `/product/${props.product.id}` : null);
    }

    return {
      formatCurrency,
      goToProductPage
    }
  }
}
</script>

<style lang="postcss" scoped>
.card-container {
  @apply p-4 w-full md:w-1/2 lg:w-1/3 xl:w-1/4;
  min-width: 20rem;
}

img {
  @apply w-full object-cover object-center max-h-40 h-40 rounded-t-md cursor-pointer;
}

.image-skeleton {
  @apply bg-gray-300 animate-pulse h-40 rounded-t-md;
}

.info {
  @apply p-3;
}

h1 {
  @apply text-xl text-red-900 cursor-pointer hover:underline;
  font-family: 'Satisfy', cursive;
}

h2 {
  @apply text-green-900 text-lg;
}

.card {
  @apply shadow-md rounded bg-white;
}

.name-skeleton {
  @apply w-1/2 bg-gray-300 h-6 rounded-sm animate-pulse;
}

.price-skeleton {
  @apply w-1/3 bg-gray-300 h-6 rounded-sm animate-pulse mt-2;
}

.actions-skeleton {
  @apply bg-gray-300 h-10 rounded-sm animate-pulse mt-3;
}

.cart-actions {
  @apply flex pt-3;
}

.cart-actions > button {
  @apply flex-grow;
}
</style>
