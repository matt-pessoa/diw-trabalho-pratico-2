const baseURL = "https://api.themoviedb.org/3";
const baseImageURL = "https://image.tmdb.org/t/p/w500";
const APIKEY = "4bb823474cfbfb5613a29886ce0fc79c";

function getPopularMovies() {
	const popularMovies = fetch(
		`${baseURL}/movie/popular?api_key=${APIKEY}&language=pt-BR`
	)
		.then((data) => data.json())
		.then(({ results }) => results);
	return popularMovies;
}

async function generateMovieCards() {
	const popularMovies = await getPopularMovies();
	const cards = document.getElementById("cards");

	popularMovies.forEach((movie) => {
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
		movieYear.innerText = movie.release_date.slice(0, 4);
		movieYear.classList.add("movie-card-year");

		const movieRating = document.createElement("h3");
		movieRating.innerText = movie.vote_average;
		movieRating.classList.add("movie-card-rating");

		movieCard.appendChild(movieImage);
		movieCard.appendChild(movieTitle);
		movieCard.appendChild(movieRating);
		movieCard.appendChild(movieYear);
	});
}
