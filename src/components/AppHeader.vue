<template>
  <header>
    <nav class="pages">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </nav>
    <div class="brand">
      <router-link class="name" to="/products">
        <lights-icon />
          <h1>Holiday Shopping App</h1>
      </router-link>
    </div>
    <nav class="cart">
      <router-link to="/products" class="product-link" v-if="route.path !== '/products'">
        <app-button>Browse all products</app-button>
      </router-link>
      <router-link to="/cart">
        <cart-icon />
        <span class="badge">{{productCount}}</span>
      </router-link>
    </nav>
  </header>
</template>

<script>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';

import CartIcon from '@/icons/CartIcon';
import LightsIcon from '@/icons/LightsIcon';
import AppButton from '@/components/AppButton';

export default {
  components: {
    AppButton,
    CartIcon,
    LightsIcon
  },
  setup() {
    const store = useStore();
    const route = useRoute();

    return {
      route,
      productCount: computed(() => store.getters.productCount)
    }
  }
}
</script>

<style lang="postcss">
header {
  @apply flex w-full px-2 py-3 shadow-md text-green-900;
}

.pages {
  @apply flex hidden md:flex md:w-1/3 items-center;
}

.pages > a {
  @apply pr-3
}

.brand {
  @apply flex md:w-1/3 flex-grow md:justify-around;
}

.brand > .name {
  @apply flex items-center;
}

.name > h1 {
  @apply pl-2 text-xl;
}

.cart {
  @apply flex justify-end w-12 md:w-1/3 items-center;
}

.cart > svg {
  @apply cursor-pointer;
}

.cart > a {
  @apply relative;
}

.product-link {
  @apply pr-2 hidden md:block relative;
}

.badge {
  @apply rounded-full px-1 bg-green-600 text-white absolute text-sm -inset-y-1.5 h-4 w-4 inset-x-3.5;
}
</style>
