// search是从问号？开始的URL（查询部分）
var urlQuery = $DeSerialize(window.location.search.slice(1));

var navToSign = document.getElementById('nav-to-sign');

// 控制翻转 至 login / sign
// if (urlQuery && urlQuery.type === 'sign') {
//   navToSign.checked = true;
// }

//login按钮 login表单
var loginBtn = document.getElementsByClassName('login-button')[0]
var loginForm = document.getElementsByClassName('login-form')[0]
//绑定监听
loginBtn.addEventListener('click', login, false)

//sign按钮 login表单
var signBtn = document.getElementsByClassName('sign-button')[0]
var signForm = document.getElementsByClassName('sign-form')[0]
//绑定监听
signBtn.addEventListener('click', sign, false)

function login() {
  var loginFormData = $GetFormDataByName(logform, ['username', 'password'])
  console.log(loginFormData);
  //如果有值得话
  if(loginFormData) {
    $Ajax({
      method: 'POST',
      url: '/api/login',
      data: loginFormData,
      success(data) {
        try {
          // data = JSON.parse(data)[0];
          // console.log(data);
          //创建cookie，并设置cookie的有效期为7天，路径为网站的根目录
          $.cookie('username',loginFormData.username,{ expires: 7, path: '/' });
          $.cookie('password',loginFormData.password,{ expires: 7, path: '/' });
          // $.cookie('u_id', data['id']);
          window.location.replace('/index.html');
        }catch(e) {
          console.log(e)
        }
      },
      error(e) {
        console.log('xhr error code is ' + e)
      }
    })
  }
}

function sign() {
  var signFormData = $GetFormDataByName(signform, ['username', 'email', 'password', 'confirm'])
  //如果有值的话
  console.log(signFormData);
  if(signFormData) {
    $Ajax({
      method: 'POST',
      url: '/api/register',
      data: signFormData,
      success(data) {
        //跳转登录
        window.location.replace('/pages/login.html?type=login');
        console.log(data)
      },
      error(e) {
        console.log('xhr error code is ' + e)
      }
    })
  }
}