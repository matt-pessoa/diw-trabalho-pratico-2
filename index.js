window.onload = () => {
	updateSearch();
	const searchBar = document.getElementById("search-bar");
	searchBar.addEventListener("input", (event) => {
		updateSearch(event.target.value);
	});
};
