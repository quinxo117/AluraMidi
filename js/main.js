function playSonido(idElementoAudio){
    document.querySelector(idElementoAudio).play();   
}
const listaDeTeclas = document.querySelectorAll('.tecla');
// Al usar const le estás diciendo 
//al programa que esta lista de libros no va a cambiar, 
//es decir, no podrás agregar, eliminar o modificar 
//los elementos de la lista una vez que la hayas declarado.

/*
Sintaxis For

for (Inicializacion; condicion; Que hará el bucle?) {

    //Sentencias
}
*/


for(let contador = 0; contador < listaDeTeclas.length; contador ++){

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#sonido_${instrumento}`; /*Template string*/
    tecla.onclick = function (){ //funcion anonima
        playSonido(idAudio);
    };
    tecla.onkeydown = function(evento){
        if(evento.code === 'space' || evento.code === 'Enter'){
            tecla.classList.add('activa');
        };
    };
    tecla.onkeyup = function(){
        tecla.classList.remove('activa');
    };
};


/*
let contador = 0
while (contador < 9){
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#sonido_${instrumento}`; // Template string
    tecla.onclick = function (){ //funcion anonima
        playSonido(idAudio);
    };
    constador = contador + 1;
    console.log('Vuelta'+ contador);
}
*/




