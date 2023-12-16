const INFO = {
    startdate: "2023-08-28",
    enddate: "2024-01-19",
    eventname: "En Lituanie",
    exception: "(*) Le nombre de jours peut être réduit dans le meilleur de cas ou allongé si la mère patrie la Russie décide de faire tout péter (ou autre connerie du genre) :p"
}

let urlArgs = window.location.href.slice(window.location.href.indexOf('?') + 1);
if (urlArgs == "meh")
    INFO.enddate = "2024-01-26";
if (urlArgs == "new")
    INFO.enddate = "2024-01-19";
if (urlArgs == "old")
    INFO.enddate = "2024-01-31";

const regexStart = /s=\b\d{4}-\d{2}-\d{2}\b/;
const regexEnd = /e=\b\d{4}-\d{2}-\d{2}\b/;
const matchStart = urlArgs.match(regexStart);
const matchEnd = urlArgs.match(regexEnd);
if (matchStart)
    INFO.startdate = matchStart[0].slice(2);
if (matchEnd)
    INFO.enddate = matchEnd[0].slice(2);

const startDate = new Date(INFO.startdate);
const endDate = new Date(INFO.enddate);
const currentDate = new Date();

// Calculate days
const currentToEnd = endDate - currentDate;
const daysUntilEnd = Math.floor(currentToEnd / (1000 * 60 * 60 * 24));

const startToCurrent = currentDate - startDate;
const daysSinceStart = Math.floor(startToCurrent / (1000 * 60 * 60 * 24)) + 1;

const startToEnd = endDate - startDate;
const daysTotal = Math.floor(startToEnd / (1000 * 60 * 60 * 24));

// Calculate weeks
const weeksUntilEnd = Math.floor(daysUntilEnd / 7);
const weeksSinceStart = Math.floor(daysSinceStart / 7);
const weeksTotal = Math.floor(daysTotal / 7);

const progressValue = Math.floor(100 * daysSinceStart / daysTotal);

document.querySelector('meta[name="description"]').setAttribute("content", `Temps restant en Lituanie\nJour ${daysSinceStart} / ${daysTotal}\n${daysUntilEnd} jours restants (${progressValue}%)`);
document.querySelector('meta[property="og:description"]').setAttribute("content", `Temps restant en Lituanie\nJour ${daysSinceStart} / ${daysTotal}\n${daysUntilEnd} jours restants (${progressValue}%)`);