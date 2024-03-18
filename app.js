document.addEventListener("DOMContentLoaded", function() {
    const textarea = document.querySelector('.textoUsuario');
    const alerta = document.querySelector('.text-alerta');

    textarea.addEventListener('input', function() {
        const inputValue = textarea.value;
        const regex = /[A-ZáéíóúüÁÉÍÓÚÜÑ!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
        if (regex.test(inputValue)) {
            alerta.style.display = 'block';
            textarea.value = '';
        } else {
            alerta.style.display = 'none';
        }
    });
});


// TO DO: Obtener texto del textarea 
function obtenerTexto() {
    let texto = document.querySelector('.textoUsuario').value;
    
    const regex = /[A-ZáéíóúüÁÉÍÓÚÜÑ!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
    if (regex.test(texto)) {
        document.querySelector('.text-alerta').style.display = 'block';
        document.querySelector('.textoUsuario').value = '';
        return ''; 
    } else {
        document.querySelector('.text-alerta').style.display = 'none';
    }
    
    // Convertir el texto a minúsculas
    texto = texto.toLowerCase();
    
    return texto;
}


// TO DO: Encriptar el texto según las reglas especificadas
function encriptarTexto(texto) {
    texto = texto.replace(/e/g, 'enter')
                 .replace(/i/g, 'imes')
                 .replace(/a/g, 'ai')
                 .replace(/o/g, 'ober')
                 .replace(/u/g, 'ufat');
    return texto;
}


// TO DO: Mostrar el texto encriptado

function btnEncripta() {
    let texto = obtenerTexto();
    let textoEncriptado = encriptarTexto(texto);
    document.querySelector('.decrypt-text').value = textoEncriptado;
    
    // Oculta la imagen inicial
    document.getElementById("cat-inicial").style.display = "none";
    // Muestra la imagen final
    document.getElementById("cat-final").style.display = "block"; 
}

// TO DO: Desencriptar el texto encriptado

function desencriptarTexto(texto) {
    texto = texto.replace(/enter/g, 'e')
                 .replace(/imes/g, 'i')
                 .replace(/ai/g, 'a')
                 .replace(/ober/g, 'o')
                 .replace(/ufat/g, 'u');
    return texto;
}
// TO DO: Mostrar el texto desencriptado

function btnDesencripta() {
    let textoEncriptado = document.querySelector('.decrypt-text').value;
    let textoDesencriptado = desencriptarTexto(textoEncriptado);
    document.querySelector('.decrypt-text').value = textoDesencriptado;
}


// TO DO: Agregar eventos de click a los botones de encriptar y desencriptar
document.querySelector('.btn-encripta').addEventListener('click', btnEncripta);
document.querySelector('.btn-desencripta').addEventListener('click', btnDesencripta);

// TO DO: Agregar eventos de click a botón reinicio
function btnReiniciar() {
    // Limpiar el campo de texto de entrada
    document.querySelector('.textoUsuario').value = '';
    // Limpiar el campo de texto de salida
    document.querySelector('.decrypt-text').value = '';
    
    // Muestra la imagen inicial
    document.getElementById("cat-inicial").style.display = "block";
    // Oculta la imagen final
    document.getElementById("cat-final").style.display = "none"; 
}

document.querySelector('.btn-reinicio').addEventListener('click', btnReiniciar);

// Botón copiar
document.querySelector('.btn-copiar').addEventListener('click', btnCopiar);

async function btnCopiar() {
    let textarea = document.querySelector('.decrypt-text');
    let texto = textarea.value;

    try {
        await navigator.clipboard.writeText(texto);
        alert("Texto copiado al portapapeles correctamente.");
    } catch (err) {
        console.error('Error al intentar copiar el texto: ', err);
        alert("Lo siento, no se pudo copiar el texto al portapapeles.");
    }
}


// intento deployment