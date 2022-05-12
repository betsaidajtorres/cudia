const peso = localStorage.getItem("peso");
const cantidad = localStorage.getItem("number");
async function init() {
  try {
    const response = await fetch(
      "https://cudiaweb.herokuapp.com/api/aerolineas?filters[$and][0][peso][$contains]=" +
        peso +
        "&filters[$and][1][cantidad][$eq]=" +
        cantidad
    );
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    const data = await response.json();
    printData(data.data);
  } catch (error) {
    console.log(error);
  }
}

function printData(data) {
  const avion = document.getElementById("avion");
  const coche = document.getElementById("coche");
  const tren = document.getElementById("tren");

  for (const info of data) {
    if (info.attributes.tipo === "avion") {
      const texto = document.createElement("p");
      texto.textContent = info.attributes.nombre;
      avion.appendChild(texto);
    }
    if (info.attributes.tipo === "coche") {
      const texto = document.createElement("p");
      texto.textContent = info.attributes.nombre;
      coche.appendChild(texto);
    }
    if (info.attributes.tipo === "tren") {
      const texto = document.createElement("p");
      texto.textContent = info.attributes.nombre;
      tren.appendChild(texto);
    }
  }
}

const provincia = localStorage.getItem("city");

async function inicio() {
  try {
    const response = await fetch(
      "https://cudiaweb.herokuapp.com/api/alojamientos?filters[$and][0][provincia][$contains]=" +
        provincia
    );
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    const datos = await response.json();

    printalojamientos(datos.data);
  } catch (error) {
    console.log(error);
  }
}

function printalojamientos(data) {
  const title = document.getElementById("alojamientos");
  const resultados = document.getElementById("verinfo");

  for (const info of data) {
    const texto = document.createElement("p");
    const web = document.createElement("a");
    texto.textContent = info.attributes.nombre;
    web.href = info.attributes.web;
    web.textContent = "Reservar";
    resultados.appendChild(texto);
    resultados.appendChild(web);
  }
}
init();
inicio();
