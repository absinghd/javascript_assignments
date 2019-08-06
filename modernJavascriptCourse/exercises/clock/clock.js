const clock = document.querySelector('.clock');

const tick = () => {

  const now = new Date();
  const date = dateFns.format(now, 'dddd, MMM Do');

  let h = now.getHours() % 12 || 12;
  const m = now.getMinutes();
  const s = now.getSeconds();


  const html = `
  <p>${date}</p>
  <span>${h}</span> : 
  <span>${m}</span> : 
  <span>${s}</span>
  `;

  clock.innerHTML = html;

};

setInterval(tick, 1000);