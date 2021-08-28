const countryApi = () =>{
    fetch("https://restcountries.eu/rest/v2/all")
    .then(res => res.json())
    .then(data => allCountries(data))
};
countryApi();
const allCountries = (contries) =>{
    const countriesContainer = document.getElementById("countries-container");
    contries.forEach(country =>{
        const div = document.createElement("div");
        div.classList.add("individual-country")
        div.innerHTML = `
        <img width="150px" src="${country.flag}" alt="" />
        <h2>${country.name}</h2>
        <h4>City : ${country.capital}</h4>
        <button onclick="countryInfo('${country.name}')">Details</button>
        `
        countriesContainer.appendChild(div);
    });
    
};
const countryInfo = (name) => {
    const url =(`https://restcountries.eu/rest/v2/name/${name}`)
    fetch(url).then((response) => response.json()).then((data =>countryDetails(data[0])))
};
const countryDetails = (info) => {
    const div = document.getElementById("country-details");
    div.classList.add("each-country")
    div.innerHTML = `
    <img width="200px" src="${info.flag}" alt="" />
    <h2>${info.name}</h2>
    <h4>City : ${info.capital}</h4>
    <h4>City : ${info.languages[0].name}</h4>
    `
    eachCountry.appendChild(div);
    
};