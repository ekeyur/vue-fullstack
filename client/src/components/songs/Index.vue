<template>
  <v-layout >
    <v-flex xs6>
      <songs-bookmarks />
    </v-flex>
    <v-flex xs6>
      <songs-search-panel />
      <songs-panel class="mt-2"/>
    </v-flex>
  </v-layout>
</template>
<script>

import SongService from '@/services/SongsService'
import SongsPanel from './SongsPanel'
import SongsSearchPanel from './SongsSearchPanel'
import SongsBookmarks from './SongsBookmarks'

export default {
  components: {
    SongsPanel,
    SongsSearchPanel,
    SongsBookmarks
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
  .song {
    padding: 20px;
    height: 330px;
    overflow: hidden;
  }
  .song-title{
    font-size: 30px;
  }
  .song-artist{
    font-size: 24px;
  }
  .song-genre{
    font-size: 18px;
  }

  .album-image{
    width: 70%;
    margin: 0 auto;
  }
</style>
