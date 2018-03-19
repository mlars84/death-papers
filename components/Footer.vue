<template>
  <div class="footer">
      {{ footer }}
  </div>
</template>

<script>
export default {
  data () {
    return {
      footer: 'death papers ©2018'
    }
  }
}
</script>

<style>
.footer { 
  font-family: 'Open Sans', sans-serif;
  color: #dbdbdb; 
  background: black;
  width: 100%;
  min-height: 5vh;
  height: 50px;
  margin-top: -50px;
  padding: 1em 0 0 1em;
  position: relative;
  /* text-align: center; */
}

</style>

