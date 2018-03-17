<template>
  <div>
    <Header />
    <div class="container">
      <p>Bio goes here...</p>
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
  data () {
    return {}
  }
}
</script>

<style>

.container {
  min-height: 100vh;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: #1b2124;
  color: #f8e773;
  font-size: 50px;
  font-family: 'Open Sans', sans-serif;
}

</style>

