(function () {
  // 如果 Content-type 设置的值不同， 那么后端处理接受数据的形式则会不同，所以大家必须和后端
  function ajax(config) {
    //方式
    var method = config.method;
    //地址
    var url = config.url;
    //传入的数据
    var data = config.data || '';
    //成功回调
    var successFun = config.success;
    //错误回调
    var errorFun = config.error;
    //默认头部

    // 数据传送类型   一般 大写的全大写代表常量
    var DefaultContentType= 'application/x-www-form-urlencoded; charset=utf-8';
    var JsonContentType = 'application/json; charset=utf-8';
    var XmlContentType = ' text/xml; charset=utf-8';
    var FormDataContentType = 'multipart/form-data; charset=utf-8';
    
    var contentType = config.dataType ?  config.dataType : DefaultContentType;
    
    var XMl = new XMLHttpRequest();
    //回调
    XMl.onreadystatechange = function () {
      if (XMl.readyState === 4) {
        //请求到达  0: 请求未初始化 1: 服务器连接已建立 2: 请求已接收 3: 请求处理中 4: 请求已完成，且响应已就绪
        if (XMl.status === 200) {
          successFun && successFun(XMl.responseText);
        } else {
          //请求未成功
          errorFun && errorFun(XMl.status)
        }
      }
    }

    if(method === 'GET') {
      if(data) url += '?' + window.$EnSerialize(data);
      //GET方法 传送数据格式 默认 是 DefaultContentType
      contentType = DefaultContentType;
    }else if(method === 'POST') {
      if(contentType === JsonContentType) {
        // 如果传入的contentType 是 appli.../json类型 需要转化数据为JSON格式
        data = JSON.stringify(data)
      }else {
        data = window.$EnSerialize(data);
      }
    }else {
      console.log('method is illegal');
    }

    XMl.open(method, url, true);
    
    XMl.setRequestHeader('Content-type', contentType);

    if(method === 'GET') {
      XMl.send();
    }else {
      XMl.send(data);
    }
  }

  window.$Ajax = ajax;

  /**
   * @param   obj : Object
   * @return  resultStr : String
   * @desc    序列化 默认是一层遍历，如果是其它，需要用json处理
   */
  function enSerialize(obj) {
    //判别类型
    if (typeof obj !== 'object') return '';
    let resultStr = '';
    for (var pro in obj) {
      //单层遍历 一般只需要单层 ， 多层次 用树的前序遍历
      if (typeof obj[pro] === 'object') return '';
      resultStr += pro + '=' + obj[pro] + '&';
    }
    return resultStr.slice(0, -1);
  }

  window.$EnSerialize = enSerialize;


  /**
   * @param   str : String
   * @return  resultObj : Object
   * @desc    反序列化
   */
  function deSerialize(str) {
    //判别类型
    if (typeof str !== 'string') return null;
    var items = str.split('&');

    var resultObj = {}
    items.forEach(function (item) {
      var itemArr = item.split('=')
      var itemName = itemArr[0]
      resultObj[itemName] = itemArr[1]
    })
    return resultObj
  }

  window.$DeSerialize = deSerialize;


  /**
   * @param   form : from表达元素 , fieldArr : Array
   * @return  resultObj : Object
   * @desc    根据字段数组获取表单的值
   */
  function getFormDataByName(form, fieldArr) {
    var fromElements = form.elements;
    var resultObj = {};
    for(var field of fieldArr) {
      if(field in fromElements) {
        resultObj[field] = fromElements[field].value;
      }else {
        console.log(field + '字段获取错误');
      }
    }
    return resultObj;
  }

  window.$GetFormDataByName = getFormDataByName;
})()