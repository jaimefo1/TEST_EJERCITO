/* #region  ESPECIFICACIONES INICIALES */
/* 
 se recibe como parámetro una cadena de 8 caracteres en las que 0 indica cruz y 1 circulo
 
 2. En una prueba de reclutamiento, los solicitantes tienen la tarea de llenar 
 ocho cuadros con una cruz 'X' o un círculo 'O'. 
 Ninguno de los cuadros puede permanecer vacío.
 
 Para resolver la tarea, recibirá una nota con la siguiente información:
 
 1. Si hay más de una cruz en los cuadros cuarto, quinto y sexto, ha fallado.
 2. Si hay una cruz en los cuadros tercero, quinto y séptimo, ha fallado.
 3. Si ha dibujado un círculo en el primer cuadro, una cruz en el segundo cuadro y un círculo en el quinto cuadro, ha fallado.
 4. Si no ha dibujado una cruz en el segundo, quinto u octavo cuadro, ha fallado.
 5. Si hay un círculo en cada uno de los cuadros cuarto, quinto y séptimo, ha fallado.
 6. Si dibujaste un círculo en los cuadros segundo y cuarto, fracasaste.
 7. Si se han llenado más de cinco campos con una cruz, ha fallado.
 8. Si hay un círculo en los cuadros cuarto y sexto, pero una cruz en el séptimo, ha fallado.
 9. Si los cuadros tercero y séptimo se llenan de manera diferente, ha fallado.
 10.Si no hay cruz en el primer, sexto u octavo cuadro, ha fallado.
 11. Si no hay círculo en el tercer, cuarto o sexto cuadro, ha fallado.
 12. Si se dibuja un círculo en los cuadros primero, quinto y sexto, ha fallado.
 13. Si hay más de un círculo en los cuadros cuarto, sexto y octavo, ha fallado.
 14. Si dibujaste un círculo en los cuadros tercero y séptimo, fracasaste.
 15. Si se han llenado más de cinco campos con un círculo, ha fallado.
 16. Si hay una cruz en cada uno de los cuadros segundo y cuarto, ha fallado.
 
 ¡Descubre cómo completar los campos para aprobar el examen!
 
 */
/* #endregion */

/* #region  FUNCIONES INDIVIDUALES  */
//<editor-fold defaultstate="collapsed" desc="funciones individuales f?">

//Si hay más de una cruz en los cuadros cuarto, quinto y sexto, ha fallado
function f1(respuesta) {
    let contador = 0;
    if (respuesta[3] == 'X') {
        contador++;
    }
    if (respuesta[4] == 'X') {
        contador++;
    }
    if (respuesta[5] == 'X') {
        contador++;
    }
    return (contador <= 1);
}

//Si hay una cruz en los cuadros tercero, quinto y séptimo, ha fallado.
function f2(respuesta) {
    return !((respuesta[2] == 'X') && (respuesta[4] == 'X') && (respuesta[6] == 'X'));
}

//Si ha dibujado un círculo en el primer cuadro, una cruz en el segundo cuadro
// y un círculo en el quinto cuadro, ha fallado.
function f3(respuesta) {
    return !((respuesta[0] == 'O') && (respuesta[1] == 'X') && (respuesta[4] == 'O'));
}

//Si no ha dibujado una cruz en el segundo, quinto u octavo cuadro, ha fallado.
function f4(respuesta) {
    return ((respuesta[1] == 'X') || (respuesta[4] == 'X') || (respuesta[7] == 'X'));
}

//Si hay un círculo en cada uno de los cuadros cuarto, quinto y séptimo, ha fallado
function f5(respuesta) {
    return !((respuesta[3] == 'O') && (respuesta[4] == 'O') && (respuesta[6] == 'O'));
}

//Si dibujaste un círculo en los cuadros segundo y cuarto, fracasaste.
function f6(respuesta) {
    return !((respuesta[1] == 'O') && (respuesta[3] == 'O'));
}

//Si se han llenado más de cinco campos con una cruz, ha fallado.
function f7(respuesta) {
    //usamos un contador 
    let contadorCruces = 0;
    //recorremos la cadena de 0 hasta length
    for (let i = 0; i < respuesta.length; i++) {
        //por cada vez que hay una cruz sumamos 1
        if (respuesta[i] == 'X') {
            contadorCruces++;
        }
    }
    //devolvemos el contador
    return (contadorCruces <= 5);
}

