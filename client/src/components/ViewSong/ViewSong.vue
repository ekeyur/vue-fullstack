<template>
  <div class="">
    <v-layout>
      <v-flex xs6 class="mb-3">
        <song-metadata :song="song"></song-metadata>
      </v-flex>
      <v-flex xs6 class="ml-3">
        <you-tube :youtubeId="song.youtubeId"></you-tube>
      </v-flex>

    </v-layout>
    <v-layout>
      <v-flex xs6>
        <lyrics :lyrics="song.lyrics"></lyrics>
      </v-flex>
      <v-flex xs6 class="ml-3">
        <tab :tab="song.tab"></tab>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import SongMetadata from '@/components/ViewSong/SongMetadata'
import YouTube from '@/components/ViewSong/YouTube'
import Lyrics from '@/components/ViewSong/Lyrics'
import Tab from '@/components/ViewSong/Tab'
import SongsService from '@/services/SongsService'
import Panel from '@/components/Panel'

export default {
  data () {
    return {
      song: null
    }
  },
  components: {
    Panel,
    SongMetadata,
    YouTube,
    Lyrics,
    Tab
  },
  async mounted () {
    const songId = this.$store.state.route.params.songId
    this.song = (await SongsService.show(songId)).data
    console.log(this.song)
  }
}
</script>

<style scoped>


textarea {
  width : 100%;
  font-family: monospace;
  border: none;
  overflow: auto;
  border-style: none;
  border-color: transparent;
}
</style>
