<template>
  Shopping
</template>

<script>
import { fetchProducts } from '@/utils/data';

export default {
  setup() {

    fetchProducts();

    return {

    }
  }
}
</script>
