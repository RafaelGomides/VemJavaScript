var titulo = document.querySelector(".titulo")
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {
    paciente = pacientes[i];
    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    if (validData(peso, altura)) {
        tdImc.textContent = calculaImc(peso, altura);;
    }
}

function calculaImc(peso, altura) {
    return (peso / (altura * altura)).toFixed(2);
}

function validData(peso, altura) {
    let validade = validWeigth(peso);
    validade = validHeigth(altura);
    return validade;
}

function validWeigth(peso) {
    let validade = true;
    if (peso < 1 || peso > 700) {
        console.error("Peso Inválido");
        tdImc.textContent = "Peso Inválido";
        validade = false;
        // paciente.style.backgroundColor = "lightcoral";
        // paciente.classList.add("paciente-invalido");
    }
    return validade;
}

function validHeigth(altura) {
    let validade = true;
    if (altura < 0.1 || altura > 3) {
        console.error("Altura Inválida");
        tdImc.textContent = "Altura Inválida";
        validade = false;
        // paciente.style.backgroundColor = "lightcoral";
        // paciente.classList.add("paciente-invalido");
    }
    return validade;
}