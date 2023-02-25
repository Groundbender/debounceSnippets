// выполняется поочередно по символам

const input = document.querySelector("input");
const output = document.querySelector(".output");

const queue = (func, waitTime) => {
  const funcQueue = [];
  let isWaiting;

  const executeFunc = (params) => {
    isWaiting = true;
    func(params);
    setTimeout(play, waitTime);
  };
  const play = () => {
    isWaiting = false;
    if (funcQueue.length) {
      const params = funcQueue.shift();
      executeFunc(params);
    }
  };
  return (params) => {
    isWaiting ? funcQueue.push(params) : executeFunc(params);
  };
};

const render = (value) => {
  output.textContent = value;
};

const queueOutput = queue(render, 300);
input.addEventListener("input", (e) => {
  queueOutput(e.target.value);
});
