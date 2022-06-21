const baseURL = 'https://api.themoviedb.org/3';
const baseImageURL = 'https://image.tmdb.org/t/p/w500';
const APIKEY = '4bb823474cfbfb5613a29886ce0fc79c';
const id = JSON.parse(localStorage.getItem('id'));

async function fetchDetails(movieId) {
  const movieDetails = await fetch(
    `${baseURL}/movie/${movieId}?api_key=${APIKEY}&language=pt-BR`
  )
    .then((data) => data.json())
    .then((result) => console.log(result));
}

window.onload = () => {
  fetchDetails(id);
};
