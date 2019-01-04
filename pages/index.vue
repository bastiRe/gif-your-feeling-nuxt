<template>
  <div class="w-full h-full">
    <div class="flex mx-auto w-full flex-wrap justify-around p-2">
      <div v-if="loading">Loading...</div>
      <div v-for="(feeling, index) in feelings" :key="index" class="p-2 w-48 h-48 cursor-pointer">
        <img :src="feeling.gifUrl" class="w-full h-full">
      </div>
    </div>
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
import { mapState } from 'vuex'
export default {
  computed: mapState({
    feelings: state => state.database.feelings,
    loading: state => state.database.loading
  }),
  created() {
    this.$store.dispatch('database/downloadFeelings')
  }
}
</script>
