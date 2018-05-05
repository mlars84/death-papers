<template>
  <div class="container is-widescreen">
    <div class="column">
      <p>Contact Us</p>
      <div class="field">
        <div class="control">
            <input v-model="userContact.name" class="input is-primary" type="text" placeholder="Name">
        </div>
        <div class="control">
            <input v-model="userContact.email" class="input is-primary" type="email" placeholder="Email">
        </div>
        <div class="control">
            <input v-model="userContact.message" class="input is-primary is-large" type="text" placeholder="Message">
        </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      userContact: {
        name: '',
        email: '',
        message: ''
      }
    }
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

