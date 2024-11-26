// Referências dos elementos
const profileImg = document.getElementById("profile-img");
const profilePicInput = document.getElementById("profile-pic-input");
const uploadBtn = document.getElementById("upload-btn");
const contactForm = document.getElementById("contact-form");
const outputDiv = document.getElementById("output");

// Carregar nova foto de perfil
uploadBtn.addEventListener("click", () => {
    const file = profilePicInput.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            profileImg.src = e.target.result; // Atualiza a imagem de perfil com a nova imagem
        };
        reader.readAsDataURL(file); // Lê o arquivo como Data URL (base64)
    } else {
        alert("Por favor, selecione uma imagem.");
    }
});

// Salvar informações do formulário
contactForm.addEventListener("submit", (e) => {
    e.preventDefault(); // Evita o envio padrão do formulário

    // Coleta os dados dos inputs
    const nome = document.getElementById("nome").value;
    const telefone = document.getElementById("telefone").value;
    const cidade = document.getElementById("cidade").value;

    // Exibe os dados salvos
    outputDiv.innerHTML = `
        <h3>Informações Salvas:</h3>
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>Telefone:</strong> ${telefone}</p>
        <p><strong>Cidade:</strong> ${cidade}</p>
    `;
});
