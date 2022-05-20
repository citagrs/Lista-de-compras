import checkComplete from "./componentes/agregarProducto.js";
import borrarIcono from "./componentes/borrarProducto.js";

//(()=> { /* Javascrip IIFE permite brindar seguridad a el aplicativo lo cual impide
//que las funciones realizadas en el presente sean mal ejecutadas desde el nevagador */

/* Se almacena en la variable btn al objeto llamado data-form-btn el cual es el boton de la pagina */
const btn = document.querySelector("[data-form-btn]");

//Arrow functions o Funciones Anonimas =>
const agregarProducto = (evento) => {

    /* Evita que la pagina se refresque al dar hacer click en el elemento boton */
    evento.preventDefault();

    /* Añade a la constante input la informacion que se agrega en el input */
    const input = document.querySelector("[data-form-input]");
    const value = input.value;

    /* Añade a la constante lista la informacion del ul del input nombrado data-lista */
    const lista = document.querySelector("[data-lista]")

    /* Crea el elemento li */
    const producto = document.createElement("li");
    producto.classList.add("card");

    /* Permite que despues de almacenar la palabra en la constante, el input quede en blanco */
    input.value = "";

    const productoContent = document.createElement("div");

    const titleProducto = document.createElement("span");
    titleProducto.classList.add("product");
    titleProducto.innerHTML= value;

    productoContent.appendChild(checkComplete());
    productoContent.appendChild(titleProducto);

    producto.appendChild(productoContent);

    producto.appendChild(borrarIcono());

    lista.appendChild(producto);
}

/* Ahora se toma la constante btn y se llama el metodo addEventListener para "escuchar" el evento, el cual posee dos 
parametros, el tipo de evento (en este caso click) y la que se realizara al usar el evento, en otras palabras, lo que
sucedera al dar click sobre el boton */
btn.addEventListener("click", agregarProducto);

//})();/* Cierre de seguridad */