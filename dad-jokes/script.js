const jokeEl = document.getElementById('joke');
const getJokeBtn = document.getElementById('get-joke-btn');

getJokeBtn.addEventListener('click', generateJoke);

generateJoke();

async function generateJoke() {
  const jokeRes = await fetch('https://icanhazdadjoke.com/', {
    headers: {
      Accept: 'application/json',
    },
  });
  const joke = await jokeRes.json();
  jokeEl.innerHTML = joke.joke;
}
