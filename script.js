
document.addEventListener('DOMContentLoaded', () => {
    const questions = document.querySelectorAll('.question');
    
    questions.forEach(question => {
        const answers = question.querySelectorAll('.ans');
        
        answers.forEach(answer => {
            answer.addEventListener('click', () => {
                answers.forEach(ans => {
                    ans.style.backgroundColor = 'white';
                    ans.querySelector('button').style.backgroundColor = 'rgb(230, 62, 62)';
                });
                const isCorrect = answer.getAttribute('data-correct') === 'true';
                const color = isCorrect ? 'green' : 'red';
                answer.style.backgroundColor = color;
                answer.querySelector('button').style.backgroundColor = color;
            });
        });
    });
});
