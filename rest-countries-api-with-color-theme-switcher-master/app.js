// let darkMode = document.getElementById("dark-effect");
// let target = document.querySelector(".effect");
  

// darkMode.addEventListener("click", function() {
//   toggleDarkMode();
// });

// function toggleDarkMode() {
//   target.classList.toggle("dark-mode");
// }

let countryDetails = [];
let postBox = document.getElementById("country");

function getPosts() {
  fetch("https:restcountries.com/v3.1/all")
  .then((response) => response.json())
  .then((data) => {
    let countryDetails = data;
    console.log(countryDetails)
    let postHolder = "";

    countryDetails.forEach(post => {
      postHolder += `
          <div class="country">
            <div id="countries-section">
              <img src="${post.flags.png}" alt="Country Flag">
              <div class="country-details">
                <h3>${post.name.common}</h3>
                <p> <strong>Population:</strong> ${post.population}</p>
                <p> <strong>Region:</strong> ${post.region}</p>
                <p> <strong>Capital:</strong> ${post.capital}</p>
                </div>
            </div>
          </div>
      `
    });
    postBox.innerHTML = postHolder;
  })
}
getPosts();


let buttonRegion = document.getElementById("btn");
buttonRegion.addEventListener("click", function() {
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


africaBtn.addEventListener("click", function() {
  fetch("https://restcountries.com/v3.1/region/africa")
  .then((response) => response.json())
  .then((data) => {

    let countryDetails = data;
    console.log(countryDetails)
    let postHolder = "";

    countryDetails.forEach(post => {
      postHolder += `
      <div class="country">
      <div id="countries-section">
        <img src="${post.flags.png}" alt="Country Flag">
        <div class="country-details">
          <h3>${post.name.common}</h3>
          <p> <strong>Population:</strong> ${post.population}</p>
          <p> <strong>Region:</strong> ${post.region}</p>
          <p> <strong>Capital:</strong> ${post.capital}</p>
          </div>
      </div>
    </div>
      `
    });
    postBox.innerHTML = postHolder;
  });
})

americaBtn.addEventListener("click", function() {
  fetch("https://restcountries.com/v3.1/region/america")
  .then((response) => response.json())
  .then((data) => {

    let countryDetails = data;
    console.log(countryDetails)
    let postHolder = "";

    countryDetails.forEach(post => {
      postHolder += `
          <div class="country">
            <div id="countries-section">
              <img src="${post.flags.png}" alt="Country Flag">
              <div class="country-details">
                <h3>${post.name.common}</h3>
                <p> <strong>Population:</strong> ${post.population}</p>
                <p> <strong>Region:</strong> ${post.region}</p>
                <p> <strong>Capital:</strong> ${post.capital}</p>
                </div>
            </div>
          </div>
      `
    });
    postBox.innerHTML = postHolder;
  });
})

asiaBtn.addEventListener("click", function() {
  fetch("https://restcountries.com/v3.1/region/asia")
  .then((response) => response.json())
  .then((data) => {

    let countryDetails = data;
    console.log(countryDetails)
    let postHolder = "";

    countryDetails.forEach(post => {
      postHolder += `
          <div class="country">
            <div id="countries-section">
              <img src="${post.flags.png}" alt="Country Flag">
              <div class="country-details">
                <h3>${post.name.common}</h3>
                <p> <strong>Population:</strong> ${post.population}</p>
                <p> <strong>Region:</strong> ${post.region}</p>
                <p> <strong>Capital:</strong> ${post.capital}</p>
                </div>
            </div>
          </div>
      `
    });
    postBox.innerHTML = postHolder;
  });
})

europeBtn.addEventListener("click", function() {
  fetch("https://restcountries.com/v3.1/region/europe")
  .then((response) => response.json())
  .then((data) => {

    let countryDetails = data;
    console.log(countryDetails)
    let postHolder = "";

    countryDetails.forEach(post => {
      postHolder += `
          <div class="country">
            <div id="countries-section">
              <img src="${post.flags.png}" alt="Country Flag">
              <div class="country-details">
                <h3>${post.name.common}</h3>
                <p> <strong>Population:</strong> ${post.population}</p>
                <p> <strong>Region:</strong> ${post.region}</p>
                <p> <strong>Capital:</strong> ${post.capital}</p>
                </div>
            </div>
          </div>
      `
    });
    postBox.innerHTML = postHolder;
  });
})

oceaniaBtn.addEventListener("click", function() {
  fetch("https://restcountries.com/v3.1/region/oceania")
  .then((response) => response.json())
  .then((data) => {

    let countryDetails = data;
    console.log(countryDetails)
    let postHolder = "";

    countryDetails.forEach(post => {
      postHolder += `
          <div class="country">
            <div id="countries-section">
              <img src="${post.flags.png}" alt="Country Flag">
              <div class="country-details">
                <h3>${post.name.common}</h3>
                <p> <strong>Population:</strong> ${post.population}</p>
                <p> <strong>Region:</strong> ${post.region}</p>
                <p> <strong>Capital:</strong> ${post.capital}</p>
                </div>
            </div>
          </div>
      `
    });
    postBox.innerHTML = postHolder;
  });
})




