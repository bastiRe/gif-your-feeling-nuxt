<template>
  <div class="flex w-full h-full items-center justify-center">
    <div class="w-full max-w-xs self-center">
      <form v-on:submit.prevent="setName" class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div class="mb-4">
          <label class="block text-grey-darker text-sm font-bold mb-2" for="username">Your name</label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Name"
            v-model="name"
          >
        </div>
        <div class="flex items-center justify-center">
          <button
            class="bg-indigo hover:bg-indigo-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >Save</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: ''
    }
  },
  methods: {
    setName() {
      if (this.name.length > 0) {
        this.$store.commit('user/setName', this.name)
      }
    }
  }
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
</style>