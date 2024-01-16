// Espera a que se cargue todo el contenido HTML
document.addEventListener("DOMContentLoaded", function() {
    // Obtiene referencias a los elementos del DOM
    const botonVerMas = document.getElementById('verMasBtn'); // Botón "Ver más"
    const descripcionCorta = document.querySelector('.descripcion-corta'); // Sección de descripción corta
    const descripcionCompleta = document.querySelector('.descripcion-completa'); // Sección de descripción completa

    // Agrega un listener para el evento 'click' en el botón "Ver más"
    botonVerMas.addEventListener('click', function() {
        // Verifica si la descripción corta está oculta (display = 'none')
        if (descripcionCorta.style.display === 'none') {
            // Si está oculta, muestra la descripción corta y oculta la descripción completa
            descripcionCorta.style.display = 'block';
            descripcionCompleta.style.display = 'none';
            botonVerMas.textContent = 'Ver más'; // Cambia el texto del botón a 'Ver más'
        } else {
            // Si la descripción corta está visible, oculta la descripción corta y muestra la completa
            descripcionCorta.style.display = 'none';
            descripcionCompleta.style.display = 'block';
            botonVerMas.textContent = 'Ver menos'; // Cambia el texto del botón a 'Ver menos'
        }
    });
});
