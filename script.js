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
