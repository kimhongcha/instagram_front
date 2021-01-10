<template>
  <!-- 로그인 폼 -->
            <div class="form">
              <h1 class="sprite_insta_big_logo title"></h1>
              
              <form method="post" @submit.prevent="requestLogin">
                
                <div class="login_user_name">
                  <input type="text" id="user_name" placeholder="사용자 이름 또는 이메일" v-model ="userId"></input>
                  <p v-show="isIdValid">
                      아이디를 입력해주세요.
                  </p>
                </div>
                
                <div class="login_user_password">
                  <input type="password" id="user_password" placeholder="비밀번호" v-model ="userPassword"></input>
                  <p v-show="isPasswordValid">
                      비밀번호를 입력해주세요.
                  </p>
                </div>

                <button id="submit_btn" value="로그인" class="submit_btn">로그인</button>
                
              </form>

                <!-- <hr class="line"></hr>
                
                <button id="login_with_kakao" value="Kakao로 로그인하기" class="login_with_kakao">KaKao로 로그인하기</button> -->
            </div>
</template>

<script>
import login from '@/api/userAPI.js';

export default {
    data() {
        return {
            userId : '',
            userPassword: '',
            isIdValid: false,
            isPasswordValid: false
        }
    },
    methods: {
        requestLogin: async function() {
            this.isIdValid = false
            this.isPasswordValid = false

            if(this.userId === '') {
                this.isIdValid = true
                
                return
            }    

            this.isIdValid = false

            if(this.userPassword === '') {
                this.isPasswordValid = true
                
                return
            }

            this.isPasswordValid = false

            console.log('ID = ' + this.userId + ' Password = ' + this.userPassword)

            await login(this.userId, this.userPassword)
        }
    }
}
</script>

<style scoped>


.form_container .form{
  text-align: center;
  background-color: #fff;
  border: 1px solid #e6e6e6;
  padding: 0 40px 25px 40px;
  margin-bottom: 30px;
}


.form .title {
  overflow: hidden;
  text-indent: 110%;
  margin: 22px auto 8px;
}


.form .line{
  border: 0.5px solid #bbbbbb;
}

.form .line2{
  border: 0.5px solid #bbbbbb;
}



.login_user_gender{
  float:left;
  font-size:13px;
  color:#5b5b5b;
}

.login_user_email>input{
  width: 100%;
  background: 0 0;
  background: #f9f9f9;
  border: 1px solid #ebebeb;
  border-radius: 3px;
  box-sizing: border-box;
  color: #444444;
  font-size: 13px;
  padding: 7px 8px 7px;
}

.login_user_password>input{
  width: 100%;
  background: 0 0;
  background: #f9f9f9;
  border: 1px solid #ebebeb;
  border-radius: 3px;
  box-sizing: border-box;
  color: #444444;
  font-size: 13px;
  padding: 7px 8px 7px;
}


.login_user_name>input{
  width: 100%;
  background: 0 0;
  background: #f9f9f9;
  border: 1px solid #ebebeb;
  border-radius: 3px;
  box-sizing: border-box;
  color: #444444;
  font-size: 13px;
  padding: 7px 8px 7px;
}

.login_user_name > p{
  text-align: left;
  color: red;
  font-size: 12px;
}

.login_user_password > p{
  text-align: left;
  color: red;
  font-size: 12px;
}

.login_user_birth>input{
  width: 100%;
  background: 0 0;
  background: #f9f9f9;
  border: 1px solid #ebebeb;
  border-radius: 3px;
  box-sizing: border-box;
  color: #444444;
  font-size: 13px;
  padding: 7px 8px 7px;
}

.form div{
  margin-bottom: 10px;
}

.form .login_with_kakao{
  background: #fde039;
  border-color: #fde039;
  color: #fff;
  border-radius: 3px;
  border-style: solid;
  border-width: 1px;
  font-size: 14px;
  font-weight: 600;
  line-height: 28px;
  outline: none;
  width: 100%;
  padding: 0;
  margin-top: 10px;
  cursor: pointer;
}


.form .login_with_E-mail{
  background: #58ff66;
  border-color: #58ff66;
  color: #fff;
  border-radius: 3px;
  border-style: solid;
  border-width: 1px;
  font-size: 14px;
  font-weight: 600;
  line-height: 28px;
  outline: none;
  width: 100%;
  padding: 0;
  margin-top: 10px;
  cursor: pointer;
}

.form .submit_btn{
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
  padding: 0;
  margin-top: 10px;
  cursor: pointer;
}

</style>