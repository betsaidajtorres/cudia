var peso = "";
function peque() {
  peso = "menor igual 8 kg";
  saveweight();
}
function medio() {
  peso = "menor igual 10 kg";
  saveweight();
}
function grande() {
  peso = "mas de 10 kg";
  saveweight();
}

function saveweight() {
  localStorage.setItem("peso", peso);
  window.location.href = "/viajes4.html";
}
