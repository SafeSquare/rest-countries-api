let countryDetails = [];
let postBox = document.getElementById("country");

function getPosts() {
  fetch("https://restcountries.com/v2/all")
    .then((response) => response.json())
    .then((data) => {
      let countryDetails = data;
      // console.log(countryDetails)
      let postHolder = "";

      countryDetails.forEach((post) => {
        postHolder += `
          <div class="country">
            <div id="countries-section" class="mode-six" class="mode-six">
              <img src="${post.flags.png}" alt="Country Flag">
              <div class="country-details">
                <h3 class="country-name">${post.name}</h3>
                <p> <strong>Population:</strong> ${post.population}</p>
                <p> <strong>Region:</strong> ${post.region}</p>
                <p> <strong>Capital:</strong> ${post.capital}</p>
                </div>
            </div>
          </div>
      `;
      });
      postBox.innerHTML = postHolder;
    });
}
getPosts();

let buttonRegion = document.getElementById("btn");
buttonRegion.addEventListener("click", function () {
  toggleMode();
});

let countryDetail = document.querySelector(".continents");
function toggleMode() {
  countryDetail.classList.toggle("show-list");
}

let africaBtn = document.getElementById("btn-africa");
let americaBtn = document.getElementById("btn-america");
let asiaBtn = document.getElementById("btn-asia");
let europeBtn = document.getElementById("btn-europe");
let oceaniaBtn = document.getElementById("btn-oceania");

africaBtn.addEventListener("click", function () {
  fetch("https://restcountries.com/v2/region/africa")
    .then((response) => response.json())
    .then((data) => {
      let countryDetails = data;
      let postHolder = "";

      countryDetails.forEach((post) => {
        postHolder += `
        <div class="country">
          <div id="countries-section" class="mode-six">
            <img src="${post.flags.png}" alt="Country Flag">
            <div class="country-details">
              <h3 class="country-name">${post.name}</h3>
              <p> <strong>Population:</strong> ${post.population}</p>
              <p> <strong>Region:</strong> ${post.region}</p>
              <p> <strong>Capital:</strong> ${post.capital}</p>
            </div>
          </div>
        </div>
      `;
      });
      postBox.innerHTML = postHolder;
    });
});

americaBtn.addEventListener("click", function () {
  fetch("https://restcountries.com/v2/region/americas")
    .then((response) => response.json())
    .then((data) => {
      let countryDetails = data;
      let postHolder = "";

      countryDetails.forEach((post) => {
        postHolder += `
          <div class="country">
            <div id="countries-section" class="mode-six">
              <img src="${post.flags.png}" alt="Country Flag">
              <div class="country-details">
                <h3 class="country-name">${post.name}</h3>
                <p> <strong>Population:</strong> ${post.population}</p>
                <p> <strong>Region:</strong> ${post.region}</p>
                <p> <strong>Capital:</strong> ${post.capital}</p>
              </div>
            </div>
          </div>
      `;
      });
      postBox.innerHTML = postHolder;
    });
});

asiaBtn.addEventListener("click", function () {
  fetch("https://restcountries.com/v2/region/asia")
    .then((response) => response.json())
    .then((data) => {
      let countryDetails = data;
      let postHolder = "";

      countryDetails.forEach((post) => {
        postHolder += `
          <div class="country">
            <div id="countries-section" class="mode-six">
              <img src="${post.flags.png}" alt="Country Flag">
              <div class="country-details">
                <h3 class="country-name">${post.name}</h3>
                <p> <strong>Population:</strong> ${post.population}</p>
                <p> <strong>Region:</strong> ${post.region}</p>
                <p> <strong>Capital:</strong> ${post.capital}</p>
              </div>
            </div>
          </div>
      `;
      });
      postBox.innerHTML = postHolder;
    });
});

europeBtn.addEventListener("click", function () {
  fetch("https://restcountries.com/v2/region/europe")
    .then((response) => response.json())
    .then((data) => {
      let countryDetails = data;
      let postHolder = "";

      countryDetails.forEach((post) => {
        postHolder += `
          <div class="country">
            <div id="countries-section" class="mode-six">
              <img src="${post.flags.png}" alt="Country Flag">
              <div class="country-details">
                <h3 class="country-name">${post.name}</h3>
                <p> <strong>Population:</strong> ${post.population}</p>
                <p> <strong>Region:</strong> ${post.region}</p>
                <p> <strong>Capital:</strong> ${post.capital}</p>
              </div>
            </div>
          </div>
      `;
      });
      postBox.innerHTML = postHolder;
    });
});

