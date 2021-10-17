// const BASE_URL = 'https://restcountries.com/v2/name/';
// export default function fetchCountries(searchQuery){
//     return fetch(`${BASE_URL}${searchQuery}`).then(response => response.json());
// };
// console.log('Hello!');
// const promise = new Promise ((resolve, reject) => {
// const canFullFill = Math.random() > 0.5;
// setTimeout(() => {
//     if (canFullFill) {
//         resolve('fullfilled');
//     }
//     reject ('rejected');
//     }, 3000);
// });

// // promise.then(onFullfilled, onRejected  
// // );

// function onFullfilled (result) {
//     console.log('onFullfilled');
//     console.log(result);
// };

// function onRejected (error) {
//     console.log('onRejected');
//     console.log(error);
// };
// promise
// .then(onFullfilled)
// .then(
//     x => {
//     console.log(x);
//     return 10;
// })
// .then(
//     y => {
//     console.log(y)
// })
// .catch(error => console.log(error))
// .finally(() => console.log('Always'));
// console.log(promise);

// function makeOrder (dish) {
// const DELAY = 1000;
// setInterval(() => {
//     console.log(dish);
// }, DELAY);
// }
// makeOrder(`пирожок`);
fetch ('https://restcountries.com/v2/name/s')
.then(r =>{
    console.log('result', r);
    return r.json();
}
    )
.then((data) => {console.log ('data', data)});

