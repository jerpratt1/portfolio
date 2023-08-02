<template>
  <v-app id="app">
     <nav>
      <a href="#bio-section">Bio </a>|
      <a href="#skills-section">Skills </a> |
      <a href="#project-section">Projects </a> |
      <a href="#contact-form">Contact </a> 
    </nav>

    <v-main id="main">
      
    <bio-section id="bio" />
    <skills-section id="skills" />
    <project-section id="projects" />
    <contact-form id="contact" />
    </v-main>
  </v-app>
</template>

<script>
import BioSection from './components/BioSection.vue'
import ContactForm from './components/ContactForm.vue'
import ProjectSection from './components/ProjectSection.vue'
import SkillsSection from './components/SkillsSection.vue'


export default {
  name: 'App',

  components: {
    BioSection, SkillsSection, ProjectSection,
    ContactForm  
  },

  data: () => ({
    //
  }),
};
</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#main{
  display: grid;
  grid-template-areas:
  ". skills skills"
  ". skills skills"
  "projects projects projects"
  "contact contact contact"
  
  ;
}

#bio{
  grid-area: bio;
  height: 100vh;
}

#skills{
  grid-area: skills;
  height: 100vh;
}

#projects{
  grid-area: projects;
  height: 100vh;
}

#contact{
  grid-area: contact;
  height: 100vh;
}
</style>
