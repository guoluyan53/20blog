function addSubmit() {
  var title = $('#add_title').val();
  var text = document.getElementById('add_text').value;
  // console.log(title);
  // console.log(text);
  $Ajax({
    method: 'POST',
    url: '/api/adding',
    data: {
      title: title,
      content: text,
    },
    success(data) {
      try{
        // data = JSON.parse(data);
        alert('添加成功！');
        $('#add_title').val("");
        $('#add_text').val("");
        // 返回页面并刷新页面
        location.replace('../../pages/manage.html');
        console.log(data);
      }catch(e){
        console.log(e);
      }
    },
    error(e) {
      console.log('xhr error code is ' + e);
    }
  });
}

function addCancel() {
  // 返回页面但不刷新
  window.history.back(-1);
}