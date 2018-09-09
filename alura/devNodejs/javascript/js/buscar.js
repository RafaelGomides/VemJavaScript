const botaoBP = document.querySelector("#buscar-paciente");

botaoBP.addEventListener("click", function() {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");
    xhr.addEventListener("load", (e) => {
        let resposta = xhr.responseText;
        let pacis = JSON.parse(resposta);

        pacis.forEach((item) => {
            addPaciente(item);
        });
    });
    xhr.send();
});