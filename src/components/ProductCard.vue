<template>
  <div class="card-container">
    <div class="card">
      <div v-if="loading" class="image-skeleton" />
      <img v-else :src="`product-data/images/${product.image}`" />
      <h3>
        <div v-if="loading" class="name-skeleton" />
        <template v-else>
          {{product.name}}
        </template>
      </h3>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: Object,
    loading: Boolean
  }
}
</script>

<style lang="postcss" scoped>
.card-container {
  @apply p-4 w-full md:w-1/2 lg:w-1/3 xl:w-1/4;
  min-width: 20rem;
}

img {
  @apply w-full object-cover object-center max-h-40 h-40 rounded-t-md;
}

.image-skeleton {
  @apply bg-gray-300 animate-pulse h-40 rounded-t-md;
}

.card {
  @apply shadow-md rounded;
}

.name-skeleton {
  @apply w-1/2 bg-gray-300 h-4 rounded-sm animate-pulse;
}

h3 {
  @apply p-3
}
</style>
