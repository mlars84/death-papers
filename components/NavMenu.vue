<template>
  <nav class="links">
    <router-link link to="/">Home</router-link>  
    <router-link to="/about/">About</router-link>
    <router-link to="/bio/">Bio</router-link>
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


