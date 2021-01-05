let myArray = ['Elemento1', 'Elemento2'];
let urlBase = 'https://dog.ceo/api/breeds/image/random';

let loader = $('#loader');

let getDataApi = function() {
    fetch(urlBase)
        .then(data => data.json())
        .then(data => {

            let imagen = data.message;

            let imgTag = document.createElement('img');

            imgTag.setAttribute('src', imagen);

            $('#loader').append(imgTag);
            print(imgTag);

        })
        .catch(err => print(err))
}

getDataApi();
// Otra sentencia


const print = console.log;

const $ = function(selector) {
    return document.querySelector(selector) || false;
}