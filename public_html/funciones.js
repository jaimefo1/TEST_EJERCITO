//#region condiciones
// establece a checked todos los elementos de una lista chekbox
function marcarTodasLasCondiciones(valor) {
    //recuperamos el DIV (condiciones) en la variable seccion
    let seccion = document.getElementById('condiciones');
    //obtenemos la lista de input (checkbox)
    let listaCheck = seccion.getElementsByTagName('input');
    //las ponemos todos con checked = valor (true o false)
    for (elemento of listaCheck) {
        elemento.checked = valor
    };
    muestraSoluciones();
}

function cambioCondiciones() {
    if (document.getElementById("mostrarSoluciones").checked) {
        muestraSoluciones();
    }
}
//#endregion

//#region FUNCIONES BOTONERA RESPUESTA
//alterna circulo o cruz del boton que viene
function cambiaRespuesta(boton) {
    if (boton.value == 'cruz') {
        boton.value = 'circulo';
        boton.firstElementChild.src = '../circulo.png';
    } else {
        boton.value = 'cruz';
        boton.firstElementChild.src = '../cruz.png';
    }

}

//pone todos los botones a cruces
function todoIgual(forma) {
    //buscamos todos los botones
    for (let numero = 1; numero <= 8; numero++) {
        //devuelve una HTMLcollection
        let boton = document.getElementsByName('bt' + numero);
        boton[0].value = forma;
        boton[0].firstElementChild.src = '../' + forma + '.png';
    }
}

//alterna cruces y circulos
function alternar() {
    //buscamos todos los botones
    for (let numero = 1; numero <= 8; numero++) {
        //cambiamos la respuesta
        let boton = document.getElementsByName('bt' + numero);
        cambiaRespuesta(boton[0]);
    }
}

//generar una respuesta al azar
function respuestaAlAzar() {
    let respuesta = '';
    for (let i = 1; i <= 8; i++) {
        ponerBoton(i, (Math.random() > 0.5 ? "cruz" : "circulo"));


    }
}

//pone un boton 'bt?' a 'cruz' o 'circulo'
function ponerBoton(numero, forma) {
    let boton = document.getElementsByName('bt' + numero);
    boton[0].value = forma;
    boton[0].firstElementChild.src = '../' + forma + '.png';

}

//#endregion

//activa desactiva los elementos de los div de condiciones y respuesta
//en función de si estamos poneindo una respuesta o viendo el resultado
function PanelesConicionesYRespuesta(valor) {
    //des/activamos las condiciones para que no las modifiquen
    let elementos = document.getElementById("condiciones").getElementsByTagName("ckbox*");
    for (elemento of elementos) {
        elemento.disabled = valor;
    }

    // des/activamos los botones  del el div de respuesta??
    let botones = document.getElementById("respuesta").getElementsByTagName('button');
    for (let boton of botones) {
        boton.disabled = valor;
    }
}

//genera patron, en función de los checkbox genera el patron de condiciones a validar
function generaPatron() {
    //buscamos todos los checbox de las condiciones para el patron
    //recuperamos el DIV (condiciones) en la variable seccion
    let patron = '';
    let seccion = document.getElementById('condiciones');
    //obtenemos la lista de input (checkbox)
    let listaCheck = seccion.getElementsByTagName('input');
    for (elemento of listaCheck) {
        patron = patron + (elemento.checked ? '1' : '-');
    };
    return patron;
}

//genera una cadena respuesta en función de las formas que haya en los botones
function generaRespuesta() {
    //buscamos todos los botones de respuesta para generar la respuesta a validar
    let respuesta = '';
    for (let numero = 1; numero <= 8; numero++) {
        let boton = document.getElementsByName('bt' + numero);
        //añadimos cruz o circulo dependiendo del value
        respuesta = respuesta + (boton[0].value == 'cruz' ? 'X' : 'O');
    }
    return respuesta;
}

//comprueba la respuesta marcas con el patron de las condiciones
//devuelve 1,0 o '-' según se cumpla la condicion, no o no esté marcada
//usa el js validaTest.js
function comprobar() {

    //desactivamos condiciones y respuestas
    PanelesConicionesYRespuesta(true);

    //mostramos el div de resultado
    document.getElementById("resultado").hidden = false;

    //generamos las respuesta (botone bt?) y el patron (checkbox cbox?)
    let respuesta = generaRespuesta();
    let patron = generaPatron();
    //llamamos a la funcion validaRespuesta y devolvemos
    return validaRespuesta(patron, respuesta);

}

// permite evaluar una nueva respuesta y oculta resultado
function nuevaRespuesta() {
    //activamos condiciones y respuestas
    PanelesConicionesYRespuesta(false);
    //ocultamos el div de resultado
    document.getElementById("resultado").hidden = true;
}

//genera una cadena con la posición de cada 0 que encuentra en resultado
function ponErrores(resultado) {
    //inicialmente a nada
    let cadena = 'FALLOS EN: ';
    //por cada elemento que sea 0 añadimos su indice (en 0)
    for (indice = 1; indice <= resultado.length; indice++) {
        if (resultado[indice - 1] == '0') {
            cadena = cadena + indice + ', ';
        }
    }
    return cadena.substr(0, cadena.length - 2);
}

//coloca una imagen indicando fallo o no
//si hay fallo indica qué condiciones se han fallado (ponErrores)
//permite pasar a una nueva respuesta
function resultado() {
    let resultado = comprobar();
    let celdaCorrectoIncorrecto = document.getElementById("celdaCorrectoIncorrecto");
    let celdaListaFallos = document.getElementById("celdaListaFallos");

    //si no hay un 0 en la respuesta es que está bien
    if (resultado.indexOf('0', 0) < 0) {
        celdaCorrectoIncorrecto.firstChild.src = 'file:///C:/JS/PROYECTOS/TEST_EJERCITO/correcto.png';
        celdaCorrectoIncorrecto.getElementsByTagName('label')[0].textContent = 'CORRECTO';
        celdaListaFallos.innerText = '';
    } else {
        celdaCorrectoIncorrecto.firstChild.src = 'file:///C:/JS/PROYECTOS/TEST_EJERCITO/incorrecto.png';
        celdaCorrectoIncorrecto.getElementsByTagName('label')[0].textContent = ' INCORRECTO';
        celdaListaFallos.innerText = ponErrores(resultado);
    }
}

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

//genera un array con todos los posibles resultados
function listaPosiblesResultadosCorrectos() {
    const patron = generaPatron();
    let lista = new Array();
    for (let paso = 0; paso < 256; paso++) {
        //generamos la respuestaAprobar
        const respuestaAProbar = generaRespuestaDeNumero(paso);
        //mostramos el resultado
        const resultado = validaRespuesta(patron, respuestaAProbar);
        if (resultado == patron) {
            lista.push(respuestaAProbar);
        }
    }
    return lista;
}

//genera el tag table con las posibles soluciones dentro del div
//soluciones, si está cheked el chekbox de soluciones
function muestraSoluciones() {
    //recogemos la lista de soluciones
    let lista = listaPosiblesResultadosCorrectos();
    //cogemos la tabla
    let tabla = document.getElementById("tablaSoluciones");
    //eliminamos las filas que hay (si hay numFilas >0)
    let numFilas = tabla.rows.length;
    while (numFilas > 0) {
        tabla.deleteRow(numFilas - 1);
        numFilas--;
    }
    //si hay que mostra mostramos
    if (document.getElementById("mostrarSoluciones").checked) {
        //insertamos la lista de soluciones
        for (solucion in lista) {
            tabla.insertRow(-1).innerHTML = '<td>' + lista[solucion] + '</td>';
        }
    }
}