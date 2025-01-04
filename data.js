const api = "https://movies-api14.p.rapidapi.com/movies";
const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': '093e554c47mshde5c1d8c23a4882p18de62jsn2d9d305617a7',
        'x-rapidapi-host': 'movies-api14.p.rapidapi.com'
    }
};

async function movie() {
    try {
        let data = await fetch(api, options);
        if (!data.ok) {
            throw new Error(`HTTP error! status: ${data.status}`);
        }
        
        let ress = await data.json();
        console.log("API Response:", ress);

        // Inspect the response structure
        let movies = ress.movies || ress; // Adjust based on actual structure of ress
        if (!Array.isArray(movies)) {
            throw new Error("Expected an array of movies but got something else");
        }

        let cardsContainer = document.getElementById("cardsContainer");

        movies.forEach(x => {
            let card = document.createElement("div");
            card.innerHTML = `
                <img src="${x.poster_path}" style="height: 300px; width: 300px;" alt="Movie Poster"/>
                <p>${x.title || 'No Title'}</p> 
                <p>${x.genres || 'No Genres'}</p>
                <span>${x.release_date || 'No Release Date'}</span>
                <button>Book Now</button>
            `;
            cardsContainer.appendChild(card);
            
        });
    } catch (error) {
        console.error("Error fetching or processing data:", error.message);
    }
}

movie();



