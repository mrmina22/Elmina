let scroller = document.createElement("div");
scroller.classList.add("scroller");
scroller.style.position = "fixed";
scroller.style.top = "0";
scroller.style.left = "0";
scroller.style.height = "5px";
scroller.style.width = "0";
scroller.style.background = "#2196f3";
scroller.style.zIndex = "1000";
document.body.prepend(scroller);

window.addEventListener("scroll", function () {
  let scrollTop = document.documentElement.scrollTop;
  let height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  // we subtracted the clintgetHeight from the scrollHeight bec its not considered from the scrolled area,
  // i mean we want the prog to end and not consider the clint hight 
  scroller.style.width = `${(scrollTop / height) * 100}%`;
});
