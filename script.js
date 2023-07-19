let getTime = document.getElementById("time");
let getSmile = document.getElementById("smile");
let random = Math.floor(Math.random() * 7)

let smileList = {
  0: "˚ʚ(´•◡•`)ɞ˚",	
  1: "(￢‿￢ )",
  2: "ヽ(・∀・)ﾉ",
  3: "。。。ミヽ(。＞＜)ノ",
  4: "ฅ(•ㅅ•❀)ฅ",
  5: "( ͡° ͜ʖ ͡°)",
  6: "( ･ิ ͜ʖ ･ิ)"
}

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

getSmile.innerHTML = smileList[random];