<template>
  <div>
    <h1>Howdy,</h1>
    <h2>My name is Jeremy Pratt</h2>
    
    <div id="carousel">
      <v-carousel height="50" hide-delimiter-background hide-delimiters cycle :show-arrows="false" :interval="2500">
        <v-carousel-item v-for="descriptor in this.$store.state.bio" v-bind:key="descriptor.id"> {{descriptor}} </v-carousel-item>
      </v-carousel>
    </div>
    
    
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  #carousel{
    width: 150px;
    margin: auto;
    background: red;
  }
</style>