<template>
  <div class="w-full h-full">
    <div class="flex w-full flex-wrap p-4">
      <div v-if="loading">Loading...</div>
      <feeling v-for="(feeling, index) in feelings" :key="index" v-bind:feeling="feeling"/>
    </div>
    <add-button/>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Feeling from '~/components/Feeling'
import AddButton from '~/components/AddButton'

export default {
  components: {
    feeling: Feeling,
    'add-button': AddButton
  },
  computed: mapState({
    feelings: state => state.database.feelings,
    loading: state => state.database.loading
  }),
  created() {
    this.$store.dispatch('database/downloadFeelings')
  },
  head() {
    return {
      title: 'Gif your feeling'
    }
  }
}
</script>
