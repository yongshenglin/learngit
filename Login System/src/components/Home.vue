<template>
  <h1>
    {{this.username}}登录成功，这里是首页
    <button @click="handleExit">退出</button>
  </h1>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Home',
  computed: {
    ...mapState(['username'])
  },
  methods: {
    handleExit () {
      localStorage.removeItem('username')
      this.$router.push(' /login ')
    }
  },
  mounted () {
    console.log(this.$store.state)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
