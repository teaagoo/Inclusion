// Referências dos elementos
const profileImg = document.getElementById("profile-img");
const profilePicInput = document.getElementById("profile-pic-input");
const uploadBtn = document.getElementById("upload-btn");
const userForm = document.getElementById("user-form");
const outputDiv = document.getElementById("output");

// Dados simulados previamente cadastrados
let userData = {
    nome: "Usuário Exemplo",
    telefone: "123456789",
    cidade: "São Paulo",
    email: "usuario@exemplo.com",
    senha: "senha123"
};

// Preenche os campos do formulário com os dados existentes
function populateForm() {
    document.getElementById("nome").value = userData.nome;
    document.getElementById("telefone").value = userData.telefone;
    document.getElementById("cidade").value = userData.cidade;
    document.getElementById("email").value = userData.email;
}

// Chama a função para preencher os campos ao carregar a página
populateForm();

// Carregar nova foto de perfil
uploadBtn.addEventListener("click", () => {
    const file = profilePicInput.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            profileImg.src = e.target.result; // Atualiza a imagem de perfil
        };
        reader.readAsDataURL(file); // Lê o arquivo como Data URL (base64)
    } else {
        alert("Por favor, selecione uma imagem.");
    }
});

// Salvar informações do formulário
userForm.addEventListener("submit", (e) => {
    e.preventDefault(); // Evita o comportamento padrão de envio do formulário

    // Atualiza os dados do usuário com os valores preenchidos
    userData = {
        nome: document.getElementById("nome").value,
        telefone: document.getElementById("telefone").value,
        cidade: document.getElementById("cidade").value,
        email: document.getElementById("email").value,
        senha: document.getElementById("senha").value // Atualiza a senha
    };

    // Exibe as informações salvas no output
    outputDiv.innerHTML = `
        <h3>Informações Atualizadas:</h3>
        <p><strong>Nome:</strong> ${userData.nome}</p>
        <p><strong>Telefone:</strong> ${userData.telefone}</p>
        <p><strong>Cidade:</strong> ${userData.cidade}</p>
        <p><strong>E-mail:</strong> ${userData.email}</p>
        <p><strong>Senha:</strong> ${"*".repeat(userData.senha.length)}</p>
    `;

    // Loga os dados no console (opcional)
    console.log("Dados atualizados:", userData);

    // Aqui você pode enviar os dados para um servidor, se necessário
});
