//se encarga de generar la lista de checkbox de las condiciones
function generaListaCondiciones() {
    let listaOriginal = new Array(
        "1. Si hay más de una cruz en los cuadros cuarto, quinto y sexto, ha fallado.",
        "2. Si hay una cruz en los cuadros tercero, quinto y séptimo, ha fallado.",
        "3. Si ha dibujado un círculo en el primer cuadro, una cruz en el segundo cuadro y un círculo en el quinto cuadro, ha fallado.",
        "4. Si no ha dibujado una cruz en el segundo, quinto u octavo cuadro, ha fallado.",
        "5. Si hay un círculo en cada uno de los cuadros cuarto, quinto y séptimo, ha fallado.",
        "6. Si dibujaste un círculo en los cuadros segundo y cuarto, fracasaste.",
        "7. Si se han llenado más de cinco campos con una cruz, ha fallado.",
        "8. Si hay un círculo en los cuadros cuarto y sexto, pero una cruz en el séptimo, ha fallado.",
        "9. Si los cuadros tercero y séptimo se llenan de manera diferente, ha fallado.",
        "10.Si no hay cruz en el primer, sexto u octavo cuadro, ha fallado.",
        "11. Si no hay círculo en el tercer, cuarto o sexto cuadro, ha fallado.",
        "12. Si se dibuja un círculo en los cuadros primero, quinto y sexto, ha fallado.",
        "13. Si hay más de un círculo en los cuadros cuarto, sexto y octavo, ha fallado.",
        "14. Si dibujaste un círculo en los cuadros tercero y séptimo, fracasaste.",
        "15. Si se han llenado más de cinco campos con un círculo, ha fallado.",
        "16. Si hay una cruz en cada uno de los cuadros segundo y cuarto, ha fallado."
    );
    for (let indice = 1; indice <= listaOriginal.length; indice++) {
        //<input type="checkbox" id="check1" ><label for="check1">Check me!</label>
        document.write('<input type="checkbox" id="cbox' + indice.toString() + '" value= v' + indice.toString() + 
            '" onchange ="cambioCondiciones()" checked>');
        document.write('<label for="cbox' + indice.toString() + '">' + listaOriginal[indice - 1] + '</label><br>');
    };
}

//se encarga de generar los botones para poder poner cirulos o cruces
function generaBotonesRespuesta() {
    for (let indice = 1; indice <= 8; indice++) {
        //<td> <button type='button' name='bt1'=><img width='30' height='25' src='../cruz.png'></button> </<td>
        document.write('<td> <button type="button" name="bt' + indice.toString() + 
        '" onclick=cambiaRespuesta(this) value= "cruz" title="MARCAR">');
        document.write('<img width="30" height="25" src="../cruz.png"></button> </<td>');
    };

}