// Obtiene referencias a elementos del DOM
let btnHamburguesa = document.getElementById("boton-menu"); // Botón hamburguesa para menú móvil
let menuNavegacion = document.getElementById("menu-navegacion"); // Menú de navegación principal

// Agrega un event listener para el clic en el botón hamburguesa
btnHamburguesa.addEventListener('click', function(){
    menuNavegacion.classList.toggle("viewMenu"); // Alternar (toggle) la clase 'viewMenu' en el menú de navegación
});

//JQuery
// Selector de clase 'angle-view-sub-menu' que maneja el clic en un elemento
$(".angle-view-sub-menu").click(function(){
  $(this).siblings("ul").toggle(); // Alterna la visibilidad del elemento 'ul' hermano al elemento clicado
});