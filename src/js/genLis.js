export default function generator(arr) {
  let resultHTML = '';
  let position = 0;
  const countryArr = [...arr];

  position = 0;
  const maxLength = countryArr.length > 10 ? 10 : countryArr.length;
  let resu;

  //   console.log(maxLength);
  for (let i = 0; i < maxLength; i += 1) {
    // console.log('aa', countryArr[i].name.official);
    resultHTML += `<li><img src="${countryArr[i].flags.svg}" alt="flag"   height= "16px" width ="30px" > ${countryArr[i].name.official} </li>`;
  }
  //   console.log(resultHTML);

  return { position: position, HTML: resultHTML, l: countryArr.length };
}
