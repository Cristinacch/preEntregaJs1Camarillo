const precio_corte = 5000;
const precio_bano = 2500;
const precio_adicional = 500;
let costo_final = 0;
let lista_reservas = [];
do{
    reservar();
    var verficacion = prompt("Desea agregar un nuevo servicio: yes or no")
    
}while(verficacion === 'yes')
mostrar_reservas()

function reservar (nombre, fecha, servicio) {
    var nombre = prompt("Ingrese su nombre");
    var mascota = prompt("Ingrese el nombre de su mascota");
    // cut = corte de cabello  y shower = banio para mascotas
    var servicio = prompt("Seleccione servicio: cut (5000 pesos) o shower (2500 pesos)"); 
    // Yes = si No = no
    var adicional= prompt("Deseas incluir el adicional de corte higienico por 500 pesos? Responde 'Yes' o 'No'") 
    fecha = prompt("Ingrese fecha con formato DD/MM/AAAA");

    if (servicio === "cut" && adicional === "yes") {
        costo_final = precio_corte + precio_adicional;
    }
    else if(servicio == "shower" && adicional === "yes"){
        costo_final = precio_bano + precio_adicional;
    }
    else if(servicio === "cut" && adicional === "no"){
        costo_final = precio_corte;
    }
    else if(servicio == "shower" && adicional === "no"){
        costo_final = precio_bano;
    }
    const reserva = {
        nombre: nombre,
        mascota: mascota,
        servicio: servicio,
        adicional: adicional,
        fecha: fecha,
        precio : costo_final,
        // imprimir_reserva : function(){
        // alert(`${nombre} tu reserva para el ${servicio}  atu mascota ${mascota} es en la fecha ${fecha} con el costo ${costo_final}`);
        // }   
    }
    lista_reservas.push(reserva);
    // reserva.imprimir_reserva();
}
function mostrar_reservas(){
    for (let i = 0; i < lista_reservas.length; i++) {
        alert(`${lista_reservas[i].nombre} tu reserva para el ${lista_reservas[i].servicio}  a tu mascota ${lista_reservas[i].mascota} es en la fecha ${lista_reservas[i].fecha} con el costo ${lista_reservas[i].precio}`);
    }
}