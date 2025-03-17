// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo(){
    let NomAmigo = document.getElementById("amigo").value;

     
    if (NomAmigo === "") {
        alert("⚠️ Ingresa un nombre antes de agregar.");
        return;
    }

    return NomAmigo;

}


function sortearAmigo(){

}

console.log(agregarAmigo());
