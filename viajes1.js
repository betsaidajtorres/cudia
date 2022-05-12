var number = "";
function uno() {
  number = "1";
  savenumber();
}

function dos() {
  number = "2";
  savenumber();
}
function mas() {
  number = "mas";
  savenumber();
}

function savenumber() {
  localStorage.setItem("number", number);
  window.location.href = "/viajes2.html";
}
