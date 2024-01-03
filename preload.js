const INFO = {
    startdate: "2023-08-28",
    enddate: "2024-01-12 14:05:00",
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

// date
const regexStartDate = /s=\b\d{4}-\d{2}-\d{2}\b/;
const regexEndDate = /e=\b\d{4}-\d{2}-\d{2}\b/;
// time
const regexStartTime = /s=\b\d{4}-\d{2}-\d{2}%20\d{2}:\d{2}:\d{2}\b/;
const regexEndTime = /e=\b\d{4}-\d{2}-\d{2}%20\d{2}:\d{2}:\d{2}\b/;
// contains date
const matchStartDate = urlArgs.match(regexStartDate);
const matchEndDate = urlArgs.match(regexEndDate);
// contains time
const matchStartTime = urlArgs.match(regexStartTime);
const matchEndTime = urlArgs.match(regexEndTime);
if (matchStartTime)
    INFO.startdate = matchStartTime[0].replace("%20", " ").slice(2);
else if (matchStartDate)
    INFO.startdate = matchStartDate[0].slice(2);

if (matchEndTime)
    INFO.enddate = matchEndTime[0].replace("%20", " ").slice(2);
else if (matchEndDate)
    INFO.enddate = matchEndDate[0].slice(2);

const startDate = new Date(INFO.startdate);
const endDate = new Date(INFO.enddate);
const currentDate = new Date();

// Calculate days
const currentToEnd = endDate - currentDate;
const daysUntilEnd = Math.floor(currentToEnd / (1000 * 60 * 60 * 24)) + 1;
const startToCurrent = currentDate - startDate;
const daysSinceStart = Math.floor(startToCurrent / (1000 * 60 * 60 * 24)) + 1;

const startToEnd = endDate - startDate;
const daysTotal = Math.floor(startToEnd / (1000 * 60 * 60 * 24));

// Calculate weeks
const weeksUntilEnd = Math.floor(10*daysUntilEnd / 7)/10;
const weeksSinceStart = Math.floor(daysSinceStart / 7);
const weeksTotal = Math.floor(daysTotal / 7);

const progressValue = Math.floor(100 * daysSinceStart / daysTotal);

document.querySelector('meta[name="description"]').setAttribute("content", `Temps restant en Lituanie\nJour ${daysSinceStart} / ${daysTotal}\n${daysUntilEnd} jours restants (${progressValue}%)`);
document.querySelector('meta[property="og:description"]').setAttribute("content", `Temps restant en Lituanie\nJour ${daysSinceStart} / ${daysTotal}\n${daysUntilEnd} jours restants (${progressValue}%)`);

function timeUntilEnd(d) {
    function z(n) {
        return (n < 10 ? '0' : '') + n;
    }

    var diff = d - new Date();

    // Allow for previous times
    var sign = diff < 0 ? '-' : '';
    diff = Math.abs(diff);

    // Get time components
    var hours = diff / 3.6e6 | 0;
    var mins = diff % 3.6e6 / 6e4 | 0;
    var secs = Math.round(diff % 6e4 / 1e3);

    // Return formatted string
    return sign + z(hours) + 'h ' + z(mins) + 'm ' + z(secs) + 's restantes';
}