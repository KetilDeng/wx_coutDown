// 总毫秒数
var totalMillisecond;
// 计时器
var countDownTimer;

/** 
 *  millisecond：总毫秒数
 *  interval：间隔多少毫秒执行一次(1000、100、10)（1秒=1000毫秒）
 */
function countDown(millisecond, interval, callback) {
  totalMillisecond = millisecond;
  if (totalMillisecond <= 0) {
    callback("已结束");
    stopTimer();
    return;
  }
  callback(dateFormat(totalMillisecond, interval));
  countDownTimer = setTimeout(function () {
    totalMillisecond -= interval;
    countDown(totalMillisecond, interval, callback);
  }, interval);
}

/** 
 * 取消倒计时
 */
function stopTimer() {
  clearTimeout(countDownTimer)
}

/**
 *  格式化时间 (eg：15:23:07 or 15:23:07:8 or 15:23:07:08)
 */
function dateFormat(millisecond, interval) {
  var second = Math.floor(millisecond / 1000);
  var hr = Math.floor(second / 3600);
  var min = fillZero(Math.floor((second - hr * 3600) / 60));
  var sec = fillZero((second - hr * 3600 - min * 60));
  if (interval < 1000) {
    var msec = Math.floor((millisecond % 1000) / interval);
    return (hr + ":" + min + ":" + sec + " " + msec);
  } else {
    return (hr + ":" + min + ":" + sec);
  }
}

/**
 * 补0
 */
function fillZero(num) {
  return num < 10 ? "0" + num : num
}

module.exports = {
  countDown: countDown,
  stopTimer: stopTimer
}