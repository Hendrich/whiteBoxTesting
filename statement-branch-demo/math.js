function isPositiveEven(n) {
  if (n > 0 && n % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

module.exports = { isPositiveEven };
