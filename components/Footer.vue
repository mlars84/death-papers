<template>
  <div class="footer">
      {{ footer }}
  </div>
</template>

<script>
export default {
  data () {
    return {
      footer: 'lust for the devil ©2018'
    }
  }
}
</script>

<style>
.footer { 
  font-family: 'Open Sans', sans-serif;
  background: #f5f556;
  color: #261e1c;
  width: 100%;
  min-height: 5vh;
  height: 50px;
  margin-top: -50px;
  padding: 1em 4em 0 1em;
  position: relative;
  text-align: right;
}

</style>

