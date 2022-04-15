loginContral();
function loginContral() {
    var username = $.cookie("username");
    //获取当前url的路径部分
    var path = window.location.pathname;
    var mana = path.split("/");
    // 如果用户名可用，则登录
    if(!!username) {
        if(mana[1] == "index.html" || mana[1] == "") logined(true, username);
    }else{
        if(mana[1] == "index.html" || mana[1] == "") logined();

        // 未登录不能进入个人中心页面
        if (mana.length == 3 && (mana[2] == "manage.html" || mana[2].indexOf("article.html") == 0)) {
            window.location.replace('/')
        }
    }
}

// 渲染登录和未登录的导航栏
function logined(logined = false,username) {
    var navLoginSign = $(".nav-login-sign")[0];
    var renderLoginSign = template("navLoginSign",{
        logined,
        username
    });
    console.log(logined);
    console.log(username);
    navLoginSign.innerHTML = renderLoginSign;
    // 添加退出登录到cancel
    if(logined) {
        $(".out-login").click(function() {
            outLogin();
        })
    }
}

// 退出登录
function outLogin(){
    $.removeCookie("username");
    $.removeCookie("password");
}