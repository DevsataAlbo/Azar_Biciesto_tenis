function verificarNumeroGanador(numero) {
    // Verificar que el número esté en el rango válido (mayor a 1 y menor o igual a 100)
    if (numero <= 1 || numero > 100) {
        return "Número fuera del rango válido (debe ser mayor a 1 y menor o igual a 100)";
    }
    
    // Verificar opciones de ganar
    if ((numero > 5 && numero < 15) || numero === 70 || numero === 55) {
        return "El número ingresado tiene opciones de ganar";
    } else {
        return "El número ingresado no es favorable";
    }
}

// Función que conecta con el HTML
function verificarNumero() {
    const numeroInput = document.getElementById('numeroJuego');
    const resultadoDiv = document.getElementById('resultado');
    
    const numero = parseInt(numeroInput.value);
    
    if (isNaN(numero)) {
        resultadoDiv.innerHTML = '<p class="text-danger p-3">Por favor, ingresa un número válido</p>';
        return;
    }
    
    const resultado = verificarNumeroGanador(numero);
    resultadoDiv.innerHTML = `<p class="text-dark fw-bold p-3">${resultado}</p>`;
}