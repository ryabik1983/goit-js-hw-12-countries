import refs from './refs';
import debounce from 'lodash.debounce';
import fetchCountries from './fetchCountries';

refs.input.addEventListener(
    'input', debounce((e) => {
      console.log(e.target.value);
        let inputValue = e.target.value;
        let searchQuery =  inputValue;
        fetchCountries(searchQuery)
        .then((data) => {console.log ('data', data)});
}
, 3000));
  
