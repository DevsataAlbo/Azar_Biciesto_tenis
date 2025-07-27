function verificarSetTenis(jugadorA, jugadorB) {
    const m = jugadorA; 
    const n = jugadorB; 
    
    // Verificar casos válidos
    
    // Caso 1: 6 puntos y al menos 2 de diferencia
    if (m >= 6 && m - n >= 2) {
        // Verificar que no sea un resultado inválido
        if (m > 7 || (m === 7 && n !== 6)) {
            return "Resultado inválido";
        }
        return "A ganó el set";
    }
    
    if (n >= 6 && n - m >= 2) {
        // Verificar que no sea un resultado inválido
        if (n > 7 || (n === 7 && m !== 6)) {
            return "Resultado inválido";
        }
        return "B ganó el set";
    }
    
    // Caso 2: empatado a 6, se define 7-6
    if (m === 7 && n === 6) {
        return "A ganó el set";
    }
    if (n === 7 && m === 6) {
        return "B ganó el set";
    }
    
    // Verificar casos inválidos
    if (m > 7 || n > 7) {
        return "Resultado inválido";
    }
    
    if ((m >= 6 || n >= 6) && Math.abs(m - n) > 2) {
        return "Resultado inválido";
    }
    
    // el set aún no termina
    return "El set todavía no termina";
}

// Función que conecta con el HTML
function verificarSet() {
    const jugadorAInput = document.getElementById('jugadorA');
    const jugadorBInput = document.getElementById('jugadorB');
    const resultadoDiv = document.getElementById('resultado');
    
    const jugadorA = parseInt(jugadorAInput.value);
    const jugadorB = parseInt(jugadorBInput.value);
    
    if (isNaN(jugadorA) || isNaN(jugadorB)) {
        resultadoDiv.innerHTML = '<p class="text-danger p-3">Ingresa números válidos para ambos jugadores</p>';
        return;
    }
    
    if (jugadorA < 0 || jugadorB < 0) {
        resultadoDiv.innerHTML = '<p class="text-danger p-3">Los números no pueden ser negativos</p>';
        return;
    }
    
    const resultado = verificarSetTenis(jugadorA, jugadorB);
    resultadoDiv.innerHTML = `<p class="text-dark fw-bold p-3">${resultado}</p>`;
}