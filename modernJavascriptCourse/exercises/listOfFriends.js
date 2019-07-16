// have the following in the html <body>
// <ul class="people"></ul>

const ul = document.querySelector('.people');

const people = ['erin', 'andrew', 'taylor', 'eric', 'joe'];

let html = ``;

people.forEach(friend => {
    html += `<li style="color: purple">${friend}</li>`;
});

console.log(html);
ul.innerHTML = html;