const jokeDiv = document.getElementById('joke');
const jokeBtn = document.getElementById('joke-btn');

function getJoke() {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'https://api.chucknorris.io/jokes/random');

  xhr.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      const data = JSON.parse(this.responseText);

      createJoke(data.value);
    }
  };

  xhr.send();
}

function removeJoke() {
  while (jokeDiv.firstChild) {
    jokeDiv.removeChild(jokeDiv.firstChild);
  }
}

function createJoke(joke) {
  removeJoke();
  const jokeDiv = document.getElementById('joke');
  const p = document.createElement('p');
  const textNode = document.createTextNode(joke);

  p.appendChild(textNode);
  jokeDiv.appendChild(p);
}

jokeBtn.addEventListener('click', getJoke);
