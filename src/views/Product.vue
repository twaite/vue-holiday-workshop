<template>
  <div class="container">
    <div class="desktop">
      <img :src="`/product-images/${product.image}`" />
      <div class="details">
        <h1 class="title">{{product.name}}</h1>
        <h2 class="price">{{formatCurrency(product.price)}}</h2>
        <p>{{product.description}} Chimney wreath ivy partridge celebration Saint Nicholas snow, card gingerbread Rudolph merry. Vixen wintry nutcracker Blitzen holly tree nutcracker sleigh bells, hug bells fireplace Donner North Pole winter. Coal december package pageant joy singing evergreen Kris Kringle. Comet evergreen angel jingle bells, candy cane mittens happy yule ribbon goodwill Christmas tree trimming scarf elves. Give cookie holly jingle bells, gift goose happy goose chestnuts candy cane.</p>
        <app-button variant="primary">Add to Cart</app-button>
      </div>
    </div>
    <div class="mobile">
        <h1 class="title">{{product.name}}</h1>
        <h2 class="price">{{formatCurrency(product.price)}}</h2>
        <img :src="`/product-images/${product.image}`" />
        <app-button variant="primary">Add to Cart</app-button>
        <p>
          {{product.description}} Chimney wreath ivy partridge celebration Saint Nicholas snow, card gingerbread Rudolph merry. Vixen wintry nutcracker Blitzen holly tree nutcracker sleigh bells, hug bells fireplace Donner North Pole winter. Coal december package pageant joy singing evergreen Kris Kringle. Comet evergreen angel jingle bells, candy cane mittens happy yule ribbon goodwill Christmas tree trimming scarf elves. Give cookie holly jingle bells, gift goose happy goose chestnuts candy cane.
        </p>
    </div>
  </div>
</template>

<script>
import { ref, watchEffect } from 'vue';
import { useRoute } from 'vue-router';

import { formatCurrency } from '@/utils/currency';
import { fetchProductById } from '@/utils/data';
import AppButton from '@/components/AppButton';

export default {
  components: { AppButton },
  name: 'Product',
  setup() {
    const route = useRoute();
    const product = ref(null);
    const isReady = ref(false);

    watchEffect(async () => {
      product.value = await fetchProductById(Number(route.params.id));
      isReady.value = true;
    })

    return {
      product,
      isReady,
      formatCurrency
    }
  }
}
</script>

<style>
.container {
  @apply max-w-screen-lg pt-6;
  margin: 0 auto;
}

.desktop {
  @apply hidden md:flex;
}

.desktop > img {
  @apply h-full w-1/2 object-cover object-center mr-3;
  height: 450px;
}

img {
  @apply object-cover object-center;
}

.mobile {
  @apply flex flex-col md:hidden px-4;
}

.mobile > button {
  @apply my-3;
}

.mobile > img {
  @apply max-h-48 w-full;
},

.details {
  @apply w-1/2 pl-3 flex flex-col;
}

.title {
  @apply text-xl md:text-3xl text-red-900;
  font-family: 'Satisfy', cursive;
}

.price {
  @apply text-lg md:text-xl text-green-900 py-2;
}

p {
  @apply flex-grow pb-3;
}
</style>
