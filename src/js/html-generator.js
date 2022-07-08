export default function generator(arr) {
  let resultHTML = '';
  let position = 0;
  const countryArr = [...arr];

  if (countryArr.length > 1) {
    position = 0;
    const maxLength = countryArr.length > 10 ? 10 : countryArr.length;
    let resu;

    //   console.log(maxLength);
    for (let i = 0; i < maxLength; i += 1) {
      // console.log('aa', countryArr[i].name.official);
      resultHTML += `<li><img src="${countryArr[i].flags.svg}" alt="flag"   height= "16px" width ="30px" > ${countryArr[i].name.official} </li>`;
    }
    //   console.log(resultHTML);
  } else {
    const country = countryArr[0];
    position = 1;
    resultHTML = `<h1> <img src="${
      country.flags.svg
    }" alt="flag" width="35px"> ${country.name.official}</h1>
      <div><span class="names">Capital:</span> ${country.capital}</div>
      <div><span class="names">Population: </span>${country.population}</div>
      <div><span class="names">Language: </span>${
        Object.values(country.languages)[0]
      }</div>`;
  }
  return { position: position, HTML: resultHTML, l: countryArr.length };
}
