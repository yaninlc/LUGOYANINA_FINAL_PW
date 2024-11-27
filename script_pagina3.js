// Inicializar EmailJS
emailjs.init("MP-WMhBeszdfC-WPh");

document.getElementById("personalForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevenir el envío por defecto del formulario

    // Capturar los datos del formulario
    const formData = {
        name: document.getElementById("name").value,
        lastname: document.getElementById("lastname").value,
        age: document.getElementById("age").value,
        address: document.getElementById("address").value,
        phone: document.getElementById("phone").value,
        email: document.getElementById("email").value,
        city: document.getElementById("city").value,
        country: document.getElementById("country").value,
        sueldo: document.getElementById("sueldo").value,
        message: document.getElementById("commentBox").value,
    };

    // Enviar los datos a través de EmailJS
    emailjs.send("service_mpp6kyh", "template_15sq7fi", formData)
        .then(() => {
            // Si el correo se envía con éxito
            document.getElementById("formMessage").textContent = "¡Formulario enviado con éxito! El correo fue enviado correctamente.";
            document.getElementById("formMessage").style.color = "green"; // Mensaje en verde
            document.getElementById("personalForm").reset(); // Limpiar el formulario después de enviar
        })
        .catch((error) => {
            // Si ocurre un error al enviar el correo
            console.error("Error al enviar el formulario:", error);
            document.getElementById("formMessage").textContent = "Hubo un error al enviar el formulario. Por favor, intenta nuevamente.";
            document.getElementById("formMessage").style.color = "red"; // Mensaje en rojo
        });
});

document.getElementById("clearForm").addEventListener("click", function () {
    // Limpiar los campos del formulario
    document.getElementById("personalForm").reset();
    document.getElementById("formMessage").textContent = ""; // Limpiar mensaje de estado
});
