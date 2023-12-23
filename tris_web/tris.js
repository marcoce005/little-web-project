let type = true, cont = 0, win = false;

let gioco = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
];

let status = [
    [false, false, false],
    [false, false, false],
    [false, false, false]
];

function dx(r, c, n) {
    try {
        if (gioco[r][c + 1] === n)
            return true;
    } catch {
        return false;
    }
    return false;
}

function dw(r, c, n) {
    try {
        if (gioco[r + 1][c] === n)
            return true;
    } catch {
        return false;
    }
    return false;
}

function dn(r, c, n) {
    try {
        if (gioco[r + 1][c + 1] === n)
            return true;
    } catch {
        return false;
    }
    return false;
}

function dp(r, c, n) {
    try {
        if (gioco[r + 1][c - 1] === n)
            return true;
    } catch {
        return false;
    }
    return false;
}

function victory(value, type_win) {
    win = true;
    switch (type_win) {
        case "dp":
            document.getElementById("dp").style.visibility = "visible";
            break;
        case "dn":
            document.getElementById("dn").style.visibility = "visible";
            break;
        case "h0":
            document.getElementById("htop").style.visibility = "visible";
            break;
        case "h1":
            document.getElementById("hmiddle").style.visibility = "visible";
            break;
        case "h2":
            document.getElementById("hbottom").style.visibility = "visible";
            break;
        case "v0":
            document.getElementById("vsx").style.visibility = "visible";
            break;
        case "v1":
            document.getElementById("vm").style.visibility = "visible";
            break;
        case "v2":
            document.getElementById("vdx").style.visibility = "visible";
            break;
    }

    if (value < 0) {
        document.getElementById("pop-up").innerHTML = "Il vincitore è il giocatore 1 [X]";
    } else if (value > 0) {
        document.getElementById("pop-up").innerHTML = "Il vincitore è il giocatore 2 [O]";
    }
}

function control() {
    for (let r = 0; r < status.length; r++) {
        for (let c = 0; c < status.length; c++) {
            if (!status[r][c])
                return false;
        }
    }
    return true;
}

function is_win(value, busy) {
    for (let i = 0; i < gioco.length; i++) {
        for (let j = 0; j < gioco.length; j++) {
            if (gioco[i][j] === value) {
                if (dx(i, j, value)) {
                    if (dx(i, j + 1, value)) {
                        victory(value, "h" + i);
                    }
                }

                if (dw(i, j, value)) {
                    if (dw(i + 1, j, value)) {
                        victory(value, "v" + j);
                    }
                }

                if (dn(i, j, value)) {
                    if (dn(i + 1, j + 1, value)) {
                        victory(value, "dn");
                    }
                }

                if (dp(i, j, value)) {
                    if (dp(i + 1, j - 1, value)) {
                        victory(value, "dp");
                    }
                }
            }
        }
    }

    if (busy == 9 && control() && !win)
        document.getElementById("pop-up").innerHTML = "Parità";
}

function x(ID) {
    if (!win) {
	    cont += 1;
        if (type && status[ID[1]][ID[2]] == false) {
            document.getElementById(ID).innerHTML = "X";
            gioco[ID[1]][ID[2]] = -1;
            status[ID[1]][ID[2]] = true;
            type = false;
        } else if (status[ID[1]][ID[2]] == false) {
            document.getElementById(ID).innerHTML = "O";
            gioco[ID[1]][ID[2]] = 1;
            status[ID[1]][ID[2]] = true;
            type = true;
        }
        is_win(-1, cont);
        is_win(1, cont);
    }
}

function restart() {
    location.reload();
}
