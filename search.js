function fetchQuery(query) {
  const response = fetch(
    `${baseURL}/search/company/?api_key=${APIKEY}&query=${query}page=1`
  )
    .then((data) => data.json())
    .then((result) => console.log(result));

  return response;
}
