<template>
  <header>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </nav>
    <div class="brand">
      <lights-icon />
      Holiday Shopping
    </div>
    <cart-icon />
  </header>
</template>

<script>
import CartIcon from '@/icons/CartIcon';
import LightsIcon from '@/icons/LightsIcon';

export default {
  components: {
    CartIcon,
    LightsIcon
  }
}
</script>

<style lang="postcss">
header {
  @apply flex justify-between w-full;
}

nav {
  @apply flex;
}

.brand {
  @apply flex;
}
</style>
