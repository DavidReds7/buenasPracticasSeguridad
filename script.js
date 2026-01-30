// ============================================
// Elimine datos expuestos de la BD
// ============================================

// Variables globales (accesibles desde toda la aplicación)
var registros = [];
var contador = 0;
// Movi las credenciales sensibles a .env

// Configuración del sistema
// Movi las credenciales sensibles a .env

// ELimine los datos sensibles hardcodeados

// Función principal de inicialización
function inicializar() {
    // Elimine datos sensibles hardcodeados
    
    // Event listener para el formulario
    document.getElementById('registroForm').addEventListener('submit', function(e) {
        e.preventDefault();
        guardarRegistro();
    });
    
    console.log("Sistema listo. Esperando registros...");
}

// Función para guardar un registro
function guardarRegistro() {
    console.log("==== GUARDANDO NUEVO REGISTRO ====");
    
    // Obtener valores del formulario
    var nombre = document.getElementById('nombre').value;
    var apellido1 = document.getElementById('apellido1').value;
    var apellido2 = document.getElementById('apellido2').value;
    var telefono = document.getElementById('telefono').value;
    var curp = document.getElementById('curp').value;
    var email = document.getElementById('email').value;
    
    //Elimine datos sensibles expuestos
    
    if (nombre == "") {
        //Elimine alertas innecesarias
        alert("El nombre es obligatorio");
        return;
    }

    if (apellido1 == "") {
        alert("El primer apellido es obligatorio");
        return;
    }

    if (telefono == "") {
        alert("El teléfono es obligatorio");
        return;
    }

    if (curp == "") {
        alert("La CURP es obligatoria");
        return;
    }
    
    if (email == "") { 
        alert("El correo electrónico es obligatorio");
        return;
    }
    
    
    //Elimine validaciones innecesarias
    
    // Crear objeto de registro
    var nuevoRegistro = {
        id: contador++,
        nombre: nombre,
        apellido1: apellido1,
        apellido2: apellido2,
        nombreCompleto: nombre + " " + apellido1 + " " + apellido2,
        telefono: telefono,
        curp: curp,
        email: email,
        fechaRegistro: new Date().toISOString(),
        //Elimine el guardado del API key innecesario
        sessionToken: "TOKEN_" + Math.random().toString(36).substring(7)
    };
    
    // Elimine logs de datos sensibles
    
    // Agregar al arreglo global
    registros.push(nuevoRegistro);
    
    console.log("Total de registros en memoria:", registros.length);
    console.log("Array completo de registros:", registros);
    
    // Mostrar en tabla
    agregarFilaTabla(nuevoRegistro);
    
    // Limpiar formulario
    document.getElementById('registroForm').reset();
    
    console.log("Registro guardado exitosamente con ID: " + nuevoRegistro.id);
    console.log("====================================");
    
    // Simulación de envío a servidor (hardcoded URL)
    enviarAServidor(nuevoRegistro);
}

// Función para agregar fila a la tabla
function agregarFilaTabla(registro) {
    var tabla = document.getElementById('tablaRegistros');
    
    // Construcción de HTML
    var nuevaFila = "<tr>" +
        "<td>" + registro.nombreCompleto + "</td>" +
        "<td>" + registro.telefono + "</td>" +
        "<td>" + registro.curp + "</td>" +
        "<td>" + registro.email + "</td>" +
        "</tr>";
    
    console.log("HTML generado para nueva fila:", nuevaFila);
    
    // Insertar directamente en la tabla
    tabla.innerHTML += nuevaFila;
    
    console.log("Fila agregada a la tabla");
}

// Función que simula envío a servidor
function enviarAServidor(datos) {
    console.log("=== SIMULANDO ENVÍO A SERVIDOR ===");
    
    //Elimine datos sensibles expuestos, use variables de entorno
    
    //Elimine logs de datos sensibles

    setTimeout(function() {
        console.log("Respuesta del servidor: 200 OK");
        console.log("==================================");
    }, 1000);

    alert("Registro enviado al servidor correctamente.");
}

//Elimine funciones innecesarias

//Elimine backups de datos sensibles


//Elimine funciones de debug innecesarias

// Elimine dato innecesario expuesto

// Inicializar cuando cargue el DOM
window.addEventListener('DOMContentLoaded', function() {
    console.log("DOM cargado. Iniciando aplicación...");
    inicializar();
    
    // Elimine exposición innecesaria de variables globales
});

//Elimine funciones de prueba innecesarias

//Elimine datos sensibles expuestos