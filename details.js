const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

async function init() {
    try {
        const response = await fetch(`https://cudiaweb.herokuapp.com/api/animales/${id}`);

        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }
        const data = await response.json();
        

        printData(data.data);
        console.log(data);

    } catch (error) {
        console.log(error);
    }
}

function printData(data) {

    const title = document.getElementById("titulo");
    const text = document.getElementById("texto");
    var md = new Remarkable();

    title.textContent = data.attributes.nombre;
    text.innerHTML = md.render(data.attributes.info);
    
}

init();