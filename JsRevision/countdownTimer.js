function createCountdown(seconds, onTick, onComplete) {
  let remaining = seconds;
  let timer = null;
  let running = false;

  function tick() {
    if (remaining <= 0) {
      clearInterval(timer);
      onComplete();
      return;
    }

    onTick(remaining);
    remaining--;
  }

  return {
    start() {
      if (!running) {
        running = true;
        timer = setInterval(tick, 1000);
      }
    },

    pause() {
      clearInterval(timer);
      running = false;
    },

    resume() {
      if (!running) {
        running = true;
        timer = setInterval(tick, 1000);
      }
    }
  };
}