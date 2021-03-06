const baseURL = "https://api.themoviedb.org/3";
const baseImageURL = "https://image.tmdb.org/t/p/w500";
const APIKEY = "4bb823474cfbfb5613a29886ce0fc79c";

function fetchDetails(movieId) {
	const movieDetails = fetch(
		`${baseURL}/movie/${movieId}?api_key=${APIKEY}&language=pt-BR`
	)
		.then((data) => data.json())
		.then((result) => result);

	return movieDetails;
}

async function generateDetails() {
	const id = JSON.parse(localStorage.getItem("id"));
	const movieDetails = await fetchDetails(id);

	const detailsSection = document.getElementById("movie-details");

	const detailsInfo = document.createElement("div");
	detailsInfo.classList.add("info");

	const detailsImage = document.createElement("img");
	detailsImage.setAttribute(
		"src",
		`${baseImageURL}/${movieDetails.poster_path}`
	);
	detailsImage.setAttribute("alt", movieDetails.title);

	const detailsTitle = document.createElement("h1");
	detailsTitle.innerText = movieDetails.title;

	const detailsYear = document.createElement("h2");
	detailsYear.innerText = movieDetails.release_date.slice(0, 4);

	const detailsRating = document.createElement("h2");
	detailsRating.innerText = movieDetails.vote_average;

	const detailsDescription = document.createElement("p");
	detailsDescription.innerText = movieDetails.overview;

	const tagList = document.createElement("ul");
	movieDetails.genres.forEach(({ name }) => {
		const tagListItem = document.createElement("li");
		tagListItem.innerText = name;
		tagList.appendChild(tagListItem);
	});

	const detailsHomepage = document.createElement("a");
	detailsHomepage.innerText = "Ir para site oficial";
	detailsHomepage.setAttribute("href", movieDetails.homepage);
	detailsHomepage.setAttribute("target", "_blank");

	detailsSection.appendChild(detailsImage);
	detailsInfo.appendChild(detailsTitle);
	detailsInfo.appendChild(detailsYear);
	detailsInfo.appendChild(detailsRating);
	detailsInfo.appendChild(detailsDescription);
	detailsInfo.appendChild(tagList);
	detailsInfo.appendChild(detailsHomepage);

	detailsSection.appendChild(detailsInfo);
}

window.onload = () => {
	generateDetails();
};
