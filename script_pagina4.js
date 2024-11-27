// Función para calcular el total de precio por cantidad
function calcularTotal() {
    let precio = parseFloat(document.getElementById('precio').value);
    let cantidad = parseInt(document.getElementById('cantidad').value);
    
    if (!isNaN(precio) && !isNaN(cantidad) && cantidad > 0) {
        let total = precio * cantidad;
        document.getElementById('total').textContent = "Total: $" + total.toFixed(2);
    } else {
        alert("Por favor, ingresa valores válidos para precio y cantidad.");
    }
}

// Función para calcular el 30% del precio
function calcularPorcentaje() {
    let precio = parseFloat(document.getElementById('precio2').value);
    
    if (!isNaN(precio) && precio > 0) {
        let porcentaje = precio * 0.30;
        document.getElementById('porcentaje').textContent = "30% del Precio: $" + porcentaje.toFixed(2);
    } else {
        alert("Por favor, ingresa un valor válido para el precio.");
    }
}

// Función para calcular el 25% de descuento del total
function calcularDescuento() {
    let precio = parseFloat(document.getElementById('precio3').value);
    let cantidad = parseInt(document.getElementById('cantidad2').value);
    
    if (!isNaN(precio) && !isNaN(cantidad) && cantidad > 0) {
        let total = precio * cantidad;
        let descuento = total * 0.25;
        let totalConDescuento = total - descuento;
        document.getElementById('descuento').textContent = "Total con 25% de descuento: $" + totalConDescuento.toFixed(2);
    } else {
        alert("Por favor, ingresa valores válidos para precio y cantidad.");
    }
}
