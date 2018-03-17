<template>
  <div class="body">
    <!-- <h1>death papers hails from st paul mn</h1>
    <br>
    <p>it is a cold dark place</p>
    <br>
    <p>and nothing grows there</p> -->
    <div class="content">
      <h1>death papers hails from st paul mn</h1>
      <br>
      <p>it is a cold dark place</p>
      <br>
      <p>and nothing grows there</p>
    </div>
    <video class="animated fadeOutDown" autoplay muted loop id="myVideo">
      <source src="../assets/Dark Clouds video background  ___Free___.mp4" type="video/mp4">
    </video>
  </div>
</template>

<script>
export default {
  data () {
      return {}
  }
}
</script>

<style>

#myVideo {
  /* position: fixed; */
  /* right: 0; */
  /* bottom: 0; */
  width: 80%; 
  height: 80%;
}

.body {
  margin-top: 3em;
  padding: 8em 16em;
  /* background: #dbdbdb; */
  font-family: 'Open Sans', sans-serif;
}

.content {
  /* position: fixed;
  bottom: 0; */
  padding-top: .5em;
  /* background: rgba(0, 0, 0, 0.5); */
  color: #dbdbdb;
  width: 100%;
  padding: 20px;
  margin-right: 10px;
}

/* Style the button used to pause/play the video */
#myBtn {
  width: 200px;
  font-size: 18px;
  padding: 10px;
  border: none;
  background: #000;
  color: #fff;
  cursor: pointer;
}

#myBtn:hover {
  background: #ddd;
  color: black;
}

</style>

