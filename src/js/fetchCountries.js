export default class ApiCountries {
  constructor() {
    this.searchName = '';
    this.filter = '?fields=name,capital,population,languages,flags';
  }

  fetchCountries() {
    const endpoint = `https://restcountries.com/v3.1/name/`;
    const URL = `${endpoint}${this.searchName}${this.filter}`;
    

    return fetch(URL)
      .then(data => {
        return data.json();
      })
      .then(countries => {
        return countries;
      });
  }
}
