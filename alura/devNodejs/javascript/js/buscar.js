const botaoBP = document.querySelector("#buscar-paciente");

botaoBP.addEventListener("click", function() {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");
    xhr.addEventListener("load", (e) => {
        if (xhr.status == 200) {
            document.querySelector("#erro-ajax").classList.add("invisivel");
            let resposta = xhr.responseText;
            let pacis = JSON.parse(resposta);

            pacis.forEach((item) => {
                addPaciente(item);
            });
        } else {
            document.querySelector("#erro-ajax").classList.remove("invisivel");
            console.error(xhr.status);
            console.error(xhr.responseText);
        }
    });
    xhr.send();
});