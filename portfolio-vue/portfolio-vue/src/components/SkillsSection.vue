<template>
  <div>
    <h1>Skills</h1>
    <ul>
      <li v-for="language in this.$store.state.languages" v-bind:key="language.id"> {{language}} </li>
    </ul>
    <ul>
      <li v-for="framework in this.$store.state.frameworks" v-bind:key="framework.id"> {{framework}} </li>
    </ul>
    <ul>
      <li v-for="program in this.$store.state.programs" v-bind:key="program.id"> {{program}} </li>
    </ul>
    <ul>
      <li v-for="concept in this.$store.state.concepts" v-bind:key="concept.id"> {{concept}} </li>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
div{
  height: 50vh;
}

h2{
  display: flex;
  flex-direction: row;
}

li{
  list-style: none;
  display: inline;
}
</style>