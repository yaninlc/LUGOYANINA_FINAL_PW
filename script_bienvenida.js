// JavaScript para manejar el formulario
document.getElementById("nameForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Evitar que el formulario se envíe

    // Obtener el nombre del usuario
    const username = document.getElementById("username").value;

    // Verificar que el nombre no esté vacío
    if (username) {
        // Mostrar el mensaje de bienvenida con el nombre ingresado
        const welcomeMessage = `¡Bienvenido, ${username}!`;
        document.getElementById("welcomeMessage").textContent = welcomeMessage;
        document.getElementById("welcomeMessage").style.display = "block"; // Mostrar el mensaje

        // Limpiar el campo de entrada después de enviar
        document.getElementById("username").value = "";
    } else {
        alert("Por favor, ingresa tu nombre.");
    }
});
