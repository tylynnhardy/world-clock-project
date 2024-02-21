function displayTime() {
  let phoenixElement = document.querySelector("#phoenix");
  if (phoenixElement) {
    let phoenixDateElement = phoenixElement.querySelector(".date");
    let phoenixTimeElement = phoenixElement.querySelector(".time");
    let phoenixTime = moment().tz("America/Phoenix");

    phoenixDateElement.innerHTML = phoenixTime.format("MMMM	Do YYYY");
    phoenixTimeElement.innerHTML = phoenixTime.format(
      "h:mm:ss [<small>]a[</small>]"
    );
  }

  let puertoRicoElement = document.querySelector("#puerto-rico");
  if (puertoRicoElement) {
    let puertoRicoDateElement = puertoRicoElement.querySelector(".date");
    let puertoRicoTimeElement = puertoRicoElement.querySelector(".time");
    let puertoRicoTime = moment().tz("America/Puerto_Rico");

    puertoRicoDateElement.innerHTML = puertoRicoTime.format("MMMM	Do YYYY");
    puertoRicoTimeElement.innerHTML = puertoRicoTime.format(
      "h:mm:ss [<small>]a[</small>]"
    );
  }
}

function displayCity (event) {
    let cityTimeZone = event.target.value;
    if(cityTimeZone === "current"){
        cityTimeZone = moment.tz.guess();
    }
    let cityName = cityTimeZone.replace("_", " ").split("/")[1];
    let cityTime = moment().tz(cityTimeZone);
    let cityElement = document.querySelector("#city");
    cityElement.innerHTML = `<div class="cities" id="phoenix">
                <h2>${cityName}</h2>
                <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
                <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format("a")}</small>
                </div>
                </div>
                <div>
                <a href="index.html">Home page</a>
                </div>`;

}

displayTime();
setInterval(displayTime, 1000);

let citySelect = document.querySelector("#city-select");
citySelect.addEventListener ("change", displayCity);
