module.exports = function isPc() {
  return !(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent));
};
