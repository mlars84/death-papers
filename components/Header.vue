<template>
  <div class="header">
    <h4>barbara devil</h4>
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
  width: 100%;
  height: 7vh;
  background-color: #1b2124; 
  border-bottom: 2px solid #1b2124; 
}


h4 {
  color: #a80e0f;
  font-size: 10em;
  margin-left: .2em;
}

</style>

