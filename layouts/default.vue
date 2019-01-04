<template>
  <div class="bg-grey-lighter w-full h-full">
    <nav class="flex items-center justify-between flex-wrap bg-indigo p-6 shadow-md">
      <div class="flex items-center flex-no-shrink text-white mr-6">
        <span class="font-semibold text-xl tracking-tight">Gif your feeling</span>
      </div>
      <div v-if="username">
        <span
          class="inline-block px-4 leading-none text-white border-white mt-4 lg:mt-0"
        >Name: {{username}}</span>
      </div>
    </nav>
    <nuxt/>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: mapState({
    username: state => state.user.name
  }),
  middleware: 'loggedIn'
}
</script>

<style>
</style>
