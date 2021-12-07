<template>
  <div class="about">
    <div class="container">
      <h1>This application was written to demo some of the basics of Vue.</h1>
      <h3>Examples of the following are included:</h3>
      <ul>
        <li>Bootstrapping a Vue App</li>
        <li>Vue Router</li>
        <li>Vuex State Management</li>
        <li>Tailwind CSS Styling</li>
        <li>Vue 3 Composition API</li>
      </ul>
    </div>
  </div>
</template>

<style lang="postcss" scoped>

.about {
  @apply bg-gray-200 py-3;
}

.container {
  @apply my-0 mx-auto max-w-screen-lg px-4 py-4;
}

h1 {
  @apply text-xl md:text-4xl font-bold text-red-900 pb-3 md:pb-6;
}

h3 {
  @apply text-gray-800 text-lg md:text-2xl pb-6 md:pb-10;
}

ul {
  @apply list-disc pl-8;
}

li {
  @apply text-lg md:text-2xl text-green-900;
}
</style>
