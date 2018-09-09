const filtro = document.querySelector("#filtrar-tabela");

filtro.addEventListener("input", function() {
    let pac = document.querySelectorAll(".paciente");

    if (this.value.length > 0) {
        for (let i = 0, length1 = pac.length; i < length1; i++) {
            let paciente = pac[i];
            let tdNome = paciente.querySelector(".info-nome");
            let nome = tdNome.textContent;
            let expressao = new RegExp(this.value, "i");
            if (!expressao.test(nome)) {
                paciente.classList.add("invisivel");
            } else {
                paciente.classList.remove("invisivel");
            }
        }
    } else {
        for (let i = 0, length1 = pac.length; i < length1; i++) {
            let paciente = pac[i];
            paciente.classList.remove("invisivel");
        }
    }

});