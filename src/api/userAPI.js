import axios from 'axios'
import { url } from './url.js'

axios.defaults.baseURL = url

async function login(id, password) {

  const params = {
        'userId' : id,
        'userPw' : password,
    }
  console.log(url + ' ' + params.userId + ' ' + params.userPw)

  await axios.post('/login', params, {
    header: {
      "content-type": "application/json"
    }
  }) 
  .then( res => {
    console.log(res)

    if(res['data'] === "Y") {
      console.log('로그인 성공')
    }
    else {
      console.log('로그인 실패')
    }
  })
  .catch(function (error) {
    if (error.response) {
      // 요청이 이루어졌으며 서버가 2xx의 범위를 벗어나는 상태 코드로 응답했습니다.
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    }
    else if (error.request) {
      // 요청이 이루어 졌으나 응답을 받지 못했습니다.
      // `error.request`는 브라우저의 XMLHttpRequest 인스턴스 또는
      // Node.js의 http.ClientRequest 인스턴스입니다.
      console.log(error.request);
    }
    else {
      // 오류를 발생시킨 요청을 설정하는 중에 문제가 발생했습니다.
      console.log('Error', error.message);
    }
  })
                                   
}

async function register(id, password, name) {
  const params = {
    'userId' : id,
    'userPw' : password,
    'userName' : name 
  }

  await axios.post('/login/join', params, {
    header: {
      "content-type": "application/json"
    }
  }) 
  .then( res => {
    console.log(res)

    if(res['data'] === "Y") {
      console.log('회원가입 성공')
    }
    else {
      console.log('회원가입 실패')
    }
  })
  .catch(function (error) {
    if (error.response) {
      // 요청이 이루어졌으며 서버가 2xx의 범위를 벗어나는 상태 코드로 응답했습니다.
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    }
    else if (error.request) {
      // 요청이 이루어 졌으나 응답을 받지 못했습니다.
      // `error.request`는 브라우저의 XMLHttpRequest 인스턴스 또는
      // Node.js의 http.ClientRequest 인스턴스입니다.
      console.log(error.request);
    }
    else {
      // 오류를 발생시킨 요청을 설정하는 중에 문제가 발생했습니다.
      console.log('Error', error.message);
    }
  })

}
export { login, register  }