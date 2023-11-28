const getCountryByName = async (countryName) => {
    const response = await fetch("https://restcountries.com/v3.1/name/japan");
    const data = await response.json();
    //console.log(data);
    //document.querySelector("li") = data.name.common;


}

const getCountryData = async () => {
    const country = await getCountryByName("Japan");
    //console.log(country);

const countryContainer = document.createElement("div")

data.forEach((countryUrl) => {
   const countryData = document.createElement("li");
    countryData.innerText = countryUrl.name.common.capital.languages.population;
    countryContainer.appendChild(countryList);
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

document.body.appendChild(countryContainer);

//getCountryByName("Japan");
getCountryData(); is this okay and am i meeting the criteria 