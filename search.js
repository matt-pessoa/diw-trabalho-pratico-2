function getQueryMovies(query) {
	const response = fetch(
		`${baseURL}/search/movie?api_key=${APIKEY}&language=pt-BR&query=${query}`
	)
		.then((data) => data.json())
		.then((result) => result);

	return response;
}

async function generateQueryCards(query) {
	const { results } = await getQueryMovies(query);
	console.log(results);
	const cards = document.getElementById("cards");

	results.forEach((movie) => {
		const linkTo = document.createElement("a");
		linkTo.setAttribute("href", "detalhes.html");
		linkTo.onclick = () => {
			localStorage.setItem("id", movie.id);
		};
		cards.appendChild(linkTo);

		const movieCard = document.createElement("div");
		movieCard.classList.add("movie-card");
		linkTo.appendChild(movieCard);

		const movieImage = document.createElement("img");
		movieImage.setAttribute("src", `${baseImageURL}/${movie.poster_path}`);
		movieImage.setAttribute("alt", movie.title);
		movieImage.classList.add("movie-card-poster");

		const movieTitle = document.createElement("h2");
		movieTitle.innerText = movie.title;
		movieTitle.classList.add("movie-card-title");

		const movieYear = document.createElement("h3");
		movieYear.innerText = movie.release_date;
		movieYear.classList.add("movie-card-year");

		const movieRating = document.createElement("h3");
		movieRating.innerText = movie.vote_average;
		movieRating.classList.add("movie-card-rating");

		movieCard.appendChild(movieImage);
		movieCard.appendChild(movieTitle);
		movieCard.appendChild(movieYear);
		movieCard.appendChild(movieRating);
	});
}

function removeChildren() {
	const cards = document.getElementById("cards");
	cards.innerHTML = "";
}

function updateSearch(query) {
	const searchBar = document.getElementById("search-bar");

	if (searchBar.value === "") {
		removeChildren();
		generateMovieCards();
	} else {
		removeChildren();
		generateQueryCards(query);
	}
}
