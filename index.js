let nombre = prompt ("Ingrese su nombre");
alert("hola " + nombre + " bienvenido a Turbulencia Viajes: Haz click para continuar");
let pedido = prompt("Ingresar pedido");
if (pedido === "coffe" || pedido === "te" || pedido === "jugo exprimido"){
alert("pedido en marcha");
}
else{
    alert("pedido rechazado");
    /* ACA QUIERO CORTAR CON UN BREAK PERO NO ME LO TOMA
       LA IDEA ES QUE CUANDO EL PEDIDO SEA RECHAZADO SE CORTE TODO*/
}

alert("compra finalizada")