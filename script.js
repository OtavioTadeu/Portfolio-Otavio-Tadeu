function MascaraInputTelefone(telefone) {
    var tel = telefone.value;
    telefone.setAttribute("maxlength", "14")
    if (isNaN(tel[tel.length - 1])) {
        telefone.value = tel.substring(0, tel.length - 1);
        return;
    }
    if (tel[0] != "(" && tel[0] != undefined) {
        document.getElementById("Telefone").value = "(";
    }
    if (tel[3] != ")" && tel[3] != undefined) {
        document.getElementById("Telefone").value = tel.slice(0, 3) + ")";
    }
    if (tel[9] != "-" && tel[9] != undefined) {
        document.getElementById("Telefone").value = tel.slice(0, 9) + "-";
    }
}

function MascaraInputNome(nomeInput) {
    var nomesSplit = nomeInput.value.split(' ');
    for (var i = 0; i < nomesSplit.length; i++) {
        var nome = nomesSplit[i];
        if (nome.length > 0) {
            nomesSplit[i] = nome.charAt(0).toUpperCase() + nome.slice(1).toLowerCase();
        }
    }
    var nomeFormatado = nomesSplit.join(' ');
    nomeInput.value = nomeFormatado;
}

function ModoEscuro() {
    var dark = document.body;
    dark.classList.toggle('modo-escuro');
}