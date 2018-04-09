<template>
  <div>
    <Header />
    <div class="main">
      <nuxt/>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header'
import Footer from '../components/Footer'

export default {
  components: {
    Header, 
    Footer
  },
  data: function () {
    return {}
  }
}
</script>


<style lang="scss">

html {
  font-family: $family-primary;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  background-color: $dark !important;
}

.main {
//   min-height: 98vh;
//   height: 98%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: $dark;
  color: $dark;
  font-size: 30px;
  font-family: 'IM Fell DW Pica', serif;
}

// .footer {
//   position: absolute;
//   background-color: $primary;
//   color: $secondary;
//   width: 100%;
//   bottom: 0;
//   overflow: hidden;
//   padding: .5em;
//   margin-top: 0;
// }

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}
</style>
