//导航栏数据
var navData = [
    {
        title:"UI-design",
        children:[
            {
                title:"PS",
                id:"2"
            },
            {
                title:"AI",
                id:"3"
            },
            {
                title:"C4D",
                id:"4"
            },
        ],
        id:"1"
    },
    {
        title:"Front-End",
        children:[
            {
                title:"HTML",
                id:"6"
            },
            {
                title:"CSS",
                id:"7"
            },
            {
                title:"JavaScript",
                id:"8"
            },
        ],
        id:"5"
    },
    {
        title:"Back-End",
        children:[
            {
                title:"PHP",
                id:"10"
            },
            {
                title:"Java",
                id:"11"
            },
            {
                title:"Node",
                id:"12"
            },
        ],
        id:"9"
    },
]

// 目录列表数据---三个并列框数据
var categoryListData = [
    {
        // 这里的路径是首页要引用的路径
        imgPath:"./static/images/index2.jpg",
        title:"HTML",
        content:"HTML,called hypertext markup language ,is a markup language.It includes a series of tags.Through these tags,the document format beautiful on the network can be unidied, and the scattered internet resources can be connected as a logical whole.",
        date:"2021-02-02",
    },
    {
        imgPath:"./static/images/index3.jpg",
        title:"CSS",
        content:"Cascading style sheets is a computer language used to represent HTML or XML and other file styles.CSS can not only modify the web page statically,but also format the elements of the web page dynamically with various script languages.",
        date:"2021-02-02",
    },
    {
        imgPath:"./static/images/index4.jpg",
        title:"Java",
        content:"Java is an object-oriented programming languages. As the of static object-oriented programming language,Java realizes the object-oriented theory very well and allows to carry out complex programming in an elegant way of thinking.",
        date:"2021-02-02",
    },
]

// 四个文章框的数据
var articleData = [
    // "/"代表根目录
    {
        title:"JAVA",
        imgPath:"/static/images/index6.jpg",
        date: new Date("2021-03-01").toDateString(),
        content:"Java is an object-oriented programming languages. As the representative of static object-oriented programming language,Java realizes the object-oriented theory very well and allows programmers to carry out complex programming in an elegant way of thinking.",
        id:"1",
    },
    {
        title:"JAVA",
        imgPath:"/static/images/index6.jpg",
        date: new Date("2021-03-01").toDateString(),
        content:"Java is an object-oriented programming languages. As the representative of static object-oriented programming language,Java realizes the object-oriented theory very well and allows programmers to carry out complex programming in an elegant way of thinking.",
        id:"2",
    },
    {
        title:"JAVA",
        imgPath:"/static/images/index6.jpg",
        date: new Date("2021-03-01").toDateString(),
        content:"Java is an object-oriented programming languages. As the representative of static object-oriented programming language,Java realizes the object-oriented theory very well and allows programmers to carry out complex programming in an elegant way of thinking.",
        id:"3",
    },
    {
        title:"JAVA",
        imgPath:"/static/images/index6.jpg",
        date: new Date("2021-03-01").toDateString(),
        content:"Java is an object-oriented programming languages. As the representative of static object-oriented programming language,Java realizes the object-oriented theory very well and allows programmers to carry out complex programming in an elegant way of thinking.",
        id:"4",
    }
]



