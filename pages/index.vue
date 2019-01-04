<template>
  <div class="w-full h-full">
    <div class="absolute pin-r pin-b m-6">
      <nuxt-link to="/search-gif">
        <button
          class="bg-indigo hover:bg-indigo-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >Add your feeling</button>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  components: {}
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
</style>
