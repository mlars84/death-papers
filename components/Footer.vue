<template>
  <div>
    <footer class="footer">
      <div>
        <div class="content has-text-right">
          <p>
          {{ footer }} 
          </p>
        </div>
      </div>
      </footer>
    </div> 
</template>

<script>
export default {
  data () {
    return {
      footer: '©2018 lust for the devil'
    }
  }
}
</script>

<style lang="scss" scoped>

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

