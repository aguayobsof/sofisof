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
