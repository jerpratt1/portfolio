<template>
  <div>
    <div id="chat-container">
        <h2 id="chat-title">ChatTEr-Bot</h2>
        <h3 id="chat-sub-title">An Educational Companion</h3>
        <p id="chat-description">Chat-Bot to accompany an educational curriculum to provide students with a 24/7 responsive reference to answer questions, give feedback, and provide additional educational resources.</p>
<!--         <img id="chat-image" src="https://i.imgur.com/5kluCNX.jpg" alt="ChatTEr-Bot">
 -->        <p id="chat-role">Role: Full Stack Development</p>
        <p id="chat-tools">Tools Utilized: Java, JavaScript, HTML, CSS, Vue.JS, RESTful API, Spring , IntelliJ IDEA, Git Bash, Postman, PostgreSQL </p>
        <button id="chat-link"><a href="https://techatterbot.com">Check It Out</a></button>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
#chat-container{
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

#chat-title{
    grid-area: title;
}

#chat-sub-title{
    grid-area: sub-title;
 
}

#chat-description{
    grid-area: description;

}

#chat-image{
    grid-area: image;
    width: 100%;
}

#chat-role{
    grid-area: role;

}

#chat-tools{
    grid-area: tools;
}

#chat-link{
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