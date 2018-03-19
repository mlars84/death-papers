<template>
<div>
  <Header />
  <section class="container">
    <Body />
  </section>
  <Footer />
</div>
</template>

<script>
import Header from '../components/Header'
import Footer from '../components/Footer'
import Body from '../components/Body'

export default {
  components: {
    Header, 
    Footer,
    Body
  },
  data () {
    return {}
  }
}
</script>

<style>
.container {
  min-height: 92vh;
  /* height: 90%; */
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: #1b2124;
}

.title {
  /* font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; 1 */
  font-family: 'Open Sans', sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-family: 'Open Sans', sans-serif;
  font-weight: 300;
  font-size: 42px;
  color: #f8e773;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
