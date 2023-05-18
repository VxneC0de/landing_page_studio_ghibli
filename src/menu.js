let boton = document.querySelector(".options");
let listMovil = document.querySelector(".menu-movil");

boton.addEventListener("click", () => {
    boton.classList.toggle("close");
    listMovil.classList.toggle("show");
});

listMovil.querySelectorAll("a").forEach((enlace) => {
    enlace.addEventListener("click", () => {
        listMovil.classList.remove("show");
        boton.classList.remove("close");
    });
});