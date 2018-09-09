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
        tdImc.textContent = calculaImc(peso, altura);;
    }
}

function calculaImc(peso, altura) {
    return (peso / (altura * altura)).toFixed(2);
}