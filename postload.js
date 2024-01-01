document.getElementById("dtitle").innerHTML = INFO.eventname.toUpperCase();
document.getElementById("startdate").innerHTML = INFO.startdate;
document.getElementById("enddate").innerHTML = INFO.enddate;
document.getElementById("exception").innerHTML = INFO.exception;

let progressDiv = document.getElementById("progress");
let progressValueDiv = document.getElementById("progressvalue");

// Updating html
document.getElementById("percentagesection").style.filter = `hue-rotate(${Math.min(progressValue, 100) * 1.8}deg)`

document.getElementById("ddaysleft").innerHTML = daysUntilEnd + "*";
if (daysUntilEnd <= 1) {
    document.getElementById("plurial1ddaysleft").innerHTML = "";
    document.getElementById("plurial2ddaysleft").innerHTML = "";
}
document.getElementById("dday").innerHTML = daysSinceStart;
document.getElementById("dtotaldays").innerHTML = daysTotal;

if (weeksUntilEnd > 0) {
    document.getElementById("dweeksleft").innerHTML = weeksUntilEnd;
    if (weeksUntilEnd == 1) {
        document.getElementById("plurial1dweeksleft").innerHTML = "";
        document.getElementById("plurial2dweeksleft").innerHTML = "";
    }
    document.getElementById("dweek").innerHTML = weeksSinceStart;
    document.getElementById("dtotalweeks").innerHTML = weeksTotal;
}
else {
    document.getElementById("weeksection").innerHTML = `<h3 class="title">MOINS D'UNE SEMAINE RESTANTE !</h3>
        <hr>
        <h4  class="subtitle">${timeUntilEnd(endDate)}</h4>`;
    setInterval(() => {
        document.getElementById("weeksection").innerHTML = `<h3 class="title">MOINS D'UNE SEMAINE RESTANTE !</h3>
            <hr>
            <h4  class="subtitle">${timeUntilEnd(endDate)}</h4>`;
    }, 1000);
}

if (progressValue >= 100) {
    document.getElementById("daysection").style.display = "none";
    document.getElementById("weeksection").style.display = "none";
    document.getElementById("exception").style.display = "none";
}

let step=0, maxsteps = 70;
let transi = setInterval(() => {
    const progressTransi = step * Math.min(progressValue, 100) / maxsteps;
    progressValueDiv.textContent = `${Math.floor(progressTransi)}%`;
    progressDiv.style.background = `conic-gradient(
      var(--active) ${ progressTransi * 3.6}deg,
      var(--notactive) ${progressTransi * 3.6}deg
  )`;
    if (step >= maxsteps)
        clearInterval(transi);
    else
        step++;
}, 700 / maxsteps);
