<template>
    <div class="register">
        
            <div class="register_container">
            <form method="post" @submit.prevent="requestRegister">
                <InputForm inputId="user_id"
                            inputType="text"  
                            inputPlaceHolder="이메일 주소" 
                            v-model="userId" />
                
                <InputForm inputId="user_name"
                            inputType="text"  
                            inputPlaceHolder="성명" 
                            v-model="userName" />

                <InputForm inputId="user_name"
                            inputType="password"  
                            inputPlaceHolder="비밀번호" 
                            v-model="userPassword" />

                <button id="submit_btn" :disabled="isDisabled" value="가입하기" :class="submitButtonStyle">가입하기</button>
            </form>
        </div>
    </div>
</template>

<script>
import InputForm from '@/components/base/InputForm.vue';
import { register } from '@/api/userAPI.js';

export default {
    name: 'Register',
    data() {
        return {
            userId : '',
            userName: '',
            userPassword: '',
            doingRegister: false
        }
    },
    computed: {
        submitButtonStyle() {
            return this.noFilled === false ? 'submit_btn_abled' : 'submit_btn_disabled'
        },

        noFilled() {
        
            return this.userId === '' || 
                    this.userName === '' || 
                    this.userPassword === ''
        },

        isDisabled() {
            return this.noFilled || this.doingRegister
        }

    },
    components: {
        InputForm
    },
    methods: {
        requestRegister() {
            register(this.userId, this.userPassword, this.userName)
        }
    }
}
</script>

<style>

.register_container{
    width: 350px;
    height: 200px;
    margin: 0 auto;
    margin-top: 5%;
    text-align: center;
    background-color: #fff;
    border: 1px solid #e6e6e6;
    padding: 25px 25px 25px 25px;
    margin-bottom: 30px;
}

.submit_btn_abled{
  background: #3897f0;
  border-color: #3897f0;
  color: #fff;
  border-radius: 3px;
  border-style: solid;
  border-width: 2px;
  font-size: 14px;
  font-weight: 600;
  line-height: 28px;
  outline: none;
  width: 100%;
  margin-top: 10px;
  cursor: pointer;
  margin: 25px 25px 5px 5px;
}

.submit_btn_disabled{
  background: #D8D8D8;
  border-color: #D8D8D8;
  color: #fff;
  border-radius: 3px;
  border-style: solid;
  border-width: 2px;
  font-size: 14px;
  font-weight: 600;
  line-height: 28px;
  outline: none;
  width: 100%;
  margin-top: 10px;
  cursor: pointer;
  margin: 25px 25px 5px 5px;
}

</style>