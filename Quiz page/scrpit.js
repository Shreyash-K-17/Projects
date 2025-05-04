




// --------------------------------------------------------------------------------------------lets keep js aside while wee learn----------------------------------------------------------------------------------------------------------------------











// const questions = [
//     {
//         flag: 'flags/france.png',
//         options: ['France', 'Germany', 'Italy', 'Spain'],
//         answer: 'France'
//     },
//     {
//         flag: 'flags/itachibgimg.jpeg',
//         options: ['Itachi', 'Naruto', 'Gon', 'Sasuke'],
//         answer: 'Itachi'
//     },
//     // …add more questions here
// ];




// let currentQuestionIndex = 0;
// const flagImg = document.getElementById('flag');
// const optionBtns = document.querySelectorAll('.option-btn');
// const feedbackDiv = document.getElementById('feedback');

// function loadQuestion(index) {
//     const q = questions[index];
//     flagImg.src = q.flag;
//     optionBtns.forEach((btn, i) => {
//         btn.textContent = q.options[i];
//         btn.dataset.answer = q.options[i];
//         btn.disabled = false;
//     });
//     feedbackDiv.textContent = '';
// }



// optionBtns.forEach(btn => {
//     btn.addEventListener('click', (e) => {
//         const selected = e.currentTarget.dataset.answer;
//         const correct = questions[currentQuestionIndex].answer;

//         if (selected === correct) {
//             feedbackDiv.textContent = '✅ Correct!';      // correct branch
//         } else {
//             feedbackDiv.textContent = `❌ Wrong! It’s ${correct}.`;
//         }

//         // disable buttons until next question
//         optionBtns.forEach(b => b.disabled = true);
//     });
// });
