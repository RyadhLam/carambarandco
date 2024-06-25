document.getElementById('jokeButton').addEventListener('click', async () => {
    const response = await fetch('/api/v1/jokes/random');
    const joke = await response.json();
    document.getElementById('jokeText').textContent = joke.text;
});

document.getElementById('addJokeButton').addEventListener('click', async () => {
    const jokeText = document.getElementById('jokeInput').value;
    if (jokeText.trim() === '') {
        alert('Please enter a joke');
        return;
    }

    const response = await fetch('/api/v1/jokes', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ text: jokeText })
    });

    if (response.ok) {
        alert('Joke added successfully!');
        document.getElementById('jokeInput').value = '';
    } else {
        alert('Failed to add joke');
    }
});
