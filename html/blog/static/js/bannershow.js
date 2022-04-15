// var img = ["banner1.jpg","banner2.jpg","banner3.jpg"];
// var imgPath = "./../static/images";
// 图片的数据
var imgData = [
    {
        src:'/static/images/banner1.jpg',
        id:'1'
    },
    {
        src:'/static/images/banner2.jpg',
        id:'2'
    },
    {
        src:'/static/images/banner3.jpg',
        id:'3'
    },
]
// 换片的时间
var time = 5000000;

var banner_box = document.getElementById("banner_box");
var length = imgData.length;
this.creat();
var slideImg = document.querySelectorAll("#banner_box .small-box img");
var pre = 0;
var now = 0;
var timerId;
slideImg[0].style.opacity = "1";
this.inter();

//上一张
function backing() {
    clearInterval(timerId);
    pre = now;
    now--;
    if(now == -1) now = length - 1;
    this.change();
    this.inter();
}

//下一张
function nexting() {
    clearInterval(timerId);
    pre = now;
    now++;
    if(now == length) now = 0;
    this.change();
    this.inter();
}

//是否透明
function change() {
    slideImg[pre].style.opacity = "0";
    slideImg[now].style.opacity = "1";
}

//循环
function inter() {
    timerId = setInterval(() => {
        pre = now;
        now++;
        if(now == slideImg.length) now = 0;
        this.change();
    },time);
}


//动态创建
function creat() {
    var smallBox = document.createElement("div");
    smallBox.className = "small-box";

    var nextBtn = document.createElement("div");
    nextBtn.className = "btn";
    nextBtn.addEventListener("click",()=>{this.nexting()});

    var preBtn = document.createElement("div");
    preBtn.className = "btn";
    preBtn.addEventListener("click",()=>{this.backing()});


    //创建图片
    for(let i=0;i<length;i++){
        var img = document.createElement("img");
        // img.src = imgPath + "/" + this.img[i];
        img.src = this.imgData[i].src;
        smallBox.append(img);
    }

    // 下一个按钮内部
    var nextDiv = document.createElement("div");
    nextBtn.append(nextDiv);
    // 上一个按钮内部
    var preDiv = document.createElement("div");
    preBtn.append(preDiv);
   
    banner_box.append(smallBox);
    banner_box.append(nextBtn);
    banner_box.append(preBtn);
}