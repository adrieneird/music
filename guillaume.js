window.addEventListener("DOMContentLoaded", () => {
    const carre = document.querySelector(".guillaume");
        const faisceau = document.querySelector(".faisceau_guillaume");
    let isImage1 = true;

    setInterval(() => {
        if (isImage1) {
            carre.style.backgroundImage = `url(pixel_svg.svg)`;
            const faisceau = document.querySelector(".faisceau_guillaume");
            isImage1 = false;
        } else {
            carre.style.backgroundImage = `url(image_pixel.png)`;
            const faisceau = document.querySelector(".faisceau_guillaume");
            isImage1 = true;
        }
    }, 500);

});

