const scrollButton = document.getElementById("scrollButton");

window.onscroll = function() {

  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollButton.style.display = "block";
  } else {
    scrollButton.style.display = "none";
  }
};

scrollButton.addEventListener("click", scrollUp);

function scrollUp() {
  const scrollDuration = 500; 
  const scrollStep = -window.scrollY / (scrollDuration / 15); 

  const scrollInterval = setInterval(function() {
    if (window.scrollY !== 0) {
      window.scrollBy(0, scrollStep);
    } else {
      clearInterval(scrollInterval);
    }
  }, 15);
}

