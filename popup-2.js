const popup = document.querySelector('.popup-wrapper');
const close = document.querySelector('.popup-close');

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
        "url": "https://cudiaweb.herokuapp.com/api/veterinarios?filters[$and][0][comunidad][$eq]=" + comunidad,
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

