<template>
  <div class="header">
    <h4>Death Papers</h4>
    <NavMenu />
  </div>
</template>

<script>
import NavMenu from './NavMenu'

export default {
  components: {
    NavMenu
  },
  data () {
    return {}
  }
}
</script>

<style lang="stylus">
.header
  width 100%
  height 7vh
  background-color #1b2124 
  padding-top 1em
  border-bottom 2px solid #1b2124 

h4
  color #dbdbdb
  padding 1em
  font-size 10em

</style>

