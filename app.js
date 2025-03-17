let amigoslista = [];
let NomAmigo = document.getElementById("amigo").value;


function validadEntrada(){

    // Si el campo está vacío, mostramos una alerta y salimos de la función.
    if (NomAmigo === "") {
        alert("⚠️ Ingresa un nombre antes de agregar.");
        return null; // Salimos de la función si no hay nombre.
    }

    console.log("Amigo agregado:", NomAmigo); // Mostramos en la consola el nombre ingresado

    return NomAmigo;
}


function agregarAmigo(){ //Agrega el nombre del amigo a la lista
    amigoslista.push(NomAmigo);

    console.log(amigoslista)

    let listaNomHTML = document.getElementById("name-list");
    listaNomHTML.innerHTML = amigoslista;

    return amigoslista;
}

function limpiarCampo(){
    // Limpiar el campo de texto después de agregar el nombre
    document.getElementById("amigo").value = "";
}

function sortearAmigo(){
    let amigoSorteado = Math.random(amigoslista);

    console.log(amigoSorteado)

    return amigoSorteado;
}

