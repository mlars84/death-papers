<template>
  <div class="footer">
      {{ footer }}
  </div>
</template>

<script>
export default {
  data () {
    return {
      footer: 'Death Papers ©2018'
    }
  }
}
</script>

<style>
.footer { 
  font-family: 'Open Sans', sans-serif;
  color: #f8e773; 
  width: 100%;
  min-height: 10vh;
  height: 50px;
  margin-top: -50px;
  text-align: center;
}

</style>

