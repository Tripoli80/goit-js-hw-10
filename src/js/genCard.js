export default function generator(arr) {
  let resultHTML = '';
  let position = 0;
  const countryArr = [...arr];

  const country = countryArr[0];
  position = 1;
  resultHTML = `<h1> <img src="${country.flags.svg}" alt="flag" width="35px"> ${
    country.name.official
  }</h1>
      <div><span class="names">Capital:</span> ${country.capital}</div>
      <div><span class="names">Population: </span>${country.population}</div>
      <div><span class="names">Language: </span>${
        Object.values(country.languages)[0]
      }</div>`;

  return { position: position, HTML: resultHTML, l: countryArr.length };
}
