// Inicializar EmailJS
emailjs.init("MP-WMhBeszdfC-WPh"); // Reemplaza con tu User ID de EmailJS

document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const loginMessage = document.getElementById("loginMessage");

    // Validación simulada (puedes cambiar esto según tus necesidades)
    const validUser = "USER";
    const validPassword = "PASS";

    if (username === validUser && password === validPassword) {
        loginMessage.style.color = "green";
        loginMessage.textContent = "Inicio de sesión exitoso a la pagina";

        // Enviar correo con EmailJS
        emailjs.send("service_mpp6kyh", "template_15sq7fi", {
            username: username,
        }).then(
            () => {
                console.log("Correo enviado con éxito");
                // Redirigir a Página 2 después de enviar el correo
                setTimeout(() => {
                    window.location.href = "pagina2.html";
                }, 1000);
            },
            (error) => {
                console.error("Error al enviar el correo:", error);
            }
        );
    } else {
        loginMessage.style.color = "red";
        loginMessage.textContent = "Usuario o contraseña incorrectos";
    }
});
