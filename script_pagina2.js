// Inicializar EmailJS
emailjs.init('MP-WMhBeszdfC-WPh');

// Manejo del envío de correo
document.getElementById('email-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    emailjs.send('service_mpp6kyh', 'template_b7qkzlc', {
        username: username,
        email: email,
        message: message
    })
    .then(() => {
        document.getElementById('email-status').textContent = 'Correo enviado exitosamente.';
    })
    .catch(() => {
        document.getElementById('email-status').textContent = 'Error al enviar el correo.';
    });
});

// API de Dog CEO para cargar imágenes aleatorias de perros
document.getElementById('load-image').addEventListener('click', function () {
    // URL de la API de Dog CEO para obtener una imagen aleatoria de perro
    const url = 'https://dog.ceo/api/breeds/image/random';

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error en la API de perros: ${response.statusText} (Código: ${response.status})`);
            }
            return response.json();
        })
        .then(data => {
            const imageUrl = data.message;  // La URL de la imagen se encuentra en `data.message`
            const img = document.createElement('img');
            img.src = imageUrl;
            img.alt = 'Imagen aleatoria de perro';
            
            const container = document.getElementById('image-container');
            container.innerHTML = '';  // Limpia el contenedor
            container.appendChild(img);  // Añade la nueva imagen
        })
        .catch(error => {
            console.error('Error:', error);
            alert('No se pudo obtener una imagen de perro.');
        });
});

// API de Cat Facts para obtener un hecho aleatorio sobre gatos
document.getElementById('get-cat-fact').addEventListener('click', function () {
    // URL de la API de Cat Facts
    const url = 'https://catfact.ninja/fact';

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error en la API de gatos: ${response.statusText} (Código: ${response.status})`);
            }
            return response.json();
        })
        .then(data => {
            document.getElementById('cat-fact-result').textContent = `Hecho sobre gatos: ${data.fact}`;
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById('cat-fact-result').textContent = 'No se pudo obtener un hecho sobre gatos.';
        });
});
