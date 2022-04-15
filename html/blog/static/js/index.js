// 箭头平滑过渡
$("#header-down").click(function () {
  $("body,html").animate({
    scrollTop: $("#content").offset().top
  }, 1000)
})
// 箭头平滑过渡结束
// 回到顶部
function toTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// 调用
navRender();
cardListRender();
articleRender();


// template js 文件函数
var $ArtTemplate = template;
// 渲染导航栏
function navRender() {
  var navEle = $(".nav-right")[0];
  var renderNav = template("navRender", { //取的id名
    navData
  });
  navEle.innerHTML = renderNav;
}

// 渲染并排文章
function cardListRender() {
  var cardEle = $("#content-list")[0];
  var renderCard = template("cardRender", {
    categoryListData
  });
  cardEle.innerHTML = renderCard;
}

// 渲染竖排文章
function articleRender() {
  var articleEle = $("#article-left")[0];
  var renderArticle = template("articleRender", {
    articleData
  });
  articleEle.innerHTML = renderArticle;
}


// ajax渲染并排文章列表-三条
// 立即执行
$Ajax({
  method: 'GET',
  url: '/api/three',
  success(data) {
    try {
      // console.log(data);
      var cardlistdata = JSON.parse(data);
      // console.log(cardlistdata.data);
      cardlistdata.data.forEach(function (cardlist) {
        cardlist['time'] = new Date(cardlist['time']).toDateString();
      })
      // 渲染文字
      var cardExhibition = document.getElementById('content-list'); //渲染盒子的id
      var renderDynamicArticle = $ArtTemplate('cardRender', {
        categoryListData: cardlistdata.data
      });
      cardExhibition.innerHTML = renderDynamicArticle;
    } catch (e) {
      console.log(e)
    }
  },
  error(e) {
    console.log('xhr error code is ' + e)
  }
})

// ajax渲染竖排文章列表-四条
// 立即执行
$Ajax({
  method: 'GET',
  url: '/api/four',
  success(data) {
    try {
      var articledata = JSON.parse(data);
      // console.log(cardlistdata.data);
      articledata.data.forEach(function (article) {
        article['time'] = new Date(article['time']).toDateString();
      })
      // 渲染文字
      var cardExhibition = document.getElementById('article-left'); //渲染盒子的id
      var renderDynamicArticle = $ArtTemplate('articleRender', {
        articleData: articledata.data
      });
      cardExhibition.innerHTML = renderDynamicArticle;
      // console.log(articledata.data);
    } catch (e) {
      console.log(e)
    }
  },
  error(e) {
    console.log('xhr error code is ' + e)
  }
})
