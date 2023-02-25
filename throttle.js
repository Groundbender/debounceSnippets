// функция выполняется каждый промежуток времени

const input = document.querySelector("input");
const output = document.querySelector(".output");

const throttle = (func, time) => {
  let timeout = null;
  let previous = 0;

  const later = () => {
    previous = Date.now();
    timeout = null;
    func();
  };

  return () => {
    const now = Date.now();
    const remaining = time - (now - previous);
    if (remaining <= 0 || remaining > time) {
      if (timeout) {
        clearTimeout(timeout);
      }
      later();
    } else if (!timeout) {
      timeout = setTimeout(later, remaining);
    }
  };
};

const render = () => {
  output.textContent = input.value;
  console.log(input.value);
};

input.addEventListener("input", throttle(render, 2000));
