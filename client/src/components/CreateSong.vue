<template>
<div class="">
<v-layout>
  <v-flex xs4>
    <panel title="Song Metadata">
        <v-text-field label='Title' required :rules="[required]" v-model='song.title'>
        </v-text-field>
        <v-text-field required :rules="[required]" label='Artist' required v-model='song.artist'> </v-text-field>
        <v-text-field required :rules="[required]" label='Genre' v-model='song.genre'>
        </v-text-field>
        <v-text-field required :rules="[required]" label='Album' v-model='song.album'>
        </v-text-field>
        <v-text-field required :rules="[required]" label='Album Image Url' v-model='song.albumImageURL'>
        </v-text-field>
        <v-text-field required :rules="[required]" label='YouTube ID' v-model='song.youtubeId'>
        </v-text-field>
    </panel>
  </v-flex>
  <v-flex xs8>
    <panel title = "Song Structure" class="ml-3" >
      <v-text-field label='Tab' required :rules="[required]" v-model='song.tab' multi-line></v-text-field>
      <v-text-field label='Lyrics ID' required :rules="[required]" v-model='song.lyrics' multi-line></v-text-field>
    </panel>
    <span v-if="error">{{error}}</span>
    <v-btn dark class="cyan" @click="create">Create Song</v-btn>
  </v-flex>
</v-layout>
</div>
</template>

<script>

import SongsService from '@/services/SongsService'
export default {
  data () {
    return {
      song: {
        title: null,
        artist: null,
        genre: null,
        album: null,
        albumImageURL: null,
        youtubeId: null,
        lyrics: null,
        tab: null
      },
      required: (value) => !!value || 'Required',
      error: null
    }
  },
  methods: {
    async create () {
      this.error = null
      const areAllFieldsFilledIn = Object
        .keys(this.song)
        .every(key => !!this.song[key])
      if (!areAllFieldsFilledIn) {
        this.error = 'Please fill in all the required fields'
        return
      }
      try {
        await SongsService.post(this.song)
        this.$router.push({
          name: 'songs'
        })
      } catch (err) {
        console.log(err)
      }
    }
  },
  components: {

  }
}
</script>

<style scoped>

</style>
