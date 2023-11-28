const getCountryByName = async (countryName) => {
    const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);
    const data = await response.json();
    return data[0]; 
}

const getCountryData = async () => {
    const country = await getCountryByName("Japan");

const countryContainer = document.createElement("div")

data.forEach((countryUrl) => {
   const countryData = document.createElement("li");
   countryData.innerText = countryUrl.name.common//.capital.languages.population;
   countryContainer.appendChild(countryData);
    getCountryData.appendChild(country);
})


// data.forEach((countryUrl) => {
//     const countryData = {
//         name: country.name.common,
//         capital: country.capital,
//         language: country.languages,
//         population: country.population

//     };

}

document.querySelector("body").appendChild(countryContainer);

//getCountryByName("Japan");
getCountryData();
