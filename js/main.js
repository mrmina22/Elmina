let ourSkills = document.getElementById("our-skills");
let stats = document.getElementById("stats");
let functionStarted = false;
window.onscroll = function () {
  // window.scrollY represents the number of pixels the page has been scrolled vertically
  // ourSkills.offsetTop gives the distance from the top of the page to the top of the #our-skills element
  // We subtract 300 to trigger the animation slightly before the #our-skills element comes into view
  // so i told it when we scrolled to ourSkills - 300 it will start to run
  if (window.scrollY >= ourSkills.offsetTop - 300) {
    document
      .querySelectorAll(
        ".our-skills .container .skills .skill .the-progress span"
      )
      .forEach((el) => {
        el.style.width = el.dataset.goal;
      });
  }
};
function StatsInc(el) {
  functionStarted = true;
  el.forEach((el) => {
    let goal = el.dataset.goal;
    let count = setInterval(() => {
      el.textContent++;
      console.log(el.textContent);
      console.log(goal);
      if (el.textContent == goal) {
        clearInterval(count);
      }
    }, 20);
  });
}
window.onscroll = function () {
  if (window.scrollY >= stats.offsetTop - 300) {
    if (!functionStarted) {
      StatsInc(document.querySelectorAll(".stats .container .box .number"));
    }
  }
};
