/***** Zona de definición de variables */
//Definimos las variables con las que vamos a trabajar en el programa

//Creo un arreglo de mis productos
const productos = [
    {
        nombre: "Historia Antigua",
        descripcion: "Desde el homínido hasta la caída del Imperio Romano Occidental.",
        imagen: "Imagenes/egipto.jpg",
        precio: 45000

    },
    {
        nombre: "Historia Medieval",
        descripcion: "Desde las invasiones bárbaras hasta la caída de Constantinopla.",
        imagen: "Imagenes/historiamedieval.png",
        precio: 45000
    },
    {
        nombre: "Historia Moderna",
        descripcion: "Desde el Descubrimiento de América hasta la Revolución Francesa.",
        imagen: "Imagenes/historiamoderna.png",
        precio: 45000
    },
    {
        nombre: "Historia Contemp.",
        descripcion: "Desde la Revolución Francesa hasta la actualidad.",
        imagen: "Imagenes/historiacontemporanea.png",
        precio: 45000
    }
]

let librosHTML = "";

//guardo el div contenedor de las cards de los productos
const contenedorLibros = document.getElementById("contenedorLibros");
//guardo la lista (ul) del carrito
const listaCarrito = document.querySelector("#carrito ul");
//guardo el párrafo que muestra el total del carrito
const totalCarrito = document.querySelector("#carrito p")
//guardo el botón Borrar
const botonBorrar = document.querySelector("#boton-borrar");
//guardo el botón Ir a Pagar
const botonPagar = document.querySelector("#boton-pagar");
//guardo el párrafo para mostrar mensaje "No has agregado nada en el carrito"
const mensajePagarCarrito = document.getElementById("mensajeCarrito");
//variable para sumar los precios de los productos del carrito
let totalAPagar = 0;

/***** Zona de definición de funciones */

//creamos las cards con los datos en el HTML

function crearCardsConDatos() {
    for (let indice = 0; indice < productos.length; indice++) {
          librosHTML += `
            <div class="product">
                <img src=${productos[indice].imagen} alt="Producto ${indice}">
                <h3>${productos[indice].nombre}</h3>
                <p>${productos[indice].descripcion}</p>
                <p><strong>Precio: $${productos[indice].precio}</strong></p>                            
                <input class="boton-agregar-carrito" type="button" value="Agregar al carrito">
            </div>
        `;
    }

    contenedorLibros.innerHTML = librosHTML;
}

//agregamos los listener a los botones Agregar al Carrito
function crearListenersBotonesAgregar() {
    //guardo en un arreglo de todos los botones "Agregar al carrito"
    const botonesAgregar = document.querySelectorAll(".boton-agregar-carrito");
    //console.log(botonesAgregar)
    for (let indice = 0; indice < botonesAgregar.length; indice++) {
        //console.log("b")
        //función que ejecutará el listener
        function agregarElemCarrito() {
            const elementoLi = document.createElement("li");
            elementoLi.innerText = `Libro ${productos[indice].nombre} $${productos[indice].precio} `;
            listaCarrito.appendChild(elementoLi);
            totalAPagar += productos[indice].precio;
            totalCarrito.innerText = "Total a Pagar: $" + totalAPagar;
            mensajePagarCarrito.innerText = "";
        }

        //agregamos el listener a cada botón Agregar
        botonesAgregar[indice].addEventListener("click", agregarElemCarrito);
    }
}

// agregamos listener al botón Borrar
function borrarCarrito() {
    listaCarrito.innerHTML = "";
    totalCarrito.innerHTML = "Total a Pagar: $0";
    totalAPagar = 0;
    mensajePagarCarrito.innerText = ""
}

// agregamos listener al botón Ir a Pagar
function irAPagar() {
    if (listaCarrito.innerText === "") {
        mensajePagarCarrito.innerText = "No has seleccionado ningún libro"
    } else {
        window.location.href = "./pagos.html"
    }
}


crearCardsConDatos();
//ejecutamos la función que permite añadir productos al carrito
crearListenersBotonesAgregar();
//agregamos el listener al botón Borrar
botonBorrar.addEventListener("click", borrarCarrito);
//agregamos el listener al botón Ir a Pagar
botonPagar.addEventListener("click", irAPagar);