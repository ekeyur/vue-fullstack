<template>
  <panel title="Tab">
    {{tab}}
  </panel>
</template>

<script>
import Panel from '@/components/Panel'
export default {
  props: [
    'tab'
  ],
  components: {
    Panel
  }
}
</script>

<style scoped>

</style>
