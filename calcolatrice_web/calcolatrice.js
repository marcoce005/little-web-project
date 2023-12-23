var n1 = "", n2 = false, operando, x = [], risultato = 0;

function erase() {
    n1 = "";
    n2 = false;
    risultato = 0;
    document.getElementById("output").innerHTML = "&nbsp;";
}

function n(numero) {
    if (n2 == false) {
        n1 = String(n1) + String(numero);
        document.getElementById("output").innerHTML = String(n1);
    } else {
        document.getElementById("output").innerHTML = "";
        n1 = "";
        n1 = String(n1) + String(numero);
        document.getElementById("output").innerHTML = String(n1);
        n2 = false;
    }   
}

function operazione(carattere) {
    x[0] = parseFloat(n1);
    n2 = true;
    operando = carattere;
}

function invio() {
    x[1] = parseFloat(n1);
    n2 = true;
    switch (operando) {
        case '+':
            risultato = x[0] + x[1];
            break;
        case '-':
            risultato = x[0] - x[1];
            break;
        case '*':
            risultato = x[0] * x[1];
            break;
        case '/':
            risultato = x[0] / x[1];
            break;
    }
    n1 = risultato
    document.getElementById("output").innerHTML = String(risultato);
}