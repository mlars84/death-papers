<template>
  <div class="container is-widescreen">
    <p>shows go here...</p>
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
  min-height: 98vh;
  height: 98%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: $dark;
  color: $secondary;
  font-size: 30px;
}

.footer {
  position: absolute;
  background-color: $primary;
  color: $dark;
  width: 100%;
  bottom: 0;
  overflow: hidden;
  padding: .5em;
}

</style>

