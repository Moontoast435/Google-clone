const resultsBtn = document.getElementById("results-button");
const searchBar = document.getElementById("search-bar");
const resultsContainer = document.getElementById("container");
const homePage = document.getElementById("home-page");

resultsBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let newSearchBarValue = searchBar.value.toLowerCase();
  if (newSearchBarValue === "programming") {
    getResultsPage("programming");
    homePage.style.display = "none";
    resultsContainer.style.display = "block";
  } else if (newSearchBarValue === "gaming") {
    getResultsPage("gaming");
    homePage.style.display = "none";
    resultsContainer.style.display = "block";
  } else {
    return;
  }
});

function getResultsPage(category) {
  fetch(`http://localhost:5000/search/${category}`)
    .then((resp) => resp.json())
    .then((data) =>
      data.forEach((result) => {
        let newSection = document.createElement("section");
        newSection.className = "result";
        let newTitle = document.createElement("h3");
        let newLink = document.createElement("a");
        let newPara = document.createElement("p");
        newTitle.textContent = result.title;
        newLink.href = result.link;
        newLink.textContent = result.link;
        newPara.textContent = result.description;
        newSection.appendChild(newTitle);
        newSection.appendChild(newLink);
        newSection.appendChild(newPara);
        resultsContainer.appendChild(newSection);
      })
    );
}
