<template>
  <panel title = "Lyrics">
    <textarea
      readonly
      v-model="lyrics"
      ></textarea>
  </panel>
</template>

<script>
import Panel from '@/components/Panel'
export default {
  props: [
    'lyrics'
  ],
  components: {
    Panel
  }
}
</script>

<style scoped>

</style>
