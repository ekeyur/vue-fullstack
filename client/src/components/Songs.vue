<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <panel title="Songs">
        <router-link slot="action" :to="{ name: 'songs-create'}">
          <v-btn  class="cyan accent-2" light small absolute right middle fab>
            <v-icon>add</v-icon>
          </v-btn>
        </router-link>
        <div v-for="song in songs" :key="song.id">
          {{song.title}} -
          {{song.artist}} -
          {{song.album}}
        </div>
      </panel>
    </v-flex>
  </v-layout>
</template>
<script>

import SongService from '@/services/SongsService'
import Panel from '@/components/Panel'

export default {
  components: {
    Panel
  },

  data () {
    return {
      songs: null
    }
  },

  async mounted () {
    this.songs = (await SongService.index()).data
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
