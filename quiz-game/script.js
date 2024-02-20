const answersEl = document.querySelectorAll('[data-answer]');
const optionEl = document.querySelectorAll('[data-option]');
const answerBoxes = document.querySelectorAll('.answer-box');

answersEl.forEach((answer, idx) => {
  answer.addEventListener('click', () => {
    answer.classList.add('selected');
    answerBoxes[idx].innerHTML = `
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="correct-answer"
                            viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" fill="none"
                            stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M5 12l5 5l10 -10" />
                      </svg>`;
  });
});
