function createRateLimiter(limit, interval) {
  let count = 0;

  setInterval(() => {
    count = 0; // reset
  }, interval);

  return function () {
    if (count < limit) {
      count++;
      console.log("Call allowed");
    } else {
      console.log("Rate limit exceeded");
    }
  };
}