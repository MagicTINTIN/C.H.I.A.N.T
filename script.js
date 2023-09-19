const INFO = {
    startdate: "2023-08-28",
    enddate: "2024-01-31",
    eventname: "En Lituanie"
}
document.getElementById("dtitle").innerHTML = INFO.eventname.toUpperCase();
document.getElementById("startdate").innerHTML = INFO.startdate;
document.getElementById("enddate").innerHTML = INFO.enddate;


let progressDiv = document.getElementById("progress");
let progressValueDiv = document.getElementById("progressvalue");

const startDate = new Date(INFO.startdate);
const endDate = new Date(INFO.enddate);
const currentDate = new Date();

// Calculate days
const currentToEnd = endDate - currentDate;
const daysUntilEnd = Math.floor(currentToEnd / (1000 * 60 * 60 * 24));

const startToCurrent = currentDate - startDate;
const daysSinceStart = Math.floor(startToCurrent / (1000 * 60 * 60 * 24));

const startToEnd = endDate - startDate;
const daysTotal = Math.floor(startToEnd / (1000 * 60 * 60 * 24));

// Calculate weeks
const weeksUntilEnd = Math.floor(daysUntilEnd / 7);
const weeksSinceStart = Math.floor(daysSinceStart / 7);
const weeksTotal = Math.floor(daysTotal / 7);

const progressValue = Math.floor(100 * daysSinceStart / daysTotal);

// Updating html
document.getElementById("percentagesection").style.filter = `hue-rotate(${Math.min(progressValue, 100) * 1.8}deg)`

document.getElementById("ddaysleft").innerHTML = daysUntilEnd;
document.getElementById("dday").innerHTML = daysSinceStart;
document.getElementById("dtotaldays").innerHTML = daysTotal;

document.getElementById("dweeksleft").innerHTML = weeksUntilEnd;
document.getElementById("dweek").innerHTML = weeksSinceStart;
document.getElementById("dtotalweeks").innerHTML = weeksTotal;

if (progressValue >= 100) {
    document.getElementById("daysection").style.display = "none";
    document.getElementById("weeksection").style.display = "none";
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
