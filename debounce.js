// ждет окончания ввода пользователя

const input = document.querySelector("input");
const output = document.querySelector(".output");

const debounce = (func, time) => {
  let timeout;

  return () => {
    clearTimeout(timeout);
    timeout = setTimeout(func, time);
  };
};

const render = () => {
  output.textContent = input.value;
  console.log(input.value);
};

input.addEventListener("input", debounce(render, 300));
