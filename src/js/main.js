
import debounce from 'lodash.debounce';
import fetchCountries from './fetchCountries';
import '../templates/contry-card-markup.hbs';
import '../templates/countries-list-markup.hbs';
import { onError } from './notify';

import refs from './refs';
const {input, clearBtn, countriesList} = refs;

import countriesListMarkupTemplates from '../templates/countries-list-markup.hbs';
import countryCardMarkupTemplates from '../templates/contry-card-markup.hbs';

input.addEventListener(
    'input', debounce((e) => {
      console.log(e.target.value);
        let inputValue = e.target.value;
        let searchQuery =  inputValue;
        fetchCountries(searchQuery)
        .then((data) => {
        console.log ('data', data);
        onAppendCountriesList (data)});
        ;
}
, 3000));
clearBtn.addEventListener('click', onClearCountries)

function onSearch () {
  fetchCountries (input.value)
  .then(countries => onCountrySearch(countries))
  }

function onCountrySearch (countries) {
  if(countries.length === 1) {
    onClearCountries();

  }
  else if (countries.length >= 2 && countries.length <= 10){
    onClearCountries();
  }
  else if (countries.length > 10) {
    return onOutputInfo(); 
  }
  else if (countries.status === 404){
    return onError();
  }
  else {
    return onError();
  }
  
}
  
function onClearCountries () {
input.value = '';
countriesList.innerHTML = '';
}

function onAppendCountriesList (countries) {
  countriesList.insertAdjacentHTML('beforeend', countryCardMarkupTemplates(countries))
  
}


  
