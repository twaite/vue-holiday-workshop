<template>
  <div class="about">
    <h1>This is an about page</h1>
    <LightsIcon />
  </div>
</template>

<script>
import LightsIcon from '@/icons/LightsIcon';

export default {
  components: {
    LightsIcon
  }
}
</script>

<style lang="postcss" scoped>

.about {
  @apply bg-gray-200 py-3;
}

</style>
