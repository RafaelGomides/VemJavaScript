var titulo = document.querySelector(".titulo")
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {
    paciente = pacientes[i];
    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var validade = true;

    var tdImc = paciente.querySelector(".info-imc");

    if (peso < 1 || peso > 700) {
        console.error("Peso Inválido");
        tdImc.textContent = "Peso Inválido";
        validade = false;
        // paciente.style.backgroundColor = "lightcoral";
        paciente.classList.add("paciente-invalido");
    }

    if (altura < 0.1 || altura > 3) {
        console.error("Altura Inválida");
        tdImc.textContent = "Altura Inválida";
        validade = false;
        // paciente.style.backgroundColor = "lightcoral";
        paciente.classList.add("paciente-invalido");
    }

    if (validade) {
        var imc = peso / (altura * altura);
        tdImc.textContent = imc.toFixed(2);
    }
}

const botao = document.querySelector("#adicionar-paciente");
botao.addEventListener("click", function(e) {
    e.preventDefault();

    const form = document.querySelector("#formAdicionar");

    const nome = form.nome.value;
    const altura = form.altura.value;
    const peso = form.peso.value;
    const gordura = form.gordura.value;

    let pacienteTr = document.createElement("tr");

    let nomeTd = document.createElement("td");
    let alturaTd = document.createElement("td");
    let pesoTd = document.createElement("td");
    let gorduraTd = document.createElement("td");

    nomeTd.textContent = nome;
    alturaTd.textContent = altura;
    pesoTd.textContent = peso;
    gorduraTd.textContent = gordura;

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(gorduraTd);

    const tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);

});