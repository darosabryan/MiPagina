const nav =document.querySelector('nav');
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click",() => {
    nav.classList.add("visible");
})

cerrar.addEventListener("click",() => {
    nav.classList.remove("visible");
})

var toggle = document.getElementById('cajaColor');
var main = document.querySelector('main');
var bool = false;

const radio2 = document.getElementById('radioQuienSoy');
const radio3 = document.getElementById('radioBio');
const radio4 = document.getElementById('radioContacto');
const check = document.getElementById('checkColor');

function refresh(){
    if(bool === false){
     bool = true;

    }else{
     bool = false;

    }
 document.getElementById('quienSoy').classList.remove("styleBlack","styleWhite");
 document.getElementById('Bio').classList.remove("styleBlack","styleWhite");
 document.getElementById('contacto').classList.remove("styleBlack","styleWhite");

}

toggle.onclick = function(){
    toggle.classList.toggle('active');
    main.classList.toggle('active');
    refresh();

}

function changeColor(){
    
    if(bool === false){
        if(radio2.checked){
            document.getElementById('quienSoy').classList.add("styleBlack");        
            location.href = "#quienSoy";
        }else{
            document.getElementById('quienSoy').classList.remove("styleBlack");        
        
        }

        if(radio3.checked){
            document.getElementById('Bio').classList.add("styleBlack");        
            location.href = "#Bio";
        }else{
            document.getElementById('Bio').classList.remove("styleBlack");        
        
        }

        if(radio4.checked){
            document.getElementById('contacto').classList.add("styleBlack");        
            location.href = "#contacto";
        }else{
            document.getElementById('contacto').classList.remove("styleBlack");        
        
        }

    
    }else{
        if(radio2.checked){
            document.getElementById('quienSoy').classList.add("styleWhite");        
            location.href = "#quienSoy";
        }else{
            document.getElementById('quienSoy').classList.remove("styleWhite");        
    
        }

        if(radio3.checked){
            document.getElementById('Bio').classList.add("styleWhite");        
            location.href = "#Bio";
        }else{
            document.getElementById('Bio').classList.remove("styleWhite");        
        
        }

        if(radio4.checked){
            document.getElementById('contacto').classList.add("styleWhite");        
            location.href = "#contacto";
        }else{
            document.getElementById('contacto').classList.remove("styleWhite");        
        
        }

    }

}

function irCabecera(){
    location.href = "#home";

}