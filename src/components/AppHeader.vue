<template>
  <header>
    <nav class="pages">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </nav>
    <div class="brand">
      <div class="name">
        <lights-icon />
          <h1>Holiday Shopping App</h1>
      </div>
    </div>
    <nav class="cart">
      <cart-icon />
    </nav>
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
  @apply flex w-full p-2 shadow-md text-indigo-900;
}

.pages {
  @apply flex hidden md:block md:w-1/3;
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
  @apply flex justify-end w-12 md:w-1/3;
}

.cart > svg {
  @apply cursor-pointer;
}
</style>
