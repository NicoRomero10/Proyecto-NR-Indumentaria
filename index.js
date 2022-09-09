function ingresarNombre () {
    alert ("Bienvenidos a Turbulencia Viajes: Haz click para continuar");
    let nombre = prompt ("Ingresar nombre");
    let apellido = prompt ("Ingresar apellido");
    let direccion = prompt ("Ingrese su dirección");
    while (nombre === "" || apellido=== "" || direccion === "") {
        nombre = prompt ("Ingresar nombre");
        apellido = prompt ("Ingresar apellido");
        direccion = prompt ("Ingrese su dirección");
    }
    console.log("Hola " + nombre + " " + apellido);
    alert ("Hola " + nombre + " " + apellido + "," + " Comenza a viajar desde ahora")
}

function mostrarDestinos () {
    let destinos;
    do {
    destinos = parseInt (prompt ("¿A donde queres viajar?:\n1: Punta Cana + Excursiones incluidas $102000. \n2: Tour Europa all inclusive $190000. \n3: Crucero por el caribe $61800. \n4: Rio de Janeiro $41500."))} 
    while (destinos != 1 && destinos!=2 && destinos!=3 && destinos!=4)
    switch (destinos) {
        case 1:
            return "Opcion 1";
        case 2:
            return "Opcion 2";
        case 3:
            return "Opcion 3";
        case 4:
            return "Opcion 4";
    }
}

function validarPrecio (destinos) {
    if (destinos === "Opcion 1") {
        return 102000;
    }
    else if (destinos === "Opcion 2") {
        return 190000;
    }
    else if (destinos=== "Opcion 3") {
        return 61800;
    }
    else if (destinos === "Opcion 4") {
        return 41500;
    }
    else {
        console.log("No es una opción válida");
    }

}

function cobrar (nombre,precio) {
alert ("Usted seleccionó lo siguiente: " +nombre +"\nPrecio: $"+precio);
let pago = parseInt (prompt ("¿Ingresar pago?"))
if (pago>= precio) {
    alert ("Compra confirmada, usted obtendra un credito a favor de " + "$" + (pago - precio) + "," + " para realizar compras. El voucher llegara a su domicilio." + "\nFecha estimada: 60 dias desde la compra.")
} else {
    alert ("La operacion fue rechazada")
}
}

ingresarNombre ();
let destinosNombre = mostrarDestinos ();
let precioDestinos = validarPrecio (destinosNombre);
cobrar (destinosNombre, precioDestinos)

