/** Scroll to top */
const scrollOffset = 40;
const duration = 500;

const scrollTopButton = document.querySelector(".progress-wrap");
const progressPath = scrollTopButton.querySelector("path");
const pathLength = progressPath.getTotalLength();

progressPath.style.transition = progressPath.style.WebkitTransition = "none";
progressPath.style.strokeDasharray = pathLength + " " + pathLength;
progressPath.style.strokeDashoffset = pathLength;
progressPath.getBoundingClientRect();
progressPath.style.transition = progressPath.style.WebkitTransition =
  "stroke-dashoffset 10ms linear";

const updateProgress = () => {
  const h = document.documentElement,
    b = document.body,
    st = "scrollTop",
    sh = "scrollHeight";
  const progress = pathLength - pathLength * (h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight);
  progressPath.style.strokeDashoffset = progress;
};

const onScroll = () => {
  updateProgress();

  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollTopButton.classList.add("active-progress");
  } else {
    scrollTopButton.classList.remove("active-progress");
  }
};

scrollTopButton.onclick = () => {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
};

window.onscroll = onScroll;
