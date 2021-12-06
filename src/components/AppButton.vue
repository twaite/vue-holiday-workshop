<template>
  <button :class="[{ full: full }, variant === 'primary' ? 'primary' : 'secondary']">
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    variant: {
      type: String,
      default: "secondary"
    },
    full: {
      boolean: String,
      default: false
    }
  }
}
</script>

<style scoped>
button {
  @apply rounded border-indigo-900 border-2 py-1 px-2;
}

button.full {
  @apply w-full;
}

button.primary {
  @apply bg-indigo-900 text-white;
} 

button.secondary {
  @apply bg-white text-indigo-900;
}
</style>
