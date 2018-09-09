const tabela = document.querySelector("tbody");

tabela.addEventListener("dblclick", function(event) {
    event.target.parentNode.classList.add("fadeOut");
    setTimeout(() => {
        event.target.parentNode.remove();
    }, 500);
});


// const remove = document.querySelectorAll(".paciente");

// remove.forEach(function(paciente) {
//     paciente.addEventListener("dblclick", function() {
//         console.log("Ta funcionando");
//         this.remove();
//     });
// });