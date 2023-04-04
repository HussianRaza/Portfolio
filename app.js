let count = 1;

const addCSS = (css) => {
  document.head.appendChild(document.createElement("style")).innerHTML = css;
};
const removeCss = () => {
  let getStyle = document.getElementsByTagName("style");
  getStyle[4].remove();
};
const button = document.getElementById("btn");
button.addEventListener("click", () => {
  count++;
  if (count % 2 === 0) {
    addCSS("*{ color: white ; background-color: black; }");
  } else {
    removeCss();
  }
});
