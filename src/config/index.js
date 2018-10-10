/**
 * 存储localStorage
 */
export const setStore = (name, content) => {
  if (!name) return;
  if (typeof content !== 'string') {
    content = JSON.stringify(content);
  }
  window.localStorage.setItem(name, content);
}

var qs = require('querystring');
export const parseUrl = (queryObj) => {
  queryObj = queryObj || {};
  let queryParams = null;
  const search = window.location.search;
  if (search.indexOf('?') != -1) {
    queryParams = search.substr(search.indexOf('?') + 1);
  }
  if (!queryParams) return;
  queryObj = Object.assign(queryObj, qs.parse(queryParams));
  return queryObj;
};


/**
 * 获取localStorage
 */
export const getStore = name => {
  if (!name) return;
  return window.localStorage.getItem(name);
}



export const unique = (arr) => {
  var hash = {};

  return arr.filter(function (element) {
    if (hash.hasOwnProperty(element)) {
      return false;
    }
    hash[element] = true;

    return true;
  });
}


/**
 * 删除localStorage
 */
export const removeStore = name => {
  if (!name) return;
  window.localStorage.removeItem(name);
}

/**
 * 存储cookies
 * */
export const setCookie = (name, value) => {
  // 默认过时时间为1天
  let Days = 1;
  let exp = new Date();
  exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
  document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
}

/**
 *读取cookies
 * */
export const getCookie = (name) => {
  let arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
  if (arr = document.cookie.match(reg))
    return unescape(arr[2]);
  else
    return null;
}

/**
 *删除cookies
 * */
export const removeCookie = (name) => {
  let exp = new Date();
  exp.setTime(exp.getTime() - 1);
  var cval = getCookie(name);
  if (cval != null) {
    document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
  }
}

/***
 * 格式化时间
 * */
export const format = () => {
  var date = new Date();
  var seperator1 = "-";
  var seperator2 = ":";
  var month = date.getMonth() + 1;
  var strDate = date.getDate();
  if (month >= 1 && month <= 9) {
    month = "0" + month;
  }
  if (strDate >= 0 && strDate <= 9) {
    strDate = "0" + strDate;
  }
  var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate +
    " " + date.getHours() + seperator2 + date.getMinutes() +
    seperator2 + date.getSeconds();
  return currentdate;
}


export const getCaption = (obj) => {
  var index = obj.lastIndexOf("/");
  obj = obj.substring(index + 1, obj.length);
  return obj;
}

export const enterAuthValited = (index, authLoaction, callback1) => {
  if (getCookie("UserType") == 9) {
    return
  } else {
    let href = getCaption(location.href);
    if (getCookie('auth')) {
      if (getCookie('auth').split(',').indexOf(index) > -1) {
        console.log(1);
      } else {
        callback1()
        console.log(this)
      }
    } else {
      callback1()
      console.log(this)

    }
  }
}

// 手机号码格式验证
export const isPoneAvailable = (str) => {
  let myreg = /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/;
  if (!myreg.test(str)) {
    return false;
  } else {
    return true;
  }
}

// 去除空格
export const Trim = (str) => {
  return str.replace(/(^\s*)|(\s*$)/g, "");
}
// 删除数组中的空元素
export const removeNull = (array) => {
  for (var i = 0; i < array.length; i++) {
    if (array[i] == "" || typeof (array[i]) == "undefined") {
      array.splice(i, 1);
      i = i - 1;
    }
  }
  return array;
}

export const setTitle = (title) => {
  setTimeout(() => {
    document.title = title;
  }, 1000);
}


export const utils = {
    /**
     * Deep copy the given object considering circular structure.
     * This function caches all nested objects and its copies.
     * If it detects circular structure, use cached copy to avoid infinite loop.
     *
     * @param {*} obj
     * @param {Array<Object>} cache
     * @return {*}
     */
    deepCopy(obj, cache = []) {
      // just return if obj is immutable value
      if (obj === null || typeof obj !== 'object') {
        return obj
      }
      // if obj is hit, it is in circular structure
      const hit = find(cache, c => c.original === obj)
      if (hit) {
        return hit.copy
      }
      const copy = Array.isArray(obj) ? [] : {}
      // put the copy into cache at first
      // because we want to refer it in recursive deepCopy
      cache.push({
        original: obj,
        copy
      })
      Object.keys(obj).forEach(key => {
        copy[key] = this.deepCopy(obj[key], cache)
      })
      return copy
    }

}
