let getTime = document.getElementById("time");

let options = {
  hour: "numeric",
  minute: "numeric",
};

//display time on site
setInterval(() => {
  let date = new Date();
  let time = date.toLocaleString("ru-RU", options);
  getTime.innerHTML = time;
}, 1);

