<template>
  <v-app id="app">
     <nav>
      <a href="#bio-section">Bio </a>|
      <a href="#skills-section">Skills </a> |
      <a href="#project-section">Projects </a> |
      <a href="#contact-form">Contact </a> 
    </nav>

    <v-main>
      
    <bio-section />
    <skills-section />
    <project-section />
    <contact-form />
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
</style>
