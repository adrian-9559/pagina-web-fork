// Seleccionar elementos del DOM
const currentImage = document.querySelector('.gallery-image'); // Imagen actual en la galería
const previousImage = document.querySelector('.previous-image'); // Imagen anterior en la galería
const nextImage = document.querySelector('.next-image'); // Imagen siguiente en la galería
const previousButton = document.getElementById('btn-previous'); // Botón para la imagen anterior
const nextButton = document.getElementById('btn-next'); // Botón para la imagen siguiente

let currentImageIndex = 0; // Índice de la imagen actual en el arreglo
const images = ['./../IMAGE/HOTELES/hotel-presidente-4s (1).jpg',
                './../IMAGE/HOTELES/hotel-presidente-4s (2).jpg',
                './../IMAGE/HOTELES/hotel-presidente-4s (3).jpg', 
                './../IMAGE/HOTELES/hotel-presidente-4s-bano.jpg', 
                './../IMAGE/HOTELES/hotel-presidente-4s-habitacion (1).jpg', 
                './../IMAGE/HOTELES/hotel-presidente-4s-habitacion (2).jpg', 
                './../IMAGE/HOTELES/hotel-presidente-4s-habitacion (3).jpg', 
                './../IMAGE/HOTELES/hotel-presidente-4s-habitacion.jpg', 
                './../IMAGE/HOTELES/piscina.jpg'
            ];

// Event listener para el botón "anterior"
previousButton.addEventListener('click', function() {
    currentImageIndex--; // Decrementar el índice para mostrar la imagen anterior

    // Manejo de índices negativos o al llegar al final del arreglo
    if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1; // Volver al final si está al principio
    }

    // Actualizar las imágenes anteriores y siguientes en la galería
    previousImage.src = images[(currentImageIndex === 0) ? images.length - 1 : currentImageIndex - 1];
    nextImage.src = images[(currentImageIndex === images.length - 1) ? 0 : currentImageIndex + 1];

    // Mostrar la imagen actual en el elemento HTML correspondiente
    currentImage.src = images[currentImageIndex];
});

// Event listener para el botón "siguiente"
nextButton.addEventListener('click', function() {
    currentImageIndex++; // Incrementar el índice para mostrar la siguiente imagen

    // Volver al principio si está al final del arreglo
    if (currentImageIndex > images.length - 1) {
        currentImageIndex = 0;
    }

    // Actualizar la imagen siguiente y la actual en la galería
    nextImage.src = images[(currentImageIndex === images.length - 1) ? 0 : currentImageIndex + 1];
    currentImage.src = images[currentImageIndex];

    // Actualizar la imagen anterior dependiendo de la posición actual
    previousImage.src = images[(currentImageIndex === 0) ? images.length - 1 : currentImageIndex - 1];
});

// function carrusel(){
//     switch(currentImageIndex){
//         case 0: currentImage.src = images[0]
//                 break;
//         case 1: currentImage.src = images[1]
//                 break;
//         case 2: currentImage.src = images[2]
//                 break;
//         case 3: currentImage.src = images[3]
//                 break;
//         case 4: currentImage.src = images[4]
//                 break;
//         case 5: currentImage.src = images[5]
//                 break;
//         case 6: currentImage.src = images[6]
//                 break;
//         case 7: currentImage.src = images[7]
//                 break;
//         case 8: currentImage.src = images[8]
//                 break;
//     }
// }
