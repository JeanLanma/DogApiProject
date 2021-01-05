'use strict';

window.addEventListener('load', () => {
    console.log('script cargado');

    let buton = document.querySelector('#cambiar');
    let carga = document.querySelector('#cargando');
    let insert = document.querySelector('#insertar');

    console.log('iniciando conexion a api');

    data();

    buton.addEventListener('click', loadData);

    function data() {

        fetch('https://dog.ceo/api/breeds/image/random')
            .then(data => data.json())
            .then(data => {
                carga.style.display = 'none';

                let img = document.createElement('img');
                img.setAttribute('src', data.message);
                insert.append(img);
            })
    }

    function loadData() {

        insert.innerHTML = '';
        carga.style.display = 'block';
        data();
    }

});