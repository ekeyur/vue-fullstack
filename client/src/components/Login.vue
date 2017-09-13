<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <div class="white elevation-2">
        <panel title="Login">
          <v-flex>
            <v-text-field type='email' label='Email' v-model='email'></v-text-field>
          </v-flex>
          <v-flex>
            <v-text-field type='password' label='Password' v-model='password'></v-text-field>
          </v-flex>
          <div class="error" v-html="error"></div>
          <v-btn dark class="cyan" @click='login'>login</v-btn>
        </panel>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'

export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },

  methods: {
    async login () {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
        this.$router.push({
          name: 'songs'
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  },

  components: {

  }
}
</script>
<style scoped>

</style>
