function iniciar() {
    let nombre = document.getElementById('nombre').value;
    let apellido = document.getElementById('apellido').value;
    console.log("Nombre: ", nombre);
    console.log("Apellido: ", apellido);
    document.getElementById('nombre-cambiar').innerHTML = "Nombre: " + nombre;
    document.getElementById('apellido-cambiar').innerHTML = "Apellido: " + apellido;
}