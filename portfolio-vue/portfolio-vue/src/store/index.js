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
    bio: ["Full Stack Developer", "Advocate for Others", "Film Enthusiast"],
    projects: [
      {
        title: "Chat-Bot",
      subtitle: "Educational Companion",
      description:
        "Educational curriculum companion to provide students with a 24/7 responsive reference to answer questions, give feedback, and provide additional educational resources.",
      tools:["Java", "JavaScript", "HTML", "CSS", "SQL", "Vue.JS", "RESTful API", "SpringBoot" , "IntelliJ IDEA", "Git Bash", "Postman", "Visual Studio Code", "pgAdmin"],
      image: "https://i.imgur.com/5kluCNX.jpg",
      alt: "Chat-Bot",
      link: "https://techatterbot.com",
      },

      {
      title: "Clubs Game Tracker",
      subtitle: "A Game of Skill & Chance",
      description: "Web based tracking and score keeping for the card game Clubs Trump.",
      tools:["JavaScript", "HTML", "CSS",  "Vue.JS", "Git Bash", "Visual Studio Code"],
      image: "https://i.imgur.com/bcNiEXM.png",
      alt: "Clubs-Trump",
      link: "https://beautiful-valkyrie-8c898a.netlify.app",
      },
      {
        title: "Clubs Game Tracker",
        subtitle: "A Game of Skill & Chance",
        description: "Web based tracking and score keeping for the card game Clubs Trump.",
        tools:["JavaScript", "HTML", "CSS",  "Vue.JS", "Git Bash", "Visual Studio Code"],
        image: "https://i.imgur.com/bcNiEXM.png",
        alt: "Clubs-Trump",
        link: "https://beautiful-valkyrie-8c898a.netlify.app",
        },
        
    ],

    skills: ["Java", "JavaScript", "C#", "PostgreSQL", "Spring Boot", "RESTful API", "HTML", "CSS", "Vue.js", "React.js", "Responsive Design", "Git", "Unit Testing (JUnit)", "Integration Testing", "E/R diagrams", "Unix", "IntelliJ", "Visual Studio", "Visual Studio Code", "Postman", "Postgres"],
    languages: ["Java", "JavaScript", "C#", "SQL", "HTML", "CSS"],
    frameworks: ["Vue.js", "React.js"],
    programs: ["IntelliJ", "Visual Studio", "Visual Studio Code", "Postman", "Postgres"],
    concepts: ["Spring Boot", "RESTful API", "Responsive Design", "Unit Testing (JUnit)", "Integration Testing", "E/R diagrams", "GIT", "Unix" ],
  }
})

export default store
