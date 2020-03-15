const burger = document.querySelector('.burger');
const navlinks = document.querySelector('.nav-links');
const navli = document.querySelector(".nav-links li")

burger.onclick = () => {
    navlinks.classList.toggle("nav-click");
    burger.classList.toggle("burger-click");

    navlinks.forEach(link, index => {
        if (link.style.animation) {
            link.style.animation = "";
        } else
            link.style.animation = `navlinkanimation 0.5s ease forwards ${index/5+0.5}s`
    });
}