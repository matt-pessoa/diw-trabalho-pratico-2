const baseURL = 'https://api.themoviedb.org/3/movie';
const APIKEY = '4bb823474cfbfb5613a29886ce0fc79c';

function getPopularMovies() {
  const popularMovies = fetch(
    `${baseURL}/popular?api_key=${APIKEY}&language=en-US&page=1`
  ).then((data) => data.json());

  return popularMovies;
}

async function generateMovieCards() {
  const popularMovies = await getPopularMovies();
  console.log(popularMovies);
}

window.onload = () => {
  generateMovieCards();
};
