<template>
  <div class="nav">
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <a class="navbar-item title is-1" href="/" style="font-family: 'Shrikhand', cursive;">Lust For The Devil</a>
          <button class="button navbar-burger">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        <div class="navbar-menu">
          <div class="navbar-end">
            <nuxt-link class="navbar-item" to="/">home <span class="tic">|</span></nuxt-link>
            <nuxt-link class="navbar-item" to="/about">about <span class="tic">|</span></nuxt-link>
            <nuxt-link class="navbar-item" to="/shows">shows</nuxt-link>
          </div>
        </div>
      </nav>
  </div>
</template>

<script>
export default {
  data () {
      return {}
  }
}
</script>

<style lang="scss" scoped>

.nav {
  background-color: $dark;
}

.navbar-item {
  font-size: 40px;
}

.tic {
  color: white;
  padding-left: .3em;
}
.tic:hover {
  color: white;
}
</style>


