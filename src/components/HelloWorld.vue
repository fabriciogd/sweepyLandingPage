<template>
  <div class="background">
    <v-img
      src="../assets/Grupo 10219@2x.png"
      class="boxtwocolors"
      max-height="2500"
      max-width="3000"
      id="blueandpink-image"
    ></v-img>
    <v-img
      src="../assets/box-simplicidade@2x.png"
      class="boxsimplicidade"
      max-height="2500"
      max-width="3000"
      id="blueandpink-image"
    ></v-img>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.background {
  background:  #3A4547 0% 0% no-repeat padding-box;
  opacity: 1;
}
.boxtwocolors {
  top: -190px;
  left: -190px;
  width: 1710px;
  height: 766px;
  background:  #3A4547;
  backdrop-filter: blur(46px) brightness(150%);
  opacity: 1;


}

.boxsimplicidade {
  top: 64px;
  left: 83px;
  width: 585px;
  height: 630px;
}
</style>
