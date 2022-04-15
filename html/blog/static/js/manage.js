// 退出登录
function Cancel() {
  // 删除cookie不能简单的指定值，否则删除不了
  $.removeCookie("username", {
    path: '/'
  });
  $.removeCookie("password", {
    path: '/'
  });
  //  a标签的href跳转会执行在window.location.replace设置的跳转之前，所以window.location.replace无效，给a标签设置javascript:void(0)即可解决
  window.location.replace('/index.html');
}

// template js中的template
var $ArtTemplate = template;
var pageNum = document.getElementById('pageNum');
var pageCount;// 总页数
var pageNow;// 当前页数
console.log($.cookie("username"));
// 获取作者名字，并在导航栏部分渲染出来
var header = template('headerBox', {
  data: $.cookie("username")
});
document.getElementById('header').innerHTML = header;

// callback为回调函数，回调函数：作为参数传递到函数中
function getArticles(page,callback){
  $Ajax({
    method: 'GET',
    // url: '/rearend/paging',
    url: '/api/paging',
    data: {
      page: page
    },
    success(data) {
      try {
        data = JSON.parse(data);
        // console.log(data);

        // 获取页数创建分页
        pageCount = data.data.count
        // console.log(pageCount);
        if(callback){
          callback(data.data.count);
        }

        var manageData = data.data.articles.filter(i => i!=null);
        // 修改日期格式
        manageData.forEach(function (article) {
          // if (article) 
          article['time'] = new Date(article['time']).toDateString();
        })
        // 渲染文章
        var manages = template('manageBox', {
          data: manageData
        });
        document.getElementById('manage').innerHTML = manages;

      } catch (e) {
        console.log(e);
      }
    },
    error(e) {
      console.log('xhr error code is ' + e);
    }
  })
}


// 分页
function pagination(Count) {
  pageNum.innerHTML = "";

  // 创建页数节点
  for (let i = 1; i <= Count; i++){
    let pageA = document.createElement('a');
    pageA.innerHTML = i;
    pageNum.appendChild(pageA);
    pageA.addEventListener('click', () => {
      changeStyle(i-1);
      pageNow = i;
      // console.log(pageNow);
      // console.log(i);
      this.getArticles(i)
    });
  }
}

// 点击改变分页样式
function changeStyle(i) {
  pageNum.childNodes.forEach((v) => v.style.color = "#6e6e6e")
  pageNum.childNodes[i].style.color = "#13B1CE";
}

// 默认显示第一页的数据
getArticles(1, pagination);

// 前一页
function pre(){
  if (pageNow > 1) {
    pageNow = pageNow-1;
    this.getArticles(pageNow);
    changeStyle(pageNow - 1);
  }
}

// 后一页
function next() {
  if (pageNow < pageCount) {
    pageNow = pageNow+1;
    this.getArticles(pageNow);
    changeStyle(pageNow - 1);
  }
}

// 删除数据
function delArticles(id){
  console.log(id);
  $Ajax({
    method: 'POST',
    // url: '/rearend/delete',
    url: '/api/delete',
    data:{
      id:id,
    },
    success(data){
      try{
        console.log(data);
        // 刷新页面并重新渲染
        // this.getArticles(1, pagination);
        location.reload();
      }catch(e){
        console.log(e);
      }
    },
    error(e){
      console.log('xhr error code is ' + e);
    }
  })
}