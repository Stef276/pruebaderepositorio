// Cargar el inventario desde localStorage si está disponible
let inventario = JSON.parse(localStorage.getItem("inventario")) || [];

// Referencias a elementos del DOM
const nombreInput = document.getElementById("nombreProducto");
const cantidadInput = document.getElementById("cantidadProducto");
const precioInput = document.getElementById("precioProducto");
const inventarioList = document.getElementById("inventarioList");
const mensajeError = document.getElementById("mensajeError");
const btnMostrar = document.getElementById("btnMostrar");

// Mostrar inventario en el DOM
function mostrarInventario() {
    inventarioList.innerHTML = ""; // Limpiar la lista actual

    if (inventario.length === 0) {
        inventarioList.innerHTML = "<p>El inventario está vacío.</p>";
    } else {
        inventario.forEach((producto, index) => {
            const productoDiv = document.createElement("div");
            productoDiv.classList.add("producto");
            productoDiv.innerHTML = `
                <strong>${producto.nombre}</strong> | Cantidad: ${producto.cantidad} | Precio: $${producto.precio.toFixed(2)}
                <button class="eliminarBtn" data-index="${index}">Eliminar</button>
            `;
            inventarioList.appendChild(productoDiv);
        });

        // Añadir eventos a los botones de eliminación
        const eliminarBtns = document.querySelectorAll(".eliminarBtn");
        eliminarBtns.forEach(btn => {
            btn.addEventListener("click", eliminarProducto);
        });
    }
}

// Agregar producto al inventario
function agregarProducto() {
    const nombre = nombreInput.value;
    const cantidad = parseInt(cantidadInput.value);
    const precio = parseFloat(precioInput.value);

    // Validación de datos
    if (!nombre || isNaN(cantidad) || cantidad <= 0 || isNaN(precio) || precio <= 0) {
        mensajeError.textContent = "Todos los campos son obligatorios y deben ser válidos.";
        return;
    }

    // Crear el nuevo producto
    const nuevoProducto = { nombre, cantidad, precio };

    // Agregar al inventario
    inventario.push(nuevoProducto);

    // Guardar el inventario actualizado en localStorage
    localStorage.setItem("inventario", JSON.stringify(inventario));

    // Limpiar campos de entrada y mensaje de error
    nombreInput.value = "";
    cantidadInput.value = "";
    precioInput.value = "";
    mensajeError.textContent = ""; // Limpiar el mensaje de error

    mostrarInventario(); // Actualizar visualización del inventario
}

// Eliminar un producto del inventario
function eliminarProducto(event) {
    const indice = event.target.getAttribute("data-index");

    // Eliminar del inventario
    inventario.splice(indice, 1);

    // Actualizar el inventario en localStorage
    localStorage.setItem("inventario", JSON.stringify(inventario));

    mostrarInventario(); // Actualizar visualización del inventario
}

// Evento del botón "Ver Inventario"
btnMostrar.addEventListener("click", function() {
    // Mostrar inventario solo si no está vacío
    if (inventario.length > 0) {
        mostrarInventario();
    } else {
        inventarioList.innerHTML = "<p>El inventario está vacío.</p>";
    }
});

// Event listeners
document.getElementById("btnAgregar").addEventListener("click", agregarProducto);

// Mostrar inventario al cargar la página
mostrarInventario();
