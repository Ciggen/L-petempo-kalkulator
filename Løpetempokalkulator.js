// Løpetempokalkulator.js
function kalkuler() {
  document.getElementById("tempo").innerText = "";
  document.getElementById("hastighet").innerText = "";
  var timer = document.getElementById("timer").value || 0;
  var minutter = document.getElementById("minutter").value || 0;
  var sekunder = document.getElementById("sekunder").value || 0;
  var avstand = document.getElementById("avstand").value;
  var enhet = document.getElementById("enhet").value;

  // Sjekker om alle tidsfeltene er tomme eller inneholder ugyldige tegn
  if (
    isNaN(timer) ||
    isNaN(minutter) ||
    isNaN(sekunder) ||
    timer < 0 ||
    minutter < 0 ||
    sekunder < 0
  ) {
    document.getElementById("feilmelding").innerText =
      "Tid kan kun bestå av positive tall";
    return;
  }

  // Sjekker om avstandsfeltet er tomt, inneholder ugyldige tegn, er negativt eller er lik null
  if (isNaN(avstand) || avstand <= 0) {
    document.getElementById("feilmelding").innerText =
      "Avstanden må være et positivt tall";
    return;
  }

  // Sjekker om alle tidsfeltene er tomme
  if (timer == 0 && minutter == 0 && sekunder == 0) {
    document.getElementById("feilmelding").innerText =
      "Tidfeltene må ha en verdi";
    return;
  }

  document.getElementById("feilmelding").innerText = "";

  var totalTid =
    parseInt(timer) * 3600 + parseInt(minutter) * 60 + parseInt(sekunder); // Total tid i sekunder
  var totalAvstand = parseFloat(avstand);

  if (enhet === "m") {
    totalAvstand /= 1000; // konverterer til kilometer
  } else if (enhet === "mi") {
    totalAvstand *= 1.60934; // konverterer til kilometer
  }

  var tempo = totalTid / totalAvstand; // tid per kilometer i sekunder
  var hastighet = totalAvstand / (totalTid / 3600); // avstand per time i kilometer

  var tempoTimer = Math.floor(tempo / 3600);
  var tempoMinutter = Math.floor((tempo % 3600) / 60);
  var tempoSekunder = Math.floor((tempo % 3600) % 60);

  var tempoStr = `${tempoTimer > 0 ? tempoTimer + ":" : ""}${tempoMinutter}:${
    tempoSekunder < 9 ? "0" + tempoSekunder : tempoSekunder
  } per kilometer`;
  document.getElementById("tempo").innerText = `Tempo: ${tempoStr}`;
  document.getElementById(
    "hastighet"
  ).innerText = `Hastighet: ${hastighet.toFixed(2)} km/h`;
}

function fyllInnMaraton() {
  document.getElementById("avstand").value = 42195;
  document.getElementById("enhet").value = "m";
}

function fyllInnHalvmaraton() {
  document.getElementById("avstand").value = 21097.5;
  document.getElementById("enhet").value = "m";
}

function fyllInnEngelskMil() {
  document.getElementById("avstand").value = 1;
  document.getElementById("enhet").value = "mi";
}
