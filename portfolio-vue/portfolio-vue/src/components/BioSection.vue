<template>
  <div class="container">
    <h1 id="greeting">Howdy,</h1>
    <h2 id="intro">My name is Jeremy Pratt</h2>
    
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
  .container{
    display: grid;
    grid-template-areas: 
    "greeting greeting . ."
    "intro intro intro ."
    "intro intro intro ."
    "carousel carousel carousel ."
    ;
    height: 25vh;
  }

  #greeting{
    grid-area: greeting;
  }

  #intro{
    grid-area: intro;
  }

  #carousel{
    grid-area: carousel;
    width: 150px;
    margin: auto;
    background: red;
  }
</style>