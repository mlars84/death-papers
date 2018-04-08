<template>
  <div class="hero">
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

<style lang="scss">

.header {
  font-family: 'Shrikhand', cursive;
  background: $primary;
  color: $secondary;
  width: 100%;
  border-bottom: 2px solid #1b2124; 
}

</style>

