   
    window.addEventListener("scroll", function() {
    var topBar = document.querySelector(".top-bar");
    if (window.scrollY > 800) {
        topBar.classList.add("scrolled");
    } else {
        topBar.classList.remove("scrolled");
    }
});
   
