const productos = [
  ["001", "Coca-Cola 600ml", 18.50],
  ["002", "Pepsi 600ml", 17.00],
  ["003", "Sprite 600ml", 16.75],
  ["004", "Fanta Naranja 600ml", 16.90],
  ["005", "Agua Ciel 1L", 12.00],
  ["006", "Agua Bonafont 1L", 12.50],
  ["007", "Gatorade Azul", 22.00],
  ["008", "Powerade Rojo", 21.25],
  ["009", "Jumex Durazno 1L", 15.80],
  ["010", "Del Valle Mango 1L", 16.50],
  ["011", "Sabritas Originales", 19.00],
  ["012", "Sabritas Adobadas", 19.00],
  ["013", "Doritos Nacho", 20.50],
  ["014", "Cheetos Flamin Hot", 18.75],
  ["015", "Ruffles Queso", 19.50],
  ["016", "Tostitos Salsa Verde", 21.00],
  ["017", "Takis Fuego", 17.90],
  ["018", "Churrumais", 14.25],
  ["019", "Runners", 13.50],
  ["020", "Cacahuates Japoneses", 12.00],
  ["021", "Cacahuates Salados", 15.80],
  ["022", "Pistaches", 25.00],
  ["023", "Pepitas Enchiladas", 18.50],
  ["024", "Palomitas Mantequilla", 16.25],
  ["025", "Carlos V", 15.00],
  ["026", "Milky Way", 13.75],
  ["027", "Snickers", 14.50],
  ["028", "Kit Kat", 13.50],
  ["029", "Hershey's", 16.00],
  ["030", "M&M's", 17.25],
  ["031", "Skittles", 14.90],
  ["032", "Pulparindo", 8.00],
  ["033", "Vero Mango", 6.50],
  ["034", "Pelon Pelo Rico", 9.75],
  ["035", "Mazapán De La Rosa", 7.00],
  ["036", "Panditas", 11.50],
  ["037", "Coronitas", 10.00],
  ["038", "Bocadín", 12.80],
  ["039", "Galletas Marías", 14.00],
  ["040", "Galletas Emperador", 16.50],
  ["041", "Oreo", 18.90],
  ["042", "Príncipe", 15.75],
  ["043", "Chokis", 17.00],
  ["044", "Gansito Marinela", 13.50],
  ["045", "Pingüinos Marinela", 14.25],
  ["046", "Barritas Nutri-Grain", 16.00],
  ["047", "Choco Milk", 9.50],
  ["048", "Yogurt Lala 1L", 28.90],
  ["049", "Leche Alpura 1L", 24.50],
  ["050", "Leche Lala 1L", 23.50],
  ["051", "Huevos San Juan 12pz", 45.00],
  ["052", "Pan Blanco Bimbo", 38.00],
  ["053", "Pan Integral Bimbo", 42.75],
  ["054", "Tortillas 1kg", 22.00],
  ["055", "Arroz Verde Valle 1kg", 25.90],
  ["056", "Frijoles La Costeña", 18.50],
  ["057", "Atún Tuny", 16.75],
  ["058", "Sardinas", 14.00],
  ["059", "Salsa Valentina", 12.50],
  ["060", "Salsa Búfalo", 15.25],
  ["061", "Mayonesa McCormick", 32.00],
  ["062", "Mostaza", 18.90],
  ["063", "Ketchup Heinz", 28.50],
  ["064", "Aceite 1-2-3 1L", 35.00],
  ["065", "Sal La Fina", 8.50],
  ["066", "Azúcar 1kg", 22.00],
  ["067", "Café Nescafé 200g", 85.00],
  ["068", "Té Lipton", 12.75],
  ["069", "Sopa Maruchan", 9.50],
  ["070", "Sopas Nissin", 10.25],
  ["071", "Papel Higiénico 4 rollos", 35.00],
  ["072", "Servilletas Petalo", 18.50],
  ["073", "Jabón Zote", 14.00],
  ["074", "Detergente Ace 1kg", 45.00],
  ["075", "Cloro Cloralex 1L", 22.90],
  ["076", "Suavitel 1L", 38.50],
  ["077", "Shampoo Sedal", 42.75],
  ["078", "Jabón Palmolive", 15.50],
  ["079", "Pasta Colgate", 32.00],
  ["080", "Cepillo Dental", 25.90],
  ["081", "Desodorante Axe", 48.00],
  ["082", "Gillette Prestobarba", 35.75],
  ["083", "Pañales Huggies 10pz", 95.00],
  ["084", "Toallas Femeninas", 38.50],
  ["085", "Velas Grandes", 18.00],
  ["086", "Cerillos", 6.00],
  ["087", "Encendedor BIC", 12.00],
  ["088", "Pilas AA 4pz", 45.00],
  ["089", "Pilas AAA 4pz", 42.50],
  ["090", "Hielo 2kg", 20.00],
  ["091", "Cerveza Corona", 22.00],
  ["092", "Cerveza Modelo", 22.50],
  ["093", "Cerveza Victoria", 20.75],
  ["094", "Cerveza Tecate", 18.00],
  ["095", "Tostadas Charras", 14.90],
  ["096", "Salsas Botaneras", 16.50],
  ["097", "Limones por kg", 35.00],
  ["098", "Chile en Polvo", 10.75],
  ["099", "Chamoy", 12.00],
  ["100", "Miguelito", 8.50]
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
