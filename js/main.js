let boton = document.getElementById("icono");
let cerrar = document.getElementById("cerrar");
let enlaces = document.getElementById("enlaces");
let contenedor = document.getElementById("contenedor");
let timeline1 = document.getElementById("timeline1");
let timeline2 = document.getElementById("timeline2");
let galeria = document.getElementById("galeria");
let contador = 0;

boton.addEventListener("click", function(e) {
    e.preventDefault();
    if (contador == 0) {
        enlaces.className = ("enlaces dos");
        if(contenedor != null) contenedor.className =("contenedor desaparecer");
        if(timeline1 != null) timeline1.className =("timeline1 desaparecer");
        if(timeline2 != null) timeline2.className =("timeline2 desaparecer");
        if(galeria != null) galeria.className =("timeline1 desaparecer");
        boton.style.color = "white";
        contador = 1;
    } 
})

cerrar.addEventListener("click", function(e) {
    e.preventDefault();
   
        enlaces.classList.remove("dos");
        enlaces.className = ("enlaces uno");
        if(contenedor != null){contenedor.classList.remove("desaparecer");
        contenedor.className =("contenedor aparecer");}
        if(timeline1 != null) timeline1.className =("timeline1 aparecer");
        if(timeline2 != null) timeline2.className =("timeline2 aparecer");
        if(galeria != null) galeria.className =("timeline1 aparecer");
        boton.style.color = "black";
        contador = 0;
    
})