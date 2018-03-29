<template>
  <div>
    <Header />
    <div class="container">
      <div class="column">
        <p>emily dantuma | vocals</p>
        <p>joe krawetz | bass</p>
        <p>matt larson | drums</p>
        <p>dan weiken | guitar</p>
      </div>
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
  
.column {
  flex-direction: row;
  padding-top: 2em;
}

p:hover {
  color: #f21d26;
}

</style>

