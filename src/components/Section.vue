<template>
<div id="subscribe-form" class="  hero-overlay">
   <div class="centered-container w-container">
      <h2 class="heading">COMING SOON</h2>
      <p class="paragraph">We are in the final preparatory stages of launching IndiaP2P.com and welcome you to join us in our mission to enable Indians to empower &amp; earn.<br>Write to us at <a target="_blank" href="mailto:info@indiap2p.com">info@indiap2p.com</a> for partnering with us and you'll hear from us soon!</p>
      <div class="w-form" id="myForm" v-on:submit.prevent="add()">
         <form id="email-form" name="email-form" data-name="Email Form" class="subscribe-form-flex">
            <div class="subscribe-form-input-wrapper"><label for="Subscriber-Email" id="subscribe-email">Email</label><input type="email"  v-model="Subscriber_Email" class="subscribe-form-input w-input" maxlength="256" name="Subscriber_Email" data-name="Subscriber Email" id="Subscriber_Email" required=""></div>
            <input type="submit" value="CONTACT" data-wait="Please wait..." class="submit-button w-button" >
         </form>
         <div class="w-form-done">
            <div>Thank you! Your submission has been received!</div>
         </div>
         <div class="w-form-fail">
            <div>Oops! Something went wrong while submitting the form.</div>
         </div>
      </div>
   </div>
</div>
</template>
<script>
import axios from 'axios'

export default {
    data:() =>{
    return{
     Subscriber_Email: null
     
    }
    },
    methods: {
        add: function() {
          
          axios(
          { 
            method: "POST" ,
            url   : "http://localhost:3000/email",
            data: {
            
                      Subscriber_Email:  this.Subscriber_Email
                     
                      
            } 
                  
          }) 
          .then((result)=>{
          
          console.log(result.data);
          this.response = result.data;
        })
         alert('Thank you! Your submission has been received!')
         this.Subscriber_Email = " "
        }
    }
    
}
</script>
<style scoped>
.submit-button {
    margin-left: 10px;
    margin-bottom: 10px;
}

</style>
