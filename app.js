let amigoslista = [];

function validadEntrada(){
    // Obtener el valor actual del campo dentro de la función
    let NomAmigo = document.getElementById("amigo").value;

    // Si el campo está vacío, mostramos una alerta y salimos de la función.
    if (NomAmigo === "") {
        alert("⚠️ Ingresa un nombre antes de agregar.");
        return null; // Salimos de la función si no hay nombre.
    }

    return NomAmigo;
}


function agregarAmigo(){ //Agrega el nombre del amigo a la lista

    let NomAmigo = validadEntrada();
    if (NomAmigo === null) return; // Si es null, no agregamos el nombre y salimos de la función
    
    amigoslista.push(NomAmigo);

    console.log("Lista de amigos " + amigoslista)

    // Actualizar la lista en el HTML
    let listaNomHTML = document.getElementById("name-list");
    listaNomHTML.innerHTML = amigoslista.join(", "); // Mostrar la lista como texto separado por comas

    // Limpiar el campo de texto
    limpiarCampo();
    return amigoslista;
}

function limpiarCampo(){
    // Limpiar el campo de texto después de agregar el nombre
    document.getElementById("amigo").value = "";
}

function sortearAmigo(){
    //Asegurarse que la lsta no este vacia
    if (amigoslista.length === 0){
        alert("La lista de amigos está vacía.");
        return;
    }

    let indiceRandomList = Math.floor(Math.random() * amigoslista.length)
    amigoSorteado = amigoslista[indiceRandomList];

    // Mostrar el amigo sorteado en el HTML
    let nomSorteado = document.getElementById("amigo-sorteado");
    nomSorteado.innerHTML = "El amigo secreto sorteado es: " + amigoSorteado;

    console.log("Amigo sorteado:", amigoSorteado);
    return amigoSorteado;
}

