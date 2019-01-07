<template>
  <div class="w-full h-full">
    <div class="flex w-full flex-wrap p-4">
      <div v-if="loading">Loading...</div>
      <div
        v-for="(feeling, index) in feelings"
        :key="index"
        class="w-48 rounded overflow-hidden shadow-lg m-4"
      >
        <div class="w-48 h-48">
          <img :src="feeling.gifUrl" class="w-full h-full">
        </div>
        <div class="p-2">
          <div class="font-bold text-xl">{{feeling.userName}}</div>
        </div>
      </div>
    </div>
    <div class="fixed pin-r pin-b m-6">
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
