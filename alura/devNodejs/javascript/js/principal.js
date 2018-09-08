var titulo = document.querySelector(".titulo")
titulo.textContent = "Aparecida Nutricionista";

var paciente = document.querySelector("#primeiro-paciente");

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var validade = true;

var tdImc = paciente.querySelector(".info-imc");

if (peso < 1 || peso > 700) {
	console.error("Peso Inválido");
	tdImc.textContent("Peso Inválido")
	validade = false;
}

if (altura < 0.1 || altura > 3) {
	console.error("Altura Inválida")
	tdImc.textContent("Altura Inválida")
	validade = false;
}

if (validade) {
	var imc = peso / (altura * altura);
	tdImc.textContent = imc;
}
