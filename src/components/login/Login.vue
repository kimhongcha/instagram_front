<template>
       <div id="main_container">
         <div class="form_container">
           
            <LoginForm />
            
            <RegisterButton />
           
          </div>
       </div>
</template>


<script>

import LoginForm from '@/components/login/LoginForm.vue';
import RegisterButton from '@/components/login/RegisterButton.vue';

export default {
  name: 'Login',
  props: {
    msg: String
  },
  components: {
    RegisterButton,
    LoginForm
  },
  methods: { 


  } 

}
</script>

<style scoped>

.form_container{
  width: 350px;
  height: 350px;
  margin: 0 auto;
  margin-top: 5%;
}

</style>