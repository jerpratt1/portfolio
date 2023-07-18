<template>
  <div>
    <h1>This is the projects</h1>
    <div v-for="project in this.$store.state.projects" v-bind:key="project.id">
        <a :href="project.link" target="_blank">{{project.title}}</a>
        <img :src="project.image" :alt="project.alt">
        <p>{{project.description}}</p>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
img{
    width: 15rem;
}
</style>