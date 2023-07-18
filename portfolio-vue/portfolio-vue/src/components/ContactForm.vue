<template>
  <div>
    <h1>Contact</h1>
    <a href="https://www.linkedin.com/in/jeremy-pratt/" target="_blank" >LinkedIn</a>
    <br>
    <a href="public\Jeremy_Pratt_Resume_PDF.pdf" download>Resume</a>
    <p>You can also reach me via email by the form below:</p>
    <div class="contact-form">
      <form ref="form" @submit.prevent="sendEmail">
        <label>Name: </label>
        <input type="text" name="user_name" id="name">
        <label>Email: </label>
        <input type="email" name="user_email" id="email">
        <label>Message: </label>
        <input type="text" name="message" id="message">
        <input type="submit" value="Send">
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

</style>