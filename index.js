/*
 * 时间戳转时间
 * @param timestamp
 * @param formats Y-M-D 年月日 | Y-M-D h:m:s 年月日时分秒
 * @returns {void | string | never}
 * @example console.log(formatDate(1500305226034, 'Y年M月D日 h:m:s')) ==> 2017年07月17日 23:27:06
 * @example console.log(formatDate(1500305226034, 'Y/M/D/ h:m:s')) ==> 2017/07/17 23:27:06
 */
function formatDate(timestamp, formats) {
  formats = formats || 'Y-M-D'
  let myDate = timestamp ? new Date(timestamp) : new Date()
  let year = myDate.getFullYear()
  let month = formatDigit(myDate.getMonth() + 1)
  let day = formatDigit(myDate.getDate())
  let hour = formatDigit(myDate.getHours())
  let minute = formatDigit(myDate.getMinutes())
  let second = formatDigit(myDate.getSeconds())
  // 小于10补0
  function formatDigit(n) {
    return n.toString().replace(/^(\d)$/, '0$1')
  }
  return formats.replace(/Y|M|D|h|m|s/g, function (matches) {
    return {
      Y: year,
      M: month,
      D: day,
      h: hour,
      m: minute,
      s: second,
    }[matches]
  })
}

/*
 * 数字转汉字周几
 * @param num 数字 0 - 6 代表 周日到周六
 * @params top 要加在开头的文字，例如 "星期"
 * @returns string
 * @example console.log(getWeekDay(5,"星期")) ==> 星期5
 */
function getWeekDay(num, top) {
  let str = '日一二三四五六'
  return top ? top.toString() + str.charAt(num) : '周' + str.charAt(num)
}

/**
 * 是否字符串
 * @param o
 * @returns {boolean}
 */
function isString(o) {
  return Object.prototype.toString.call(o).slice(8, -1) === 'String'
}

/**
 * 是否数字
 * @param o
 * @returns {boolean}
 */
function isNumber(o) {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Number'
}

/**
 * 是否布尔
 * @param o
 * @returns {boolean}
 */
function isBoolean(o) {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Boolean'
}

/**
 * 是否函数
 * @param o
 * @returns {boolean}
 */
function isFunction(o) {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Function'
}

/**
 * 是否为null
 * @param o
 * @returns {boolean}
 */
function isNull(o) {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Null'
}

/**
 * 是否undefined
 * @param o
 * @returns {boolean}
 */
function isUndefined(o) {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Undefined'
}

/**
 * 是否对象
 * @param o
 * @returns {boolean}
 */
function isObj(o) {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Object'
}

/**
 * 是否数组
 * @param o
 * @returns {boolean}
 */
function isArray(o) {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Array'
}

/**
 * 是否时间
 * @param o
 * @returns {boolean}
 */
function isDate(o) {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Date'
}

/**
 * 是否正则
 * @param o
 * @returns {boolean}
 */
function isRegExp(o) {
  return Object.prototype.toString.call(o).slice(8, -1) === 'RegExp'
}

/**
 * 是否错误对象
 * @param o
 * @returns {boolean}
 */
function isError(o) {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Error'
}

/**
 * 是否Symbol函数
 * @param o
 * @returns {boolean}
 */
function isSymbol(o) {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Symbol'
}

/**
 * 是否Promise对象
 * @param o
 * @returns {boolean}
 */
function isPromise(o) {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Promise'
}

/**
 * 是否Set对象
 * @param o
 * @returns {boolean}
 */
function isSet(o) {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Set'
}
