console.log(localStorage.getItem('sessions'));
let infoOfSession = JSON.parse(localStorage.getItem('sessions')) || [];
console.log(infoOfSession);
let time = new Date();

let numberSession = infoOfSession[infoOfSession.length-1]?.count || 0;
console.log(numberSession);
infoOfSession.push({time: time.getTime(), count: numberSession + 1});
localStorage.setItem('sessions',JSON.stringify(infoOfSession));