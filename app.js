// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo(){
    let NomAmigo = document.getElementById("amigo").value;
     
    // Si el campo está vacío, mostramos una alerta y salimos de la función.
    if (NomAmigo === "") {
        alert("⚠️ Ingresa un nombre antes de agregar.");
        return; // Salimos de la función si no hay nombre.
    }

    console.log("Amigo agregado:", NomAmigo); // Mostramos en la consola el nombre ingresado

    return NomAmigo;
}


function sortearAmigo(){

}

