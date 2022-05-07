const popup = document.querySelector('.popup-wrapper');
const close = document.querySelector('.popup-close');

// function init() {
//     const id = button.id;
//     fetch(`https://cudiaweb.herokuapp.com/api/comunidades/1`)
//         .then((response) => response.json())
//         .then((data) => (comunidad = data.data));

//     showpopup(comunidad.data);
//     console.log(comunidad);
// }


async function onRequestAwait() {
    try {
        const urlParams = new
            URLSearchParams(window.location.search);
        const id = urlParams.get("id");
        if (id) {
            const response = await fetch(`https://cudiaweb.herokuapp.com/api/comunidades/${id}`);
            const comunidad = await response.json();
            showpopup(comunidad.data);
        }

        showpopup(comunidad.data);
        console.log(comunidad.data)
    } catch (error) {
        console.log(error)
    }
}

function showpopup(comunidad) {
    popup.style.display = 'block';

    var settings2 = {
        "url": "https://cudiaweb.herokuapp.com/api/comunidades/" + comunidad,
        "method": "GET",
        "timeout": 0,
    };
    $.ajax(settings2).done(function (response) {
        const name = document.getElementById("comunidad");
        name.textContent = response.data.attributes.nombre;
    });

    var settings = {
        "url": "https://cudiaweb.herokuapp.com/api/protectoras?filters[$and][0][comunidad][$eq]=" + comunidad,
        "method": "GET",
        "timeout": 0,
    };

    const list = document.getElementById("lista");
    list.innerHTML = "<tr><th>Nombre</th><th>Página Web</th></tr>";

    $.ajax(settings).done(function (response) {

        for (var i = 0; i < Object.keys(response).length; i++) {
            const row = document.createElement("tr");

            const name = document.createElement("td");
            const web = document.createElement("td");
            const link = document.createElement("a");

            name.textContent = response.data[i].attributes.nombre
            link.href = response.data[i].attributes.web
            link.textContent = "acceder";
            link.target = "_blank";
            web.style.textalign = "center";
            //console.log(response.data[i].attributes.nombre);
            web.appendChild(link);
            row.appendChild(name);
            row.appendChild(web);
            list.appendChild(row);
        }
    });

}

close.addEventListener('click', () => {
    popup.style.display = 'none';
    const list = document.getElementById("lista");
    list.innerHTML = "";
});

popup.addEventListener('click', e => {
    if (e.target.className === 'popup-wrapper') {
        const list = document.getElementById("lista");
        popup.style.display = 'none';
        list.innerHTML = "";
    }
});

