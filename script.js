// ===== Tu número de WhatsApp (código de país + número, sin espacios ni signos) =====
const WHATSAPP = '595968908191';

// 1. Buscamos en la página los elementos que vamos a usar
const fotos = document.querySelectorAll('figure img');
const visor = document.querySelector('#visor');
const visorImagen = document.querySelector('#visor-imagen');

// 2. A cada foto de la galería le decimos: "cuando te hagan clic, abre el visor"
fotos.forEach(function (foto) {
    foto.addEventListener('click', function () {
        visorImagen.src = foto.src;
        visorImagen.alt = foto.alt;
        visor.classList.add('abierto');
    });
});

// 3. Si hacen clic en el visor, se cierra
visor.addEventListener('click', function () {
    visor.classList.remove('abierto');
});

// 4. Si pulsan la tecla Escape, también se cierra
document.addEventListener('keydown', function (evento) {
    if (evento.key === 'Escape') {
        visor.classList.remove('abierto');
    }
});

// ===== Menú de hamburguesa (celular) =====
const menuBoton = document.querySelector('#menu-boton');
const menu = document.querySelector('#menu');

// 5. Al tocar el botón, el menú se abre o se cierra
menuBoton.addEventListener('click', function () {
    menu.classList.toggle('abierto');
    menuBoton.classList.toggle('abierto');

    const estaAbierto = menu.classList.contains('abierto');
    menuBoton.setAttribute('aria-expanded', estaAbierto);
});

// 6. Al elegir una opción del menú, se cierra solo
menu.querySelectorAll('a').forEach(function (enlace) {
    enlace.addEventListener('click', function () {
        menu.classList.remove('abierto');
        menuBoton.classList.remove('abierto');
        menuBoton.setAttribute('aria-expanded', false);
    });
});

// ===== Formulario de contacto =====
const formulario = document.querySelector('#formulario');

// 7. Una función que muestra (o borra) el mensaje de error de un campo
function mostrarError(campo, mensaje) {
    const caja = document.querySelector('#' + campo).parentElement;
    document.querySelector('#error-' + campo).textContent = mensaje;
    if (mensaje) {
        caja.classList.add('con-error');
    } else {
        caja.classList.remove('con-error');
    }
}

// 8. Cuando alguien pulsa "Enviar mensaje"...
formulario.addEventListener('submit', function (evento) {
    // ...primero evitamos que la página se recargue
    evento.preventDefault();

    // Leemos lo que escribió la persona (trim quita los espacios sobrantes)
    const nombre = document.querySelector('#nombre').value.trim();
    const correo = document.querySelector('#correo').value.trim();
    const mensaje = document.querySelector('#mensaje').value.trim();

    // 9. Revisamos cada campo
    let todoBien = true;

    if (nombre === '') {
        mostrarError('nombre', 'Por favor, escribe tu nombre.');
        todoBien = false;
    } else {
        mostrarError('nombre', '');
    }

    if (!correo.includes('@') || !correo.includes('.')) {
        mostrarError('correo', 'Revisa tu correo, parece que le falta algo.');
        todoBien = false;
    } else {
        mostrarError('correo', '');
    }

    if (mensaje.length < 10) {
        mostrarError('mensaje', 'Cuéntame un poco más (al menos 10 letras).');
        todoBien = false;
    } else {
        mostrarError('mensaje', '');
    }

    // 10. Si todo está bien, abrimos WhatsApp con el mensaje ya escrito
    if (todoBien) {
        const texto = 'Hola Sofía, soy ' + nombre + ' (' + correo + ').\n\n' + mensaje;
        window.open('https://wa.me/' + WHATSAPP + '?text=' + encodeURIComponent(texto), '_blank');
        document.querySelector('#gracias').textContent = '¡Gracias, ' + nombre + '! Se abrirá WhatsApp con tu mensaje listo para enviar.';
        formulario.reset();
    }
});

