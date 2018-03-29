<template>
  <div>
    <Header />
    <div class="container">
      <p>shows go here...</p>
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
  min-height: 92vh;
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: #261e1c;
  color: #f5f556;
  font-size: 30px;
  font-family: 'IM Fell DW Pica', serif;
}

</style>

