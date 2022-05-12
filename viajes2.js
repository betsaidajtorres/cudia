function saveanimal() {
  var checkboxes = document.getElementsByClassName("animal");
  const animales = [];

  for (const checkbox of checkboxes) {
    if (checkbox.checked) {
      animales.push(checkbox.value);
    }
    console.log(checkbox);
  }
  console.log(animales);
  localStorage.setItem("animal", animales);
  window.location.href = "/viajes3.html";
}
