let boton = document.getElementById("options");
let listMovil = document.getElementById("menu-movil");
console.log(boton) 

boton.addEventListener("click", () => {
    boton.classList.toggle("close");
    listMovil.classList.toggle("show");
    console.log(listMovil);
    })

listMovil.addEventListener("click", e =>{
    if (menu.id === "listMovil"){
        listMovil.classList.remove("show");
        boton.classList.remove("close");
    }
})