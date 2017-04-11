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
            //alert("fut");
            mostrarCancha(canchaFut);
            break;
            
        case botonBasket:
            mostrarCancha(canchaBasket);
            break;
            
        case botonTenis:
            mostrarCancha(canchaTenis);
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
