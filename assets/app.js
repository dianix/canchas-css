var botonFut = document.getElementById("fut");
var botonBasket = document.getElementById("basket");
var botonTenis = document.getElementById("tenis");

var canchaFut = document.getElementById("canchaFutbol");
var canchaBasket = document.getElementById("canchaBasketball");
var canchaTenis = document.getElementById("canchaTennis");


/*var botones = document.getElementsByClassName("botones");
var canchas = document.getElementsByClassName("canchas");
console.log(canchas);*/

function detectarBoton(event){
    switch(event.toElement){
        case botonFut:
            if(event.detail == 1){
               mostrarCancha(canchaFut); 
            } else if(event.detail == 2){
               ocultarCancha(canchaFut); 
            }
            break;
        case botonBasket:
            if(event.detail == 1){
               mostrarCancha(canchaBasket); 
            } else if(event.detail == 2){
               ocultarCancha(canchaBasket); 
            }
            break;
        case botonTenis:
            if(event.detail == 1){
               mostrarCancha(canchaTenis); 
            } else if(event.detail == 2){
               ocultarCancha(canchaTenis); 
            }
            break;
    }
}



function mostrarCancha(cancha){
    console.log(event);
    cancha.style.display = "block";
}

function ocultarCancha(cancha){
    cancha.style.display = "none";
}

//botonFut.addEventListener("click",mostrarCancha);
//botonFut.addEventListener("dblclick",ocultarCancha);

botonFut.addEventListener("click",detectarBoton);
botonBasket.addEventListener("click",detectarBoton);
botonTenis.addEventListener("click",detectarBoton);
