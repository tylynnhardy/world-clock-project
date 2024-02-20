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
displayTime();
setInterval(displayTime, 1000);
