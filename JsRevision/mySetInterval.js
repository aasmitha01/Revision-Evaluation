function mySetInterval(callback, delay) {
  let timerId;
  let active = true;

  function run() {
    if (!active) return;

    callback();
    timerId = setTimeout(run, delay);
  }

  timerId = setTimeout(run, delay);

  return {
    id: timerId,
    stop() {
      active = false;
      clearTimeout(timerId);
    }
  };
}