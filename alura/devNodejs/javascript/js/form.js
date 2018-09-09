const botao = document.querySelector("#adicionar-paciente");
botao.addEventListener("click", function(e) {
    e.preventDefault();

    let form = document.querySelector("#formAdicionar");
    let paciente = getPaciente(form);

    addPaciente(paciente);

    form.reset();
});

function addPaciente(paciente) {
    setTable(
        setTr(
            paciente
        )
    );
}

function getPaciente(form) {
    return {
        nome: form.nome.value,
        altura: form.altura.value,
        peso: form.peso.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
}

function setTd(argument, csclass) {
    let td = document.createElement("td");
    td.classList.add(csclass);
    td.textContent = argument;
    return td;
}

function setTr(paciente) {
    let pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    if (!validData(paciente.peso, paciente.altura)) {
        alert("Verifique as insformações inseridas")
        return;
    }

    pacienteTr.appendChild(setTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(setTd(paciente.altura, "info-peso"));
    pacienteTr.appendChild(setTd(paciente.peso, "info-altura"));
    pacienteTr.appendChild(setTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(setTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function setTable(pacienteTr) {
    document.querySelector("#tabela-pacientes").appendChild(pacienteTr);
}