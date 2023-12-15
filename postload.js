document.getElementById("dtitle").innerHTML = INFO.eventname.toUpperCase();
document.getElementById("startdate").innerHTML = INFO.startdate;
document.getElementById("enddate").innerHTML = INFO.enddate;
document.getElementById("exception").innerHTML = INFO.exception;

let progressDiv = document.getElementById("progress");
let progressValueDiv = document.getElementById("progressvalue");

// Updating html
document.getElementById("percentagesection").style.filter = `hue-rotate(${Math.min(progressValue, 100) * 1.8}deg)`

document.getElementById("ddaysleft").innerHTML = daysUntilEnd + "*";
document.getElementById("dday").innerHTML = daysSinceStart;
document.getElementById("dtotaldays").innerHTML = daysTotal;

document.getElementById("dweeksleft").innerHTML = weeksUntilEnd;
document.getElementById("dweek").innerHTML = weeksSinceStart;
document.getElementById("dtotalweeks").innerHTML = weeksTotal;

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
