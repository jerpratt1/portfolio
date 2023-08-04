<template>
  <div id="app">
    <div id="container">
      <h2 id="title">Jeremy Pratt</h2>
      <ul id="Info">
        <li><h2>Info</h2></li>
        <li> <router-link to="/">Home</router-link> </li>
        <li> <router-link to="/about">About</router-link> </li>
      </ul>
      <ul id="projects">
        <li><h2>Projects</h2></li>
        <li><router-link to="/project">project 1</router-link> </li>
        <li>Project name 2</li>
      </ul>
      <router-view id="box"/>
    </div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: lightgray;
}

body{
  background: rgb(54, 54, 54);
}

#container{
  display: grid;
  grid-template-areas: 
  "title title title title"
  "box box info projects"
  ;
  column-width: 50%;
  height: 90svh;
  width: 90vw;
  margin: auto;
  border: #2c3e50 solid 3px;
}

#title{
  grid-area: title;
  /* border: gray 3px solid; */
  height: 30vh;
  width: 90vw;
}

#info{
  grid-area: info;
  /* border: gray 3px solid; */
  width: 20vw;
  height: 50vh;
}

#projects{
  grid-area: projects;
  /* border: gray 3px solid; */
  width: 20vw;
  height: 50vh;
}

#box{
  grid-area: box;
  /* border: gray 3px solid; */
  width: 40vw;
  height: 50vh;
}

ul{
  display: block;
  list-style: none;
}

a{
  color: lightgray;
  text-decoration: none;
}

a:active{
color: blue;
}
</style>
