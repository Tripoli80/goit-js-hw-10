import generator from './html-generator';
import API from './fetchCountries';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import '../sass/index.scss';

const debounce = require('lodash.debounce'); //подгружаем библиотеку тормозов

const searchcountry = new API();

const refs = {
  input: document.querySelector('#search-box'),
  ul: document.querySelector('.country-list'),
  card: document.querySelector('.country-info'),
};

refs.input.addEventListener(
  'input',
  debounce(e => {
    searchCountry(e);
  }, 300)
);

function searchCountry(e) {
  e.target.value = e.target.value.trim();
  searchcountry.searchName = e.target.value;
  searchcountry
    .fetchCountries()
    .then(c => {
      appendHTML(generator(c));
    })
    .catch(resetHTML);
}

function appendHTML({ position, HTML, l }) {
  if (l > 10) {
    notify('i');
    return;
  }
  position === 0 ? appLi(HTML) : appCard(HTML);
}

function appCard(html) {
  refs.ul.innerHTML = '';
  refs.card.innerHTML = html;
}
function appLi(html) {
  refs.card.innerHTML = '';
  refs.ul.innerHTML = html;
}

function resetHTML() {
  refs.card.innerHTML = '';
  refs.ul.innerHTML = '';
  notify('e');
}

function notify(res) {
  switch (res) {
    case 's':
      Notify.success('Successfully loaded');
      break;
    case 'e':
      Notify.failure('Oops, there is no country with that name');
      break;

    case 'w':
      Notify.warning('Memento te hominem esse');
      break;

    case 'i':
      Notify.info('Too many matches found. Please enter a more specific name.');
  }
}