let cleintes;

cleintes = "carlos";

console.log(cleintes);


// Tipo de dato Number
let edad = 25;

// Tipo de dato String
let nombre = "Juan";

// Tipo de dato Boolean
let esEstudiante = true;

// Mostrar los valores de las variables en la consola
console.log("Edad:", edad);
console.log("Nombre:", nombre);
console.log("¿Es estudiante?", esEstudiante);



// Array para almacenar los productos del inventario
let inventario = [];

// Objeto que representa un producto
function Producto(nombre, cantidad, precio) {
    this.nombre = nombre;
    this.cantidad = cantidad;
    this.precio = precio;
}

// Función para agregar un producto al inventario
function agregarProducto() {
    let nombre = prompt("Introduce el nombre del producto:");
    let cantidad = parseInt(prompt("Introduce la cantidad del producto:"));
    let precio = parseFloat(prompt("Introduce el precio del producto:"));

    let nuevoProducto = new Producto(nombre, cantidad, precio);
    inventario.push(nuevoProducto);

    alert("Producto agregado al inventario.");
}

// Función para eliminar un producto del inventario
function eliminarProducto() {
    let nombre = prompt("Introduce el nombre del producto a eliminar:");

    let indice = inventario.findIndex(producto => producto.nombre.toLowerCase() === nombre.toLowerCase());

    if (indice !== -1) {
        inventario.splice(indice, 1);
        alert("Producto eliminado del inventario.");
    } else {
        alert("Producto no encontrado.");
    }
}

// Función para mostrar el inventario
function mostrarInventario() {
    if (inventario.length === 0) {
        alert("El inventario está vacío.");
    } else {
        let inventarioList = "Inventario:\n";
        inventario.forEach(producto => {
            inventarioList += `Nombre: ${producto.nombre}, Cantidad: ${producto.cantidad}, Precio: $${producto.precio.toFixed(2)}\n`;
        });
        alert(inventarioList);
    }
}

// Función para ejecutar las operaciones del simulador
function ejecutarSimulador() {
    let opcion;

    do {
        // Menú de opciones
        opcion = prompt("Seleccione una opción:\n1. Agregar Producto\n2. Eliminar Producto\n3. Mostrar Inventario\n4. Salir");

        switch (opcion) {
            case "1":
                agregarProducto();
                break;
            case "2":
                eliminarProducto();
                break;
            case "3":
                mostrarInventario();
                break;
            case "4":
                alert("¡Gracias por usar el simulador!");
                break;
            default:
                alert("Opción inválida. Intenta nuevamente.");
        }
    } while (opcion !== "4");
}

// Llamada a la función principal para ejecutar el simulador
ejecutarSimulador();

