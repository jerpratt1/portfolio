<template>
  <div id="app">
    <nav>
      <a href="#bio-section">Bio </a>|
      <a href="#skills-section">Skills </a> |
      <a href="#project-section">Projects </a> |
      <a href="#contact-form">Contact </a> 
    </nav>
    <bio-section />
    <skills-section />
    <project-section />
    <contact-form />
  </div>
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
  methods: {
     scrollToElement() {
      const el = this.$refs.scrollToMe;

      if (el) {
        // Use el.scrollIntoView() to instantly scroll to the element
        el.scrollIntoView({behavior: 'smooth'});
    }
  }
  }
}
</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
