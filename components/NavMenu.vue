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
    padding: 1em;
    color: #dbdbdb;
    text-decoration: none;
    font-family: 'Open Sans', sans-serif;
    font-size: 18px;
  }
  a:hover {
    color: #a80e0f;
  }
</style>


