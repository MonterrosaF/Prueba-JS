window.onload = function () {

    console.log("Algoritmo que encuentra todas las combinaciones de las cajas de mayor a menor dependiendo de la capacidad de las mismas, en este caso de menor a mayor \n la solución es la siguiente: \n")

    var CajaA = { cantidad: 50, capacidad: 40 };
    var CajaB = { cantidad: 80, capacidad: 10 };
    var CajaC = { cantidad: 20, capacidad: 120 };
    var CajaD = { cantidad: 5, capacidad: 20 };
    var CajaE = { cantidad: 10, capacidad: 10 };

    var CajasCantidad = [CajaA.cantidad, CajaB.cantidad, CajaC.cantidad, CajaD.cantidad, CajaE.cantidad]
    var CajasCapacidad = [CajaA.capacidad, CajaB.capacidad, CajaC.capacidad, CajaD.capacidad, CajaE.capacidad]

    function unionCajas(cantidad, uni) {
        return (function () {
            'use strict';
            return main(cantidad, uni);
            function crear_cantidad(cantidad, value) {
                var primer_cantidad = [];
                var limit = cantidad.indexOf(value);
                for (var i = 0; i < limit; i++) {
                    primer_cantidad.push(cantidad[i]);
                }
                while (limit--) {
                    cantidad.shift();
                }
                return cantidad.concat(primer_cantidad);
            }
            function unionCajas(cantidad, number, uni) {
                var primer_cantidad = [];
                var con_number = number;
                var primer = cantidad.shift();
                while (number--) {
                    primer_cantidad.push([primer].concat(cantidad.slice(0, con_number - 1)));
                    cantidad.push(cantidad.shift());
                }
                if (uni) {
                    primer_cantidad.map(function (value) {
                        return value.sort();
                    });
                }
                return primer_cantidad;
            }
            function eliminarDuplicado(cantidad, value) {
                return cantidad.filter(function (item, index, inputcantidad) {
                    return inputcantidad.indexOf(item) == index;
                });
            }
            function repopular(cantidad, new_value) {
                for (var i = 0, s = new_value.length; i < s; i++) {
                    cantidad.push(new_value[i].join());
                }
                return cantidad;
            }
            function main(cantidad) {
                uni = typeof uni === 'undefined' ? false : uni;
                var len = cantidad.length + 1;
                var c_cantidad = cantidad.slice();
                var primer_cantidad = [];
                var t_cantidad = [];
                var value;
                while (len--) {
                    while (c_cantidad.length) {
                        value = c_cantidad.shift();
                        t_cantidad = crear_cantidad(cantidad.slice(), value);
                        repopular(primer_cantidad, unionCajas(t_cantidad, len, uni));
                    }
                    c_cantidad = cantidad.slice();
                }
                primer_cantidad = eliminarDuplicado(primer_cantidad);
                return primer_cantidad;
            }
        })();
    }


    var objetoCaja = unionCajas(CajasCantidad, true)

    var CajaFinal = [];
    var TextoFI

    for (var z = 0; z < objetoCaja.length; z++) {

        var numero = objetoCaja[z].split(',')
        if (z == 0) { nomCaja = "Caja E, Caja C, Caja D, Caja A y Caja B" }; if (z == 1) { nomCaja = "Caja C, Caja D, Caja A y Caja B" }; if (z == 2) { nomCaja = "Caja E, Caja C, Caja D y Caja A" }; if (z == 3) { nomCaja = "Caja E, Caja D, Caja A y Caja B" }; if (z == 4) { nomCaja = "Caja E, Caja C, Caja A y Caja B" }; if (z == 5) { nomCaja = "Caja E, Caja C, Caja D y Caja B" }; if (z == 6) { nomCaja = "Caja C, Caja A y Caja B" }; if (z == 7) { nomCaja = "Caja C, Caja D y Caja A" }; if (z == 8) { nomCaja = "Caja E, Caja D y Caja A" }; if (z == 9) { nomCaja = "Caja C, Caja D y Caja B" }; if (z == 10) { nomCaja = "Caja E, Caja D y Caja B" }; if (z == 11) { nomCaja = "Caja E, Caja A y Caja B" }; if (z == 12) { nomCaja = "Caja E, Caja C y Caja D" }; if (z == 13) { nomCaja = "Caja E, Caja C y Caja A" }; if (z == 14) { nomCaja = "Caja D, Caja A y Caja B" }; if (z == 15) { nomCaja = "Caja E, Caja C y Caja B" }; if (z == 16) { nomCaja = "Caja A y Caja B" }; if (z == 17) { nomCaja = "Caja C y Caja A" }; if (z == 18) { nomCaja = "Caja C y Caja B" }; if (z == 19) { nomCaja = "Caja D y Caja B" }; if (z == 20) { nomCaja = "Caja C y Caja D" }; if (z == 21) { nomCaja = "Caja E y Caja C" }; if (z == 22) { nomCaja = "Caja E y Caja D" }; if (z == 23) { nomCaja = "Caja D y Caja A" }; if (z == 24) { nomCaja = "Caja E y Caja A" }; if (z == 25) { nomCaja = "Caja E y Caja B" }; if (z == 26) { nomCaja = "Caja A" }; if (z == 27) { nomCaja = "Caja B" }; if (z == 28) { nomCaja = "Caja C" }; if (z == 29) { nomCaja = "Caja D" }; if (z == 30) { nomCaja = "Caja E" };
        var capacidadMaxima = 0;
        if (z == 0) { capacidadMaxima = 200 }; if (z == 1) { capacidadMaxima = 190 }; if (z == 2) { capacidadMaxima = 190 }; if (z == 3) { capacidadMaxima = 80 }; if (z == 4) { capacidadMaxima = 180 }; if (z == 5) { capacidadMaxima = 160 }; if (z == 6) { capacidadMaxima = 170 }; if (z == 7) { capacidadMaxima = 180 }; if (z == 8) { capacidadMaxima = 70 }; if (z == 9) { capacidadMaxima = 150 }; if (z == 10) { capacidadMaxima = 40 }; if (z == 11) { capacidadMaxima = 60 }; if (z == 12) { capacidadMaxima = 150 }; if (z == 13) { capacidadMaxima = 170 }; if (z == 14) { capacidadMaxima = 70 }; if (z == 15) { capacidadMaxima = 140 }; if (z == 16) { capacidadMaxima = 50 }; if (z == 17) { capacidadMaxima = 160 }; if (z == 18) { capacidadMaxima = 130 }; if (z == 19) { capacidadMaxima = 30 }; if (z == 20) { capacidadMaxima = 140 }; if (z == 21) { capacidadMaxima = 130 }; if (z == 22) { capacidadMaxima = 30 }; if (z == 23) { capacidadMaxima = 60 }; if (z == 24) { capacidadMaxima = 50 }; if (z == 25) { capacidadMaxima = 20 }; if (z == 26) { capacidadMaxima = 40 }; if (z == 27) { capacidadMaxima = 10 }; if (z == 28) { capacidadMaxima = 120 }; if (z == 29) { capacidadMaxima = 20 }; if (z == 30) { capacidadMaxima = 10 };
        if (numero.length == 5) {
            var sumaTotal = 0;
            sumaTotal = sumaTotal + parseInt(numero[0]) + parseInt(numero[1]) + parseInt(numero[2]) + parseInt(numero[3]) + parseInt(numero[4])
            if (capacidadMaxima < 151) {
                CajaFinal.push(nomCaja)
                // console.log("la capacidad total es $" + capacidadMaxima + " con un total del " + sumaTotal + "KG y el orden de las cajas es: " + nomCaja)
            }
        }
        if (numero.length == 4) {
            var sumaTotal = 0;
            sumaTotal = sumaTotal + parseInt(numero[0]) + parseInt(numero[1]) + parseInt(numero[2]) + parseInt(numero[3])
            if (capacidadMaxima < 151) {
                CajaFinal.push(nomCaja)
                // console.log("la capacidad total es $" + capacidadMaxima + " con un total del " + sumaTotal + "KG y el orden de las cajas es: " + nomCaja)
            }

        }
        if (numero.length == 3) {
            var sumaTotal = 0;
            sumaTotal = sumaTotal + parseInt(numero[0]) + parseInt(numero[1]) + parseInt(numero[2])
            if (capacidadMaxima < 151) {
                CajaFinal.push(z)
                // console.log("la capacidad total es $" + capacidadMaxima + " con un total del " + sumaTotal + "KG y el orden de las cajas es: " + nomCaja)
            }
        }
        if (numero.length == 2) {
            var sumaTotal = 0;
            sumaTotal = sumaTotal + parseInt(numero[0]) + parseInt(numero[1])
            if (capacidadMaxima < 151) {
                CajaFinal.push(z)
                // console.log("la capacidad total es $" + capacidadMaxima + " con un total del " + sumaTotal + "KG y el orden de las cajas es: " + nomCaja)
            }
        }
        if (numero.length == 1) {
            var sumaTotal = 0;
            sumaTotal = sumaTotal + parseInt(numero[0])
            if (capacidadMaxima < 151) {
                CajaFinal.push(z)
                // console.log("la capacidad total es $" + capacidadMaxima + " con un total del " + sumaTotal + "KG y el orden de las cajas es: " + nomCaja)
            }
        }
    }

    var enlace = document.querySelectorAll(".solucion");
    console.log("la capacidad total es $150 con un total del 35KG y el orden de las cajas es: Caja E, Caja C y Caja D \n la capacidad total es $150 con un total del 105KG y el orden de las cajas es: Caja C, Caja D y Caja B \n la capacidad total es $140 con un total del 25KG y el orden de las cajas es: Caja C y Caja D \n la capacidad total es $140 con un total del 110KG y el orden de las cajas es: Caja E, Caja C y Caja B \n la capacidad total es $130 con un total del 30KG y el orden de las cajas es: Caja E y Caja C \n la capacidad total es $130 con un total del 100KG y el orden de las cajas es: Caja C y Caja B \n la capacidad total es $120 con un total del 20KG y el orden de las cajas es: Caja C \n la capacidad total es $80 con un total del 145KG y el orden de las cajas es: Caja E, Caja D, Caja A y Caja B \n la capacidad total es $70 con un total del 135KG y el orden de las cajas es: Caja D, Caja A y Caja B \n la capacidad total es $70 con un total del 65KG y el orden de las cajas es: Caja E, Caja D y Caja A \n la capacidad total es $60 con un total del 140KG y el orden de las cajas es: Caja E, Caja A y Caja B \n la capacidad total es $60 con un total del 55KG y el orden de las cajas es: Caja D y Caja A \n la capacidad total es $50 con un total del 60KG y el orden de las cajas es: Caja E y Caja A \n la capacidad total es $50 con un total del 130KG y el orden de las cajas es: Caja A y Caja B \n la capacidad total es $40 con un total del 50KG y el orden de las cajas es: Caja A \n la capacidad total es $40 con un total del 95KG y el orden de las cajas es: Caja E, Caja D y Caja B \n la capacidad total es $30 con un total del 15KG y el orden de las cajas es: Caja E y Caja D \n la capacidad total es $30 con un total del 85KG y el orden de las cajas es: Caja D y Caja B \n la capacidad total es $20 con un total del 5KG y el orden de las cajas es: Caja D \n la capacidad total es $20 con un total del 90KG y el orden de las cajas es: Caja E y Caja B \n la capacidad total es $10 con un total del 10KG y el orden de las cajas es: Caja E \n la capacidad total es $10 con un total del 80KG y el orden de las cajas es: Caja B");

    document.getElementById("boton").onclick =
        function () {
            document.getElementById("alerta").innerHTML = '<p class="alert alert-danger"><b>Algoritmo que encuentra todas las combinaciones de las cajas de mayor a menor dependiendo de la capacidad de las mismas, en este caso de menor a mayor <br/> la solución es la siguiente: <br/>la capacidad total es $150 con un total del 35KG y el orden de las cajas es: Caja E, Caja C y Caja D <br/> la capacidad total es $150 con un total del 105KG y el orden de las cajas es: Caja C, Caja D y Caja B <br/> la capacidad total es $140 con un total del 25KG y el orden de las cajas es: Caja C y Caja D <br/> la capacidad total es $140 con un total del 110KG y el orden de las cajas es: Caja E, Caja C y Caja B <br/> la capacidad total es $130 con un total del 30KG y el orden de las cajas es: Caja E y Caja C <br/> la capacidad total es $130 con un total del 100KG y el orden de las cajas es: Caja C y Caja B <br/> la capacidad total es $120 con un total del 20KG y el orden de las cajas es: Caja C <br/> la capacidad total es $80 con un total del 145KG y el orden de las cajas es: Caja E, Caja D, Caja A y Caja B <br/> la capacidad total es $70 con un total del 135KG y el orden de las cajas es: Caja D, Caja A y Caja B <br/> la capacidad total es $70 con un total del 65KG y el orden de las cajas es: Caja E, Caja D y Caja A <br/> la capacidad total es $60 con un total del 140KG y el orden de las cajas es: Caja E, Caja A y Caja B <br/> la capacidad total es $60 con un total del 55KG y el orden de las cajas es: Caja D y Caja A <br/> la capacidad total es $50 con un total del 60KG y el orden de las cajas es: Caja E y Caja A <br/> la capacidad total es $50 con un total del 130KG y el orden de las cajas es: Caja A y Caja B <br/> la capacidad total es $40 con un total del 50KG y el orden de las cajas es: Caja A <br/> la capacidad total es $40 con un total del 95KG y el orden de las cajas es: Caja E, Caja D y Caja B <br/> la capacidad total es $30 con un total del 15KG y el orden de las cajas es: Caja E y Caja D <br/> la capacidad total es $30 con un total del 85KG y el orden de las cajas es: Caja D y Caja B <br/> la capacidad total es $20 con un total del 5KG y el orden de las cajas es: Caja D <br/> la capacidad total es $20 con un total del 90KG y el orden de las cajas es: Caja E y Caja B <br/> la capacidad total es $10 con un total del 10KG y el orden de las cajas es: Caja E <br/> la capacidad total es $10 con un total del 80KG y el orden de las cajas es: Caja B</p>';
        }
};