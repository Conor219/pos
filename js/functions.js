const productos = [
  ["001", "Laptop Gamer", 15200.50],
  ["002", "Smartphone ro", 8900.00],
  ["003", "Audífonos Bluetooth", 750.90],
  ["004", "Teclado Mecánico", 1200.00],
  ["005", "Mouse Inalámbrico", 560.75],
  ["006", "Monitor 27 pulgadas", 4200.40],
  ["007", "Silla Gamer", 3100.00],
  ["008", "Tablet 10\"", 6700.00],
  ["009", "Impresora Láser", 2800.99],
  ["010", "Cámara Web HD", 680.00],
  ["011", "Disco Duro 1TB", 1450.00],
  ["012", "SSD 512GB", 2200.00],
  ["013", "Memoria RAM 16GB", 1700.00],
  ["014", "Fuente de oder 600W", 1350.00],
  ["015", "Tarjeta Madre ATX", 3200.00],
  ["016", "rocesador i7", 9500.00],
  ["017", "Tarjeta de Video RTX", 14500.00],
  ["018", "USB 64GB", 350.00],
  ["019", "Smartwatch", 2800.00],
  ["020", "Cargador ortátil", 600.00],
  ["021", "Bocina Bluetooth", 850.00],
  ["022", "Router WiFi 6", 2100.00],
  ["023", "royector LED", 5200.00],
  ["024", "Cable HDMI", 200.00],
  ["025", "Soporte para Monitor", 750.00],
  ["026", "Cámara Reflex", 18500.00],
  ["027", "Lente 50mm", 4800.00],
  ["028", "Dron 4K", 12500.00],
  ["029", "Trípode rofesional", 1600.00],
  ["030", "Micrófono USB", 1200.00],
  ["031", "Luces LED RGB", 900.00],
  ["032", "Smart TV 55\"", 13500.00],
  ["033", "Barra de Sonido", 4600.00],
  ["034", "Subwoofer", 2400.00],
  ["035", "Nintendo Switch", 8200.00],
  ["036", "layStation 5", 14800.00],
  ["037", "Xbox Series X", 14500.00],
  ["038", "Juego FIFA 25", 1600.00],
  ["039", "Juego GTA VI", 2100.00],
  ["040", "Controles S5", 2200.00],
  ["041", "Control Xbox", 2100.00],
  ["042", "Cámara Goro", 9600.00],
  ["043", "Micrófono Lavalier", 650.00],
  ["044", "Estabilizador Gimbal", 3400.00],
  ["045", "Celular Básico", 1200.00],
  ["046", "Mini royector", 3100.00],
  ["047", "Lámpara Escritorio LED", 450.00],
  ["048", "Reloj de ared", 350.00],
  ["049", "Batería de Cámara", 700.00],
  ["050", "Ventilador USB", 280.00],
  ["051", "Cafetera Automática", 2400.00],
  ["052", "Refrigerador 14ft", 9800.00],
  ["053", "Lavadora Automática", 8200.00],
  ["054", "Secadora Eléctrica", 7500.00],
  ["055", "Microondas Digital", 2300.00],
  ["056", "Licuadora", 950.00],
  ["057", "Tostadora", 700.00],
  ["058", "Aspiradora", 3600.00],
  ["059", "lancha a Vapor", 1200.00],
  ["060", "Robot de Cocina", 5400.00],
  ["061", "Cámara de Seguridad", 1800.00],
  ["062", "Kit de Herramientas", 2100.00],
  ["063", "Taladro Inalámbrico", 1600.00],
  ["064", "Sierra Circular", 3400.00],
  ["065", "Juego de Llaves", 950.00],
  ["066", "Compresor de Aire", 4200.00],
  ["067", "Bicicleta de Montaña", 8700.00],
  ["068", "atineta Eléctrica", 6500.00],
  ["069", "Scooter Eléctrico", 7900.00],
  ["070", "Casco de Seguridad", 1200.00],
  ["071", "Guantes Deportivos", 350.00],
  ["072", "Balón de Fútbol", 600.00],
  ["073", "Raqueta de Tenis", 2100.00],
  ["074", "Guantes de Boxeo", 1400.00],
  ["075", "esas Ajustables", 3200.00],
  ["076", "Colchón Queen Size", 12500.00],
  ["077", "Juego de Sábanas", 1500.00],
  ["078", "Almohada Memory Foam", 950.00],
  ["079", "Cobija Eléctrica", 2200.00],
  ["080", "Escritorio Oficina", 5400.00],
  ["081", "Silla Ergonómica", 4800.00],
  ["082", "Librero de Madera", 3600.00],
  ["083", "Mesa de Centro", 2400.00],
  ["084", "Sofá 3 lazas", 12800.00],
  ["085", "Comedor 6 Sillas", 15900.00],
  ["086", "Ropero Grande", 8900.00],
  ["087", "Zapatera", 2200.00],
  ["088", "Cómoda de Madera", 7400.00],
  ["089", "Espejo de ared", 1800.00],
  ["090", "Lámpara de ie", 2600.00],
  ["091", "arrilla Eléctrica", 2800.00],
  ["092", "Asador a Carbón", 3500.00],
  ["093", "Horno Eléctrico", 4200.00],
  ["094", "Freidora de Aire", 3300.00],
  ["095", "Batidora de Mano", 1200.00],
  ["096", "Extractor de Jugos", 2600.00],
  ["097", "rocesador de Alimentos", 3100.00],
  ["098", "Enfriador de Vinos", 8700.00],
  ["099", "Dispensador de Agua", 2400.00],
  ["100", "Climatizador ortátil", 6700.00]
];

