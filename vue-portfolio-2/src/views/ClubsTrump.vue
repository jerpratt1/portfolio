<template>
  <div>
    <div id="clubs-container">
        <h2 id="clubs-title">Clubs Trump</h2>
        <h3 id="clubs-sub-title">A Game of Skill & Chance</h3>
        <p id="clubs-description">clubs-Bot to accompany an educational curriculum to provide students with a 24/7 responsive reference to answer questions, give feedback, and provide additional educational resources.</p>
<!--         <img id="clubs-image" src="https://i.imgur.com/5kluCNX.jpg" alt="clubsTEr-Bot">
 -->        <p id="clubs-role">Role: Front End Development</p>
        <p id="clubs-tools">Tools Utilized: JavaScript, HTML, CSS, Vue.JS Git Bash </p>
        <button id="clubs-link"><a target="blank_" href="https://beautiful-valkyrie-8c898a.netlify.app/">Check It Out</a></button>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
#clubs-container{
    display: grid;
    grid-template-areas: 
    "title title title title"
    "sub-title sub-title sub-title sub-title"
    "description description description description"
    "tools tools tools tools"
    "role . link ."
    ;
    width: 40vw;
    height: 50vh;
}

p{
    padding: 3px;
    text-align: left;
}

#clubs-title{
    grid-area: title;
}

#clubs-sub-title{
    grid-area: sub-title;
 
}

#clubs-description{
    grid-area: description;

}

#clubs-image{
    grid-area: image;
    width: 100%;
}

#clubs-role{
    grid-area: role;

}

#clubs-tools{
    grid-area: tools;
}

#clubs-link{
    grid-area: link;
    
}

button{
    width: 100%;
    height: 80%;
    border-radius: 10%;
    margin: auto;
    background: green;
}

</style>