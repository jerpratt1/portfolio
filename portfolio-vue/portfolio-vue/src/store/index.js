import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

/* eslint-disable no-new */
const store = new Vuex.Store({
  plugins: [createPersistedState()],
  modules: {
  },
  state: {
    projects: [
      {
        title: "Chat-Bot",
      subtitle: "Educational Companion",
      description:
        "Chat-Bot intended to accompany an educational curriculum to provide students with a 24/7 responsive reference to answer questions, give feedback, and provide additional educational resources. Built in Vue.js on the front end, with Java and PostgreSQL on the back end. Additional use of RESTful API to supplement functionality.",
      image: "https://i.imgur.com/5kluCNX.jpg",
      alt: "Chat-Bot",
      link: "https://techatterbot.com",
      },

      {
        title: "Clubs Game Tracker",
      subtitle: "A Game of Skill & Chance",
      description:
        "",
      image: "https://i.imgur.com/5kluCNX.jpg",
      link: "https://beautiful-valkyrie-8c898a.netlify.app",
    }
    ],

    skills: ["Java", "JavaScript", "C#", "PostgreSQL", "Spring Boot", "RESTful API", "HTML", "CSS", "Vue.js", "React.js", "Responsive Design", "Git", "Unit Testing (JUnit)", "Integration Testing", "E/R diagrams", "Unix", "IntelliJ", "Visual Studio", "Visual Studio Code", "Postman", "Postgres"],
  }
})

export default store
