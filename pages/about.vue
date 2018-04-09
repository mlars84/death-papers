<template>
  <div class="container is-widescreen">
    <div class="column">
      <p>emily dantuma | vocals</p>
      <p>joe krawetz | bass</p>
      <p>matt larson | drums</p>
      <p>dan weiken | guitar</p>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {}
  }
}
</script>

<style lang="scss" scoped>

.container {
  margin-top: 5em;
  min-height: 40vh;
  height: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: $dark;
  color: $secondary;
  font-size: 30px;
}
  
// .column {
//   flex-direction: row;
//   padding-top: 2em;
// }

// .footer {
//   position: absolute;
//   background-color: $primary;
//   color: $dark;
//   width: 100%;
//   bottom: 0;
//   overflow: hidden;
//   padding: .5em;
// }

</style>

