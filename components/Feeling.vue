<template>
  <nuxt-link
    tag="div"
    v-bind:to="`/users/${feeling.userId}`"
    class="w-48 rounded overflow-hidden shadow-lg m-4 cursor-pointer"
  >
    <div class="w-48 h-48">
      <img :src="feeling.gifUrl" class="w-full h-full">
    </div>
    <div class="p-2">
      <span class="font-semibold text-xl">{{feeling.userName}}</span>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: ['feeling']
}
</script>
