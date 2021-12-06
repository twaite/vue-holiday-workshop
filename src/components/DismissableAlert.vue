<template>
  <div class="alert" v-if="!dismissed">
    <h3>
      Free shipping on orders $100+
    </h3>
    <CloseIcon @click="dismiss"/>
  </div>
</template>

<script>
import { ref } from 'vue';

import CloseIcon from '@/icons/CloseIcon';

export default {
  components: {
    CloseIcon
  },
  setup() {
    const dismissed = ref(false);

    const dismiss = () => dismissed.value = true;

    return {
      dismissed,
      dismiss
    }
  }
}
</script>

<style scoped>
.alert {
  @apply bg-green-900 flex text-white py-1;
}

h3 {
  @apply flex-grow text-center;
}

svg {
  @apply cursor-pointer;
}
</style>
