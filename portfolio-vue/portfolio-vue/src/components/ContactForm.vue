<template>
  <div>
    <h1>Contact</h1>
    <a href="https://www.linkedin.com/in/jeremy-pratt/" target="_blank" >LinkedIn</a>
    <br>
    <a href="https://pdfhost.io/v/ecpUMpRXS_Resume_2023" target="_blank" >Resume</a>
    <!-- <iframe src="JEREMY_PRATT_RESUME_PDF.pdf" frameborder="0"></iframe> -->
    <p>You can also reach me via email by the form below:</p>
    <div class="contact-form">
      <form ref="form" @submit.prevent="sendEmail">
        <label>Name: </label>
        <input type="text" name="user_name" id="name">
        <label>Email: </label>
        <input type="email" name="user_email" id="email">
        <label>Message: </label>
        <input type="text" name="message" id="message">
        <!-- <input type="submit" value="Send"> -->
        <v-btn elevation="3" rounded small @click="sendEmail">submit</v-btn>
      </form>
    </div>
  </div>
</template>

<script>
import emailjs from '@emailjs/browser';
export default {
  methods: {
    sendEmail() {
      emailjs.sendForm('service_zxnt6r8', 'template_bftqtx8', this.$refs.form, 'CV5TWJRz-RCMoD8mK')
        .then((result) => {
            console.log('SUCCESS!', result.text);
            this.$refs.form.reset();
        }, (error) => {
            console.log('FAILED...', error.text);
        });
    }
  }

}
</script>

<style scoped>
div{
  height: 50vh;
}
</style>