let SearchIcon = document.querySelector(".find");
let searchInput = document.getElementById("search");
let postView = document.querySelector(".container")

SearchIcon.addEventListener("click", function () {
  let countryName = searchInput.value;
  let postHolder = "";
  // console.log(countryName)
  let finalURL = `https://restcountries.com/v2/name/${countryName}?fullText=true`;
  // console.log(finalURL);

  fetch(finalURL)
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);
      postHolder += `
        <div class="container">
          <img src="${data[0].flags.png}" alt="Country Flag">
        </div>
      `
    });
    postView.innerHTML = postHolder;
});
