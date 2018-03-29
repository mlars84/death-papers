<template>
  <div class="header">
    <h4>lust for the devil</h4>
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

<style>
.header {
  font-family: 'UnifrakturMaguntia', cursive;
  width: 100%;
  height: 7vh;
  background-color: #f5f556; 
  border-bottom: 2px solid #1b2124; 
}


h4 {
  color: #f21d26;
  font-size: 10em;
  margin-left: .2em;
}

</style>

