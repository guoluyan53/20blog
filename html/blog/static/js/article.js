
var $ArtTemplate = template;

// 解析url传来的文章id
var article_id = parseInt(getUrlQuery()["article_id"]);
// var article_id = getUrlQuery()["article_id"];
console.log(typeof article_id);

// 通过传来的id获取文章
$Ajax({
  method: 'GET',
  // url: '/rearend/getArticle',
  url: '/api/getArticle',
  data: {
    id: article_id
  },
  success(data){
    try{
      data = JSON.parse(data);
      console.log(data);
      data.data['time'] = new Date(data.data['time']).toDateString();
      var singleArticle = $ArtTemplate('articleBox',{
        data: data.data
      });
      document.getElementsByClassName('article_box')[0].innerHTML = singleArticle;
    }catch(e){
      console.log(e);
    }
  },
  error(e){
    console.log('xhr error code is ' + e);
  }
});