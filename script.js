document.getElementById('new-cat').addEventListener('click', fetchCat);

function fetchCat() {
    fetch('https://api.thecatapi.com/v1/images/search')
        .then(response => response.json())
        .then(data => {
            const catImage = document.getElementById('cat-image');
            catImage.src = data[0].url;
        })
        .catch(error => {
            console.error('Error fetching the cat image:', error);
        });
}

// Initial fetch to show a cat image when the page loads
fetchCat();
