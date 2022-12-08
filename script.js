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