function buscarProducto (event){
    //alert(event.key);
    
    // Presionar ESC - Eliminar última fila
    if (event.key === "Escape") {
        eliminarUltimaFila();
        event.preventDefault();
        return;
    }
    
    // Presionar TAB - Aumentar cantidad del último producto
    if (event.key === "Tab") {
        aumentarCantidadUltimo();
        event.preventDefault();
        return;
    }
    
    // Presionar C - Borrar toda la lista de productos
    if (event.key === "c" || event.key === "C") {
        limpiarCarrito();
        // También limpiar el cambio
        document.getElementById("montoCambio").innerHTML = "";
        event.preventDefault();
        return;
    }
    
    // Presionar P - Procesar pago y calcular cambio
    if (event.key === "p" || event.key === "P") {
        procesarPago();
        event.preventDefault();
        return;
    }
    
    if (event.key==="Enter"){
        var codigo=document.getElementById("inputCodigo").value;

        if (codigo.length>0) {
            var cantidad=1;
            if (codigo.indexOf("*")!=-1) {
                cantidad=codigo.split("*")[0];
                codigo=codigo.split("*")[1];
            }
        }

        for (let index = 0; index < productos.length; index++) {
            if (codigo==productos[index][0]) {
                //alert("Encontre el producto " + productos[index][1]);

                // Limpiar el cambio al agregar un nuevo producto
                document.getElementById("montoCambio").innerHTML = "";

                //Agregamos el producto al carrito, en este caso la pantalla en blanco.
                var table=document.getElementById("carrito");
                var row=table.insertRow();
                var celda1=row.insertCell(0);
                var celda2=row.insertCell(1);
                var celda3=row.insertCell(2);
                var celda4=row.insertCell(3);

                celda1.innerHTML=cantidad; //int
                celda2.innerHTML=productos[index][1];
                celda3.innerHTML=productos[index][2].toFixed(2); //precio unitario
                celda4.innerHTML = (parseFloat(productos[index][2])*cantidad).toFixed(2);
                //celda4.innerHTML=productos[index][2]; //string. es igual a multiplicar la cantidad por el precio unitario
                
                // Actualizar el total general
                actualizarTotal();
            }
        }
        document.getElementById("inputCodigo").value="";
    }
    
}

