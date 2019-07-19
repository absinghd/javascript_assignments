const correctAnswers = ['B', 'C', 'B', 'A', 'C'];
const form = document.querySelector('.quiz-form');
    const result = document.querySelector('.result');

form.addEventListener('submit', e => {
    e.preventDefault();

    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value ];

    //check answers
    userAnswers.forEach((answer, index) => {
        if(answer === correctAnswers[index]){
            score += 20;
        }
    });

    result.classList.remove('.d');

    //show results on page
    scrollTo(0,0);
    result.querySelector('span').textContent = `${score}%`;
    result.classList.remove('d-none');
    
    let output = 0;
    const timer = setInterval(() => {
        result.querySelector('span').textContent = `${output}%`;
        if(output === score){
            clearInterval(timer);
        }
        else{
            output++;
        }
        }, 15);



setTimeout(() => {
        if(score <=60){
            alert("You're clearly a shitty friend");
        }
        else{
            alert("Not too bad");
        }
}, 2500);
    });
//window object