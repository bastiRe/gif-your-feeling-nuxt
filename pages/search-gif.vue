<template>
  <div class="w-full h-full">
    <div class="mx-auto w-64 my-4">
      <label class="block text-grey-darker text-sm font-bold mb-2" for="search">Search</label>
      <input
        class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
        id="search"
        type="text"
        placeholder="Search Gifs..."
        v-model="query"
      >
    </div>
    <div class="flex mx-auto w-full flex-wrap justify-around p-2">
      <div v-if="loading">Loading...</div>
      <div v-for="(image, index) in gifs" :key="index" class="p-2 w-48 h-48 cursor-pointer">
        <img :src="image" class="w-full h-full">
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  data: function() {
    return {
      query: ''
    }
  },
  computed: mapState({
    gifs: state => state.gifs.searchResult,
    loading: state => state.gifs.loading
  }),
  watch: {
    query() {
      this.$store.dispatch('gifs/search', this.query)
    }
  }
}
</script>
