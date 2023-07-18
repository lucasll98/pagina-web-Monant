function enviarForm(){
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var comentario = document.getElementById("comentario").value; 
    var checkbox1 = document.getElementById("checkbox1");
    var checkbox2 = document.getElementById("checkbox2");
       
    if(checkbox1.checked && checkbox2.checked){
       var check1= checkbox1.value;
        var check2 =checkbox2.value;
    }
    if(nombre == "" || email == "" || comentario == "" || check1 != "ok" || check2 !="ok"){
        alert("Debes completar todos los campos!");

    }else{
        console.log("Nombre: " , nombre , ". Email: " , email , ". Comentario: " , comentario);
        alert("Enviaste el formulario con Éxito!");
    }
    
    return false;
}


function buscarViaje(){
    

    return false;
} 

function crearViaje(){

    return false;
}



function enviarRegistro(){
    var nombre = document.getElementById("nombreRegistro").value;
    var contra = document.getElementById("contraRegistro").value;
    var email = document.getElementById("emailRegistro").value;
    var ciudad = document.getElementById("ciudadRegistro").value;
    var edad = document.getElementById("edadRegistro").value; 
    var checkbox1 = document.getElementById("checkbox1");
    var checkbox2 = document.getElementById("checkbox2");
       
    if(checkbox1.checked && checkbox2.checked){
       var check1= checkbox1.value;
        var check2 =checkbox2.value;
    }
       
    if(nombre == "" || contra == "" || email == "" || edad == "" || ciudad == "" || check1 != "ok" || check2 !="ok"){
        alert("Debes completar todos los campos!");

    }else{
        console.log("Usuario Registrado: " , nombre);
        alert("Muy bien! Te has registrado en Monant! Ya podés disfrutar de la plataforma!");
    }

    
    return false;
}


function facebook(){
    window.open("https://www.facebook.com/");
}

function twitter(){
    window.open("https://www.twitter.com/");
}

function instagram(){
    window.open("https://www.instagram.com/");
}

function appleStore(){
    window.open("https://www.apple.com/la/app-store/");
}

function googlePlay(){
    window.open("https://play.google.com/store/apps?hl=es_AR&gl=US&pli=1");
}



$(document).ready(function(){
    
    $(".respuestas").hide();
    $(".menuLogin").hide();
    $(".buscarBotones").hide();
    $(".crearBotones").hide();

    $(".p1").click(function(){
        $(".r1").toggle();

    });


    $(".p2").click(function(){
        $(".r2").toggle();
    });

    $(".p3").click(function(){
        $(".r3").toggle();
    });

    $(".p4").click(function(){
        $(".r4").toggle();
    });


    $(".usuarioLogin").click(function(){
        $(".menuLogin").toggle("swing");
    });


    $(".buscarViaje").click(function(){
        

        var origen = document.getElementById("origen").value;
        var destino = document.getElementById("destino").value;
        var fecha = document.getElementById("fecha").value;
        var tiempo = document.getElementById("tiempo").value;


        if(origen == "" || destino == "" || fecha == "" || tiempo == ""){
            alert("Debes completar todos los campos!");
    
        }else{
            alert("Muy bien! Buscando viajes...");


        $(".buscarBotones").show();    
        $(".buscarOrigen").append(origen);
        $(".buscarDestino").append(destino);
        $(".buscarFecha").append(fecha);
        $(".buscarTiempo").append(tiempo);

        }


        
    });

    $(".crearViaje").click(function(){
        

        var origen2 = document.getElementById("origen2").value;
        var destino2 = document.getElementById("destino2").value;
        var fecha2 = document.getElementById("fecha2").value;
        var tiempo2 = document.getElementById("tiempo2").value;
        var pasajeros2 = document.getElementById("pasajeros2").value;


        if(origen2 == "" || destino2 == "" || fecha2 == "" || tiempo2 == "" || pasajeros2 == ""){
            alert("Debes completar todos los campos!");
    
        }else{
            alert("Muy bien! Viaje creado!");
        
        $(".crearBotones").show();
        $(".crearOrigen").append(origen2);
        $(".crearDestino").append(destino2);
        $(".crearFecha").append(fecha2);
        $(".crearTiempo").append(tiempo2);
        $(".crearPasajeros").append(pasajeros2);
        }


        
    })
});

