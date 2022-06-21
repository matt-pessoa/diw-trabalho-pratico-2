const baseURL = 'https://api.themoviedb.org/3';
const baseImageURL = 'https://image.tmdb.org/t/p/w500';
const APIKEY = '4bb823474cfbfb5613a29886ce0fc79c';
const id = JSON.parse(localStorage.getItem('id'));

function fetchDetails(movieId) {
  const movieDetails = fetch(
    `${baseURL}/movie/${movieId}?api_key=${APIKEY}&language=pt-BR`
  )
    .then((data) => data.json())
    .then((result) => result);

  return movieDetails;
}

async function generateDetails() {
  const movieDetails = await fetchDetails(id);
  console.log(movieDetails);
}

window.onload = () => {
  generateDetails();
};
