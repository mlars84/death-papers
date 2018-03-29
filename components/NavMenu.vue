<template>
  <nav class="links">
    <router-link link to="/">home</router-link>  
    <router-link to="/about/">about</router-link>
    <router-link to="/shows/">shows</router-link>
  </nav>
</template>

<script>
export default {
  data () {
      return {}
  }
}
</script>

<style>
  .links {
    margin-left: 80vw;
  }
  a {
    font-family: 'Roboto', sans-serif;
    padding: 1em;
    color: #f5f556;
    text-decoration: none;
    font-size: 18px;
  }
  a:hover {
    color: #f21d26;
  }
</style>


