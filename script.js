const dashboardDataPromise = fetch("./data.json");
const cells = document.querySelectorAll(".cell");
const timeframesBtns = document.querySelectorAll(".intro__content button");
dashboardDataPromise
  .then((response) => response.json())
  .then((data) => {
    let timeframeSelected = "weekly";

    timeframesBtns.forEach((timeframeBtn) => {
      timeframeBtn.addEventListener("click", () => {
        timeframeSelected = timeframeBtn.textContent.toLowerCase();
        removeBtnsColor();
        timeframeBtn.style.color = "#fff";
        for (let i = 0; i < cells.length; i++) {
          const cell = cells[i];
          const currentTime = cell.querySelector(".current-time");
          const previousTime = cell.querySelector(".previous-time");
          currentTime.textContent =
            data[i].timeframes[timeframeSelected].current;
          previousTime.textContent =
            data[i].timeframes[timeframeSelected].previous;
        }
      });
    });
  });

function removeBtnsColor() {
  timeframesBtns.forEach((btn) => {
    btn.style.color = "var(--pruple-500)";
  });
}
