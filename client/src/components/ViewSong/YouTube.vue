<template>
  <panel title="YouTube Video">
    <youtube
    :video-id="youtubeId"
    :player-width="350"
    :player-height="200">
    </youtube>
  </panel>
</template>

<script>

export default {
  props: [
    'youtubeId'
  ]
}
</script>

<style scoped>

</style>
