function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function runSequential(tasks, delay) {
  const results = [];

  for (let task of tasks) {
    try {
      const result = await task();
      results.push(result);
      await wait(delay);
    } catch (err) {
      console.log("Task failed:", err);
      break;
    }
  }

  return results;
}