oceaniaBtn.addEventListener("click", function () {
  fetch("https://restcountries.com/v2/region/oceania")
    .then((response) => response.json())
    .then((data) => {
      let countryDetails = data;
      let postHolder = "";

      countryDetails.forEach((post) => {
        postHolder += `
          <div class="country">
            <div id="countries-section" class="mode-six">
              <img src="${post.flags.png}" alt="Country Flag">
              <div class="country-details">
                <h3 class="country-name">${post.name}</h3>
                <p> <strong>Population:</strong> ${post.population}</p>
                <p> <strong>Region:</strong> ${post.region}</p>
                <p> <strong>Capital:</strong> ${post.capital}</p>
              </div>
            </div>
          </div>
      `;
      });
      postBox.innerHTML = postHolder;
    });
});

let darkMode = document.getElementById("dark-btn");
let target = document.querySelector(".effect");
let targetTwo = document.querySelector(".form-control");
let targetThree = document.querySelector(".dropDown");
let targetFour = document.querySelector(".drop");
let targetFive = document.querySelector(".mode-one");
let targetSix = document.querySelector(".mode-two");
let targetSeven = document.querySelector(".mode-three");
let targetEight = document.querySelector(".mode-four");
let targetNine = document.querySelector(".mode-five");
let targetTen = document.getElementById("search");
let targetEleven = document.querySelector(".mode-six");
let targetTwelve = document.querySelector(".nav-section");
let targetThirteen = document.querySelector("button");
let targetFourteen = document.querySelector(".find");

darkMode.addEventListener("click", function () {
  toggleDarkMode();
});

function toggleDarkMode() {
  target.classList.toggle("dark-effect");
  targetTwo.classList.toggle("dark-elements");
  targetThree.classList.toggle("dark-elements");
  targetFour.classList.toggle("dark-elements");
  targetFive.classList.toggle("dark-elements");
  targetSix.classList.toggle("dark-elements");
  targetSeven.classList.toggle("dark-elements");
  targetEight.classList.toggle("dark-elements");
  targetNine.classList.toggle("dark-elements");
  targetTen.classList.toggle("dark-elements");
  targetEleven.classList.toggle("dark-elements");
  targetTwelve.classList.toggle("dark-elements");
  targetThirteen.classList.toggle("dark-elements");
  targetFourteen.classList.toggle("dark-elements");
}

let SearchIcon = document.querySelector(".find");
let searchInput = document.getElementById("search");

SearchIcon.addEventListener(
  "click",
  function NewTab() {
    window.open("single.html");
  },
  function () {
    let countryName = searchInput.value;
    let finalURL = `https://restcountries.com/v2/name/${countryName}?fullText=true`;

    fetch(finalURL)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        result.innerHTML = `
        <img src="${data[0].flags.svg}" alt="Country Flag">
        <div class="detail-section">
          <div class="country-details">
            <div class="section-one">
              <h3>${data[0].name}</h3>
              <p> <strong>Native Name:</strong>${data[0].nativeName}</p>
              <p> <strong>Population:</strong>${data[0].population}</p>
              <p> <strong>Region:</strong>${data[0].region}</p>
              <p> <strong>Sub Region:</strong>${data[0].subregion}</p>
              <p> <strong>Capital:</strong>${data[0].capital}</p>
            </div>
            <div class="section-two">
              <p> <strong>Top Level Domain:</strong>${data[0].topLevelDomian}</p>
              <p> <strong>Currencies:</strong>${data[0].currencies[0].name}</p>
              <p> <strong>Languages:</strong> Dutch, French, German</p>
            </div>
          </div>
          <div class="shadow">
            <p><strong>Border Countries:</p>
            <button><p>France</p></button>
            <button><p>Germany</p></button>
            <button><p>Netherlands</p></button>  
          </div>
        </div>
      `;
      });
  }
);
