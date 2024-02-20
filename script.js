// Pegue todos os links "Saiba Mais"
var saibaMaisLinks = document.querySelectorAll(".saiba-mais");

// Adicione um evento de clique a cada link
saibaMaisLinks.forEach(function(link) {
    link.addEventListener("click", function(event) {
        event.preventDefault(); // Impede o comportamento padrão do link
        // Pegue o ID do modal associado ao link
        var modalId = link.getAttribute("data-modal");
        // Exiba o modal correspondente
        document.getElementById(modalId).style.display = "block";
    });
});

// Pegue todos os elementos de fechar
var closeButtons = document.querySelectorAll(".close");

// Adicione um evento de clique a cada botão de fechar
closeButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        // Feche o modal correspondente
        button.closest(".modal").style.display = "none";
    });
});

// Quando o usuário clicar em qualquer lugar fora da tela modal, feche-a
window.onclick = function(event) {
    if (event.target.classList.contains("modal")) {
        event.target.style.display = "none";
    }
}