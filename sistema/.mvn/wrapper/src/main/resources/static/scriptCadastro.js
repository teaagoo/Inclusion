// Função que redireciona para a página de login
document.querySelector('.login-button').addEventListener('click', function() {
    var button = this;
    
    // Adiciona a animação de clique
    button.classList.add('clicked');

    // Redireciona após a animação
    setTimeout(function() {
        window.location.href = "templates/login.html"; // Caminho para a página de login
    }, 300); // Tempo da animação
});
