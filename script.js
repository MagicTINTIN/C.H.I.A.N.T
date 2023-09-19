let progressDiv = document.getElementById("progress");
let progressValueDiv = document.getElementById("progressvalue");

let progressValue = 14;

progressValueDiv.textContent = `${progressValue}%`;
progressDiv.style.background = `conic-gradient(
      var(--active) ${progressValue * 3.6}deg,
      var(--notactive) ${progressValue * 3.6}deg
  )`;
