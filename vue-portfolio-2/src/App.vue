<template>
  <div id="app">
    <div id="container">
      <nav id="nav">
        <span>Jeremy Pratt</span>
        <a href="https://www.linkedin.com/in/jeremy-pratt/" target="_blank"> linkedin </a>
        <a href="https://github.com/jerpratt1" target="_blank"> github </a>
        <a href="https://pdfhost.io/v/ecpUMpRXS_Resume_2023" target="_blank"> Resume </a>
        <router-link to="/contact"> contact </router-link>
      </nav>
      <div id="title">
        <h2>Welcome.</h2>
        <p>My name is Jeremy Pratt. Dedicated and adaptable Software Developer with a strong background in data analysis and financial compliance. Proactively seeking business-driven solutions that are efficient, effective, and user-friendly. Eager to join a team of fellow innovators as a Junior Developer, driving the creation of cutting-edge products that propel the company forward. </p>
      </div>
      <ul id="Info">
        <li><h2>Info</h2></li>
        <li> <router-link to="/">Home</router-link> </li>
        <li> <router-link to="/about">About</router-link> </li>
      </ul>
      <ul id="projects">
        <li><h2>Projects</h2></li>
        <li><router-link to="/chatbot">ChatTEr-Bot</router-link> </li>
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
  "nav nav nav nav"
  "title title title title"
  "box box info projects"
  ;
  column-width: 50%;
  height: 90svh;
  width: 90vw;
  margin: auto;
  /* border: #2c3e50 solid 3px; */
}

#nav{
  grid-area: nav;
  display: flex;
  align-content: space-around;
  justify-content: space-around;
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
  border: gray 3px solid;
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
