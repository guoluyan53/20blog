## 前言

培训20级新生的案例网站--博客，使用原生JS开发，art-template为渲染模板。有以下功能：

- 首页：显示网站最新博客
- 登录注册页
- 添加文章页
- 文章详情页
- 文章列表页：可以删除文章、分页显示，其中修改功能未完成

## 项目目录

```
./html
├─blog
|  ├─favicon.ico                  // 图标
|  ├─index.html                   // 首页，入口html文件
|  ├─static                       // 静态资源
|  |   ├─lib
|  |   |  ├─BELL.TTF              // 字体文件
|  |   |  ├─CALIFR.TTF            // 字体文件
|  |   |  ├─cookie.js             // JS版的cookie封装
|  |   |  ├─cookie1.js            // jQuery版的cookie封装
|  |   |  ├─jquery-3.4.1.js       // jQuery引入文件
|  |   |  ├─template-web.js       // art-template引入文件
|  |   |  └苹方简.TTF              // 字体文件
|  |   ├─js
|  |   | ├─add.js                 // 让用户填写文章内容，添加文章
|  |   | ├─article.js             // 通过url传参获取文章id并展示
|  |   | ├─bannershow.js          // 轮播图
|  |   | ├─getUrlQuery.js         // 获取url参数
|  |   | ├─index.js               // 获取数据渲染首页
|  |   | ├─login.js               // 登录注册逻辑
|  |   | ├─loginContral.js        // 守卫拦截，以及登录前后导航栏的渲染
|  |   | ├─manage.js              // 分页展示，通过传入当前页来获取内容
|  |   | ├─my-plugin.js           // ajax封装
|  |   | └myData.js               // 静态数据
|  |   ├─images                   // 项目中使用到的图片
|  |   ├─font-awesome-4.7.0       // 图标库
|  |   ├─css
|  |   |  ├─add.css               // 添加文章页的样式文件
|  |   |  ├─article.css           // 文章详情页的的样式文件
|  |   |  ├─banner.css            // 首页轮播图的样式文件
|  |   |  ├─footer.css            // 底部样式
|  |   |  ├─index.css             // 首页的样式文件
|  |   |  ├─login.css             // 登录注册页的样式文件
|  |   |  ├─manage.css            // 文章列表页的样式文件
|  |   |  └nav.css                // 首页导航栏的样式
|  ├─pages
|  |   ├─add.html                 // 添加文章页
|  |   ├─article.html             // 文章详情页
|  |   ├─login.html               // 登录注册页
|  |   └manage.html               // 文章列表页
|  ├─.vscode
```

Documentation is available at http://nginx.org

