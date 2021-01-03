<template>
    <div class="register">
        
            <div class="register_container">
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

            <button id="submit_btn" value="가입하기" class="submit_btn">가입하기</button>
        </div>
    </div>
</template>

<script>
import InputForm from '@/components/InputForm.vue';

export default {
    name: 'Register',
    data() {
        return {
            userId : '',
            userName: '',
            userPassword: ''
        }
    },
    components: {
        InputForm
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

.register_container .submit_btn{
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
</style>