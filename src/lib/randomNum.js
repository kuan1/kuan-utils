function randomNum(min, max) {
  return Math.floor(min + Math.random() * (max-min));
}

module.exports = randomNum;