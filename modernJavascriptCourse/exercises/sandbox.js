const form = document.querySelector('.signup-form');
//const username = document.querySelector('#username');
// const username = form.username.value;
// const pattern = /[a-zA-Z]{6,12}/;
const feedback = document.querySelector('.feedback');

form.addEventListener('submit', e => {
    e.preventDefault();
    feedback.textContent = ``;
    //console.log('form submitted');
    //console.log(username.value);

    const username = form.username.value;
const pattern = /^bro$|^bicky$|^romain$|^guest$/;
    let result = pattern.test(username);
//console.log(result);
if(result){
    //console.log('regEx test passed');
    //feedback.textContent = "That's correct, you can go to <a href = toDo.html></a>";
    feedback.innerHTML += "<a>You can click <a href = 'popupIndex.html'; >here</a> to see more.</span>"
}
else {
    //console.log(`Input must contain at least 6 letters and not special characters or numbers`);
    feedback.textContent = `You shall not pass!`;
}
});


// //test RegExpressions
// //const pattern = /[a-zA-Z]{6,}/;

// let result = pattern.test(username);
// //console.log(result);
// if(result){
//     console.log('regEx test passed');
// }
// else {
//     console.log(`regEx test failed`);
// }

