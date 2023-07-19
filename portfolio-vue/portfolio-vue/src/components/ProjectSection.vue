<template>
  <div id="full">
    <h1>Projects</h1>
    <div class="container">
    <div v-for="project in this.$store.state.projects" v-bind:key="project.id" class="card" style="background-image: url(`${project.image}`)">
        <a :href="project.link" target="_blank" class="link">{{project.title}}</a>
        <a class="img" :href="project.link" target="_blank"><img :src="project.image" :alt="project.alt" ></a>
        <ul class ="tools">
          <li>Tools: </li>
          <li v-for="tool in project.tools" v-bind:key="tool.id"> {{tool}} </li>
        </ul>
        <p class="desc">{{project.description}}</p>
    </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

#full{
  height: 50vh;
}

.link{
  grid-area: link;
}

.img{
  grid-area: img;
}

.desc{
  grid-area: desc;
}

.tools{
  grid-area: tools;
}

.card{
  display: grid;
  grid-template-areas: 
  "link img"
  "tools img"
  "tools img"
  "desc desc"
  ;
  width: 100%;
  height: 100%;
  margin: auto;
  border: gray solid 3px;
  border-radius: 1%;
  
}

/* .card:hover{
  background: gray;
} */

img{
    width: 100%;
    border-left: solid gray 3px;
    border-bottom: solid gray 3px;
    border-radius: 1%;
    
}

li{
  list-style: none;
  display: inline;
}

.container{
  display: grid;
  grid-template-columns: repeat(2, 40%);
  justify-content: center;
  column-gap: 10px;
  row-gap: 10px;
}


</style>