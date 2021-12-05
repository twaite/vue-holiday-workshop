<template>
  <div class="home">
    <div class="splash">
      <div class="overlay">
        <h1>We make it easy to plan your holidays.</h1>
        <router-link to="/shop">
          <button>Shop All</button>
        </router-link>
      </div>
    </div>
    <div class="preview">
      <h2>The holidays shouldn't be about prep, they should be about family.</h2>
    </div>
  </div>
</template>

<script>
// Inspired by https://ecomm.design/site/year-day-2/
export default {
  name: 'Home',
}
</script>

<style class="postcss">
.splash {
  @apply bg-fixed bg-gray-900 bg-center;
  background-image: url("../assets/table.jpg");
  height: 500px;
}

.overlay {
  @apply bg-gray-900 bg-opacity-30 h-full w-full;
}
</style>
