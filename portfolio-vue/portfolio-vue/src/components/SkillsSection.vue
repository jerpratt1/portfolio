<template>
  <div>
    <h1>Skills</h1>
    <ul>
      <li v-for="skill in this.$store.state.skills" v-bind:key="skill.id"> {{skill}}, </li>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
h2{
  display: flex;
  flex-direction: row;
}

li{
  list-style: none;
  display: inline;
}
</style>