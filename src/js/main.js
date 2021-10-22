
import debounce from 'lodash.debounce';
import fetchCountries from './fetchCountries';
import '../templates/contry-card-markup.hbs';
import '../templates/countries-list-markup.hbs';
import { onError, onOutputInfo, onNoCountry } from './notify';

import refs from './refs';
const {input, clearBtn, countriesList} = refs;

import countriesListMarkupTemplates from '../templates/countries-list-markup.hbs';
import countryCardMarkupTemplates from '../templates/contry-card-markup.hbs';

input.addEventListener('input', debounce(onSearch, 500));

clearBtn.addEventListener('click', onClearCountries)

function onSearch () {
  if (input.value.trim() === ""){
    return onError();
  }
  fetchCountries (input.value)
  .then(countries => {
    onCountrySearch(countries);
    console.log('data', countries);
  })
  }

function onCountrySearch (countries) {
  if(countries.length === 1) {
    onAppendCountriesCard (countries)
      }
  else if (countries.length >= 2 && countries.length <= 10){
    onAppendListCountries(countries);
  }
  else if (countries.length > 10) {
    return onOutputInfo(); 
  }
  else if (countries.status === 404){
    return onNoCountry();
    
  }
  else {
    return onError();
  }

};

function onClearCountries () {
input.value = '';
countriesList.innerHTML = "";
console.log('нажали кнопку очистить!');
}
 
function onAppendListCountries(countries) {
  countriesList.insertAdjacentHTML('beforeend', countriesListMarkupTemplates(countries));
  document.querySelector('.countries-list').addEventListener('click', onTargetValue);
}


function onAppendCountriesCard (countries) {
  countriesList.insertAdjacentHTML('beforeend', countryCardMarkupTemplates(countries))
}
function onTargetValue (e) {
  if(e.target.nodeName !== "LI"){
    return;
  }
  fetchCountries(e.target.textContent).then(onCountrySearch)
};

  
