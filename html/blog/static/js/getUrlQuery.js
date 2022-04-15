// 获取路径
function getUrlQuery(){
    var path = window.location.search;
    var arr = path.split("?")[1].split("=");
    var btn = {};
    btn[arr[0]] = arr[1];
    return btn;
}