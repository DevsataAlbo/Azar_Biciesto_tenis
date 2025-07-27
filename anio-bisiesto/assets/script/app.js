function verificarAnioBisiesto(anio) {
    // Validar que el valor sea un número mayor o igual a cero
    if (anio < 0 || !Number.isInteger(anio)) {
        return "Error: El año debe ser un número entero mayor o igual a cero";
    }
    
    // Verificar si es año bisiesto
    if ((anio % 4 === 0 && anio % 100 !== 0) || (anio % 400 === 0)) {
        return `El año ${anio} es bisiesto`;
    } else {
        return `El año ${anio} no es bisiesto`;
    }
}

// Función que conecta con el HTML
function verificarAnio() {
    const anioInput = document.getElementById('anioInput');
    const resultadoDiv = document.getElementById('resultado');
    
    const anio = parseInt(anioInput.value);
    
    if (isNaN(anio)) {
        resultadoDiv.innerHTML = '<p class="text-danger p-3">Ingresa un año válido</p>';
        return;
    }
    
    const resultado = verificarAnioBisiesto(anio);
    resultadoDiv.innerHTML = `<p class="text-dark fw-bold p-3">${resultado}</p>`;
}