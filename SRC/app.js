// code for the smooth scrolling of the page
const scrollSp = 30;
window.addEventListener(
    "scroll",
    () => {
        const currentPos = window.pageYOffset;

        setTimeout(() => {
            const newPos = window.pageYOffset;

            const distance = Math.abs(newPos - currentPos);
            const time = (distance / scrollSp) * 1000;

            window.scrollTo({
                top: newPos,
                behaviour: "smooth",
                duration: time,
            });
        });
    },
    100
);

//function for the sticky behaviour of the navbar
window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});
