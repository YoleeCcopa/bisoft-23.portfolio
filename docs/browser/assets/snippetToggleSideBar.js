/* Notes --------------------------------------------------------------------------------
    Allow sidebar button to work.
    Autor: MagtimusPro (youtube)
    Modificaciones por: Yolee Ccopa
*/

'use strict';

const body = document.querySelector("#body"),
    side_menu = document.querySelector("#sidebar"),
    btn_sidebar = document.querySelector("#btn_sidebar");

function open_menu() {
    body.classList.toggle("--compact-body");
    side_menu.classList.toggle("--extended-sidebar");
}

btn_sidebar.addEventListener('click', open_menu);

// Si el ancho de la pagina es menor a 760px, ocultará el menú al recargar la página
if (window.innerWidth < 760) {
    body.classList.add("--compact-body");
    side_menu.classList.add("--extended-sidebar");
}

//Haciendo el menú responsibe (adaptable)
window.addEventListener("resize", function() {
    // Mostrar solo iconos si la pantalla es mayor a 760
    if (window.innerWidth > 760) {
        body.classList.remove("--compact-body");
        side_menu.classList.remove("--extended-sidebar");
    }
    // Ocultar iconos si la pantalla es menor a 760
    if (window.innerWidth < 760) {
        body.classList.add("--compact-body");
        side_menu.classList.add("--extended-sidebar");
    }
});