//Si hay un círculo en los cuadros cuarto y sexto, pero una cruz en el séptimo,
// ha fallado.
function f8(respuesta) {
    return !((respuesta[3] == 'O') && (respuesta[5] == 'O') && (respuesta[6] == 'X'));
}

//Si los cuadros tercero y séptimo se llenan de manera diferente, ha fallado.
function f9(respuesta) {
    return (respuesta[2] == respuesta[6]);
}

//Si no hay cruz en el primer, sexto u octavo cuadro, ha fallado.
function f10(respuesta) {
    return ((respuesta[0] == 'X') || (respuesta[5] == 'X') || (respuesta[7] == 'X'));
}

// Si no hay círculo en el tercer, cuarto o sexto cuadro, ha fallado.
function f11(respuesta) {
    return ((respuesta[2] == 'O') || (respuesta[3] == 'O') || (respuesta[5] == 'O'));
}


//Si se dibuja un círculo en los cuadros primero, quinto y sexto, ha fallado.
function f12(respuesta) {
    return !((respuesta[0] == 'O') && (respuesta[4] == 'O') && (respuesta[5] == 'O'));
}

//Si hay más de un círculo en los cuadros cuarto, sexto y octavo, ha fallado.
function f13(respuesta) {
    //usamos un contador 
    /*  let contadorCirculos = Number(respuesta[3]) +
     Number(respuesta[5]) + Number(respuesta[7]);
     return (contadorCirculos<=1);
     
     */
    let contador = 0;
    if (respuesta[3] == 'O') {
        contador++;
    }
    if (respuesta[5] == 'O') {
        contador++;
    }
    if (respuesta[7] == 'O') {
        contador++;
    }

    return (contador <= 1);

}

//Si dibujaste un círculo en los cuadros tercero y séptimo, fracasaste.
function f14(respuesta) {
    return !((respuesta[2] == 'O') && (respuesta[6] == 'O'));
}

//Si se han llenado más de cinco campos con un círculo, ha fallado.
function f15(respuesta) {
    //usamos un contador 
    let contadorCirculos = 0;
    //recorremos la respuesta de 0 hasta length
    for (i = 0; i < respuesta.length; i++) {
        //por cada vez que hay una cruz sumamos 1
        if (respuesta[i] == 'O') {
            contadorCirculos++;
        }
    }
    //devolvemos el contador
    return (contadorCirculos <= 5);
}

//Si hay una cruz en cada uno de los cuadros segundo y cuarto, ha fallado.
// '01010101' esta sería NO valida!!
function f16(respuesta) {
    return !(respuesta[1] == 'X' && respuesta[3] == 'X');
}

//</editor-fold>

/* #endregion */

//realiza la validación individual de la funcion funcion
// con la respuesta respuesta
function validaUnaFuncion(funcion, respuesta) {
    return funcion(respuesta);
}

//funcion general que tiene en cuenta cada uno de los puntos del apartado,
//el parámetro patron '00100011111..' segun la posición,si vale 1 se ejecuta
// el test de la función correspondiente sobre el parámetro respuesta.
// el parametro respuesta es una cadena de 8 cruces 'X' y/o circulos 'O'
// devuelve una cadena con '0' o '1' dependiendo de si la función ha fallado o no,
//o '-' si no se ha evaluado.

function validaRespuesta(patron, respuesta) {
    //preparamos test para devolver cosas (va aser un array)
    //inicialmente suponemos que no se evaluan.
    let test = Array.from ('-'.repeat(patron.length));

    //recorremos el patrón y vamos evaluando cada función según patron
    //numeroDeFuncion será el número de posición en el patrón y permitirá 
    //llamar a la función correspondiente (de 1 a patron.length, ojo empieza en 1)

    for (let numeroFuncion = 1; numeroFuncion <= patron.length; numeroFuncion++) {
        //si tenemos que evaluar esa funcion...(-1 para ajustar al patron!)
        if (patron[numeroFuncion-1] == '1') {
            //componemos el nombre de la funcion
            let nombreFuncion = 'f' + numeroFuncion.toString();
            //cogemos la referencia de la funcion correspondiente (objeto this!)
            funcion = this[nombreFuncion];
            //asignamos en función del resultado (-1 para array)
            if (validaUnaFuncion(funcion, respuesta)) {
                test[numeroFuncion-1] = '1';
            } else {
                test[numeroFuncion-1] = '0';
            }
        }
    }
    //devolvemos test convertido en cadena y le quitamos las comas
    return new String(test).replace(/,/g,'');
}