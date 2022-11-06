/*PRIMERA ENTREGA DE PROYECTO FINAL
AGREGAR UN CONDICIONAL (IF, SWITCH)
AGREGAR UN CICLO (FOR, WHILE, DO WHILE)
DE UN PROCESO CONOCIDO 
- hay que pedir valores por prompt*/

// CONVERSOR DE DIVISAS

let salir

do {
    let monedaIni = prompt("¿Qué moneda tienes?:\nMXN • USD • EUR").toLowerCase();
    let cantidadIni = parseInt(prompt("¿Qué cantidad deseas cambiar?"));
    let monedaCambio = prompt("¿A qué moneda quieres convertir esa cantidad?:\nMXN • USD • EUR").toLowerCase();
    
    if ((monedaIni == "mxn") && (monedaCambio == "usd")) {
        resultado = (cantidadIni / 19.78);
        document.write("$" + resultado + " USD");
    }
    else if ((monedaIni == "eur") && (monedaCambio == "usd")) {
        resultado = (cantidadIni / 1.00823);
        document.write("$" + resultado + " USD");
        }
    else if ((monedaIni == "usd") && (monedaCambio == "mxn")) {
        resultado = (cantidadIni * 19.78);
        document.write("$" + resultado + " MXN");
    }
    else if ((monedaIni == "usd") && (monedaCambio == "eur")) {
        resultado = (cantidadIni * 1.00823);
        document.write("$" + resultado + " EUR");
        }
    else if ((monedaIni == "mxn") && (monedaCambio == "eur")) {
        resultado = (cantidadIni / 19.66);
        document.write("$" + resultado + " EUR");
        }
    else if ((monedaIni == "eur") && (monedaCambio == "mxn")) {
        resultado = (cantidadIni * 19.66);
        document.write("$" + resultado + " MXN");
        }
    else {
        salir = parseInt(prompt("No sé qué estás haciendo, para volver a empezar ingresa 1, \npara salir ingresa cualquier numero"))
    }
    
} while (salir == 1)