function actualizarTotal() {
    var table = document.getElementById("carrito");
    var total = 0;
    
    // Recorrer todas las filas y sumar los totales (columna 4)
    for (let i = 0; i < table.rows.length; i++) {
        var celda = table.rows[i].cells[3]; // columna del total
        if (celda) {
            total += parseFloat(celda.innerHTML);
        }
    }
    
    // Formatear el total con separador de miles
    var totalFormateado = total.toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
    
    // Actualizar el monto total en pantalla
    document.getElementById("monto").innerHTML = "$ " + totalFormateado;
}

// Función para eliminar la última fila del carrito (ESC)
function eliminarUltimaFila() {
    var table = document.getElementById("carrito");
    if (table.rows.length > 0) {
        table.deleteRow(table.rows.length - 1);
        actualizarTotal();
    }
}

// Función para aumentar cantidad del último producto (TAB)
function aumentarCantidadUltimo() {
    var table = document.getElementById("carrito");
    if (table.rows.length > 0) {
        var ultimaFila = table.rows[table.rows.length - 1];
        var celdaCantidad = ultimaFila.cells[0];
        var celdaPrecio = ultimaFila.cells[2];
        var celdaTotal = ultimaFila.cells[3];
        
        // Aumentar cantidad en 1
        var cantidadActual = parseInt(celdaCantidad.innerHTML);
        var nuevaCantidad = cantidadActual + 1;
        celdaCantidad.innerHTML = nuevaCantidad;
        
        // Recalcular total de la fila
        var precioUnitario = parseFloat(celdaPrecio.innerHTML);
        var nuevoTotal = precioUnitario * nuevaCantidad;
        celdaTotal.innerHTML = nuevoTotal.toFixed(2);
        
        // Actualizar el total general
        actualizarTotal();
    }
}

// Función para limpiar todo el carrito (tecla C)
function limpiarCarrito() {
    var table = document.getElementById("carrito");
    
    // Eliminar todas las filas del carrito
    while (table.rows.length > 0) {
        table.deleteRow(0);
    }
    
    // Resetear el total a $0.00
    document.getElementById("monto").innerHTML = "$ 0.00";
    
    // Limpiar el campo de búsqueda
    document.getElementById("inputCodigo").value = "";
}

// Función para procesar el pago (tecla P)
function procesarPago() {
    var table = document.getElementById("carrito");
    
    // Verificar que haya productos en el carrito
    if (table.rows.length === 0) {
        alert("No hay productos en el carrito.");
        return;
    }
    
    // Obtener el monto del efectivo ingresado
    var efectivo = parseFloat(document.getElementById("inputCodigo").value);
    
    // Validar que se haya ingresado un monto válido
    if (isNaN(efectivo) || efectivo <= 0) {
        alert("Por favor, ingrese un monto válido de efectivo.");
        return;
    }
    
    // Calcular el total del carrito
    var total = 0;
    for (let i = 0; i < table.rows.length; i++) {
        var celda = table.rows[i].cells[3];
        if (celda) {
            total += parseFloat(celda.innerHTML);
        }
    }
    
    // Verificar si el efectivo es suficiente
    if (efectivo < total) {
        var faltante = (total - efectivo).toFixed(2);
        var faltanteFormateado = parseFloat(faltante).toLocaleString('en-US', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });
        alert("Efectivo insuficiente. Faltan: $" + faltanteFormateado);
        return;
    }
    
    // Calcular el cambio
    var cambio = efectivo - total;
    
    // Formatear el cambio con separador de miles
    var cambioFormateado = cambio.toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
    
    // Mostrar el cambio en la interfaz
    document.getElementById("montoCambio").innerHTML = "Cambio: $ " + cambioFormateado;
    
    // Limpiar el carrito después de mostrar el cambio
    setTimeout(function() {
        limpiarCarrito();
    }, 100);
}
