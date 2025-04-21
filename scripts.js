// 1. Función declarativa
function cuadrado(x) {
    return x * x;
}

function mostrarCuadrado() {
    const numero = document.getElementById('numeroCuadrado').value;
    const resultado = cuadrado(numero);
    document.getElementById('resultadoCuadrado').innerHTML = 
        `El cuadrado de ${numero} es ${resultado}`;
}

// 2. Función expresiva
const potencia = function(base, exponente) {
    let resultado = 1;
    for (let i = 0; i < exponente; i++) {
        resultado *= base;
    }
    return resultado;
};

function mostrarPotencia() {
    const base = document.getElementById('base').value;
    const exponente = document.getElementById('exponente').value;
    const resultado = potencia(base, exponente);
    document.getElementById('resultadoPotencia').innerHTML = 
        `${base} elevado a ${exponente} = ${resultado}`;
}

// 3. Arrow function
const dividir = (a, b) => a / b;

function mostrarDivision() {
    const dividendo = document.getElementById('dividendo').value;
    const divisor = document.getElementById('divisor').value;
    const resultado = dividir(dividendo, divisor);
    document.getElementById('resultadoDivision').innerHTML = 
        `${dividendo} ÷ ${divisor} = ${resultado.toFixed(2)}`;
}

// 4. Función anidada
function humus(factor) {
    const ingrediente = (cantidad, unidad, nombre) => {
        const mensaje = `${cantidad * factor} ${unidad} de ${nombre}<br>`;
        document.getElementById('resultadoHummus').innerHTML += mensaje;
    };
    
    document.getElementById('resultadoHummus').innerHTML = '';
    ingrediente(1, "lata", "garbanzos");
    ingrediente(0.5, "taza", "tahini");
    ingrediente(2, "cucharadas", "limón");
}

function prepararHummus() {
    humus(2);
}

// 5. Scope
function probarScope() {
    let x = "global";
    let resultado = '';

    function prueba() {
        let x = "local";
        resultado += `Dentro: ${x}<br>`;
    }

    prueba();
    resultado += `Fuera: ${x}`;
    document.getElementById('resultadoScope').innerHTML = resultado;
}

// 6. Factorial (recursividad)
function factorial(n) {
    return n <= 1 ? 1 : n * factorial(n - 1);
}

function calcularFactorial() {
    const numero = document.getElementById('numeroFactorial').value;
    const resultado = factorial(numero);
    document.getElementById('resultadoFactorial').innerHTML = 
        `${numero}! = ${resultado}`;
}