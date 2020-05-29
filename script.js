function triggerClick(element) {
  const clickEvent = new Event("click");
  element.dispatchEvent(clickEvent);
}

function main() {
  let currentCountryName = document
    .getElementById("currQuestion")
    .innerText.slice(11);
  console.log(currentCountryName);
  while (currentCountryName !== "") {
    currentCountryName = document
      .getElementById("currQuestion")
      .innerText.slice(11);
    idCurrentCountry = $(`[data-qText="${currentCountryName}"]`).attr("id");

    triggerClick(document.getElementById(idCurrentCountry));
  }
}
