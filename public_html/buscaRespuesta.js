//genera una respuesta con cruces 'X' o círculos 'O' en función de un
//número entero (para ello usa su formato binario en 8 posiciones)
function generaRespuestaDeNumero(numero) {
    // lo convertimos en una cadena binaria
    respuesta = new String(numero.toString(2));
    //completamos hasta que tenga 8 digitos
    respuesta = respuesta.padStart(8, '0');
    //cambia 1 por cruces 'X' usando una expresión regular con g
    respuesta = respuesta.replace(/1/g, 'X');
    //cambia 0 por circulos
    respuesta = respuesta.replace(/0/g, 'O');

    return respuesta;
}

//genera todas las posibles combinaciones (256) y las prueba
function buscaRespuestaBruto(patron) {
    //mostramos el patron
    document.write('patron: ' + patron + '<br>');

    for (let paso = 0; paso < 256; paso++) {
        //generamos la respuestaAprobar
        let respuestaAProbar = generaRespuestaDeNumero(paso);
        //mostramos el resultado
        let resultado = validaRespuesta(patron, respuestaAProbar);
        if (resultado==patron){
            document.write('paso: '+ paso.toString()+'/ ' + respuestaAProbar + ' / ' + resultado+'<br>' );
        }
    }
    return true
}

//hace un número de intentos al azar!!
function buscaRespuestaAlAzar(intentos) {
    let respuesta = '';
    for (let numeroIntentos = 1; numeroIntentos < intentos; numeroIntentos++) {
        respuesta = '';
        for (let i = 0; i < 8; i++) {
            respuesta = respuesta + (Math.random() > 0.5 ? '1' : '0');
        }
        if (validaRespuesta(respuesta)) {
            return respuesta;
        }
    }
    return 'sin solucion'
}