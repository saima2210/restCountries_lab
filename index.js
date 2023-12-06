const getCountryByName = async (countryName) => {
    const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);
    const data = await response.json();
    countryData(data[0]); 
}

const countryData = (country) => {
    const countryContainer = document.createElement("div")



   const name = document.createElement("p");
   name.innerText = `Name: ${country.name.common}`;

   const capital = document.createElement("p");
   capital.innerText = `Capital: ${country.capital}`;

   const languages = document.createElement("p");
   languages.innerText = `Languages: ${Object.values(country.languages).join(", ")}`;

   const population = document.createElement("p");
   population.innerText = `Population: ${country.population}`;


   countryContainer.appendChild(name);
   countryContainer.appendChild(capital);
   countryContainer.appendChild(languages);
   countryContainer.appendChild(population);


   document.getElementById("countryInfo").appendChild(countryContainer);
};

getCountryByName("Japan");


