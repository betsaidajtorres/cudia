function savedate() {
  localStorage.setItem(
    "datepicker",
    document.getElementById("datepicker").value
  );
  window.location.href = "/viajes5.html";
}
