document.addEventListener("DOMContentLoaded", function () {
    // Função para alterar o botão ativo
    function setActiveButton(buttonId) {
        // Remove a classe 'active' de todos os botões
        document.querySelectorAll("aside button").forEach(button => {
            button.classList.remove("active");
        });

        // Adiciona a classe 'active' ao botão clicado
        document.getElementById(buttonId).classList.add("active");
    }

    // Conteúdo inicial (primeiro botão já ativo e exibindo o formulário)
    document.getElementById("mainContent").innerHTML = `
        <h2>Informações da Conta</h2>
        <form id="accountForm">
            <!-- Seção para Foto de Perfil -->
            <h3>Foto de Perfil</h3>
            <label for="foto" class="foto-label">
                Adicionar a imagem de um perfil
                <input type="file" id="foto" name="foto" accept="image/*" style="display:none;">
            </label>

            <h3>Informações de Contato</h3>

            <label for="nome">Nome Completo:</label>
            <input type="text" id="nome" name="nome" placeholder="Digite seu nome">

            <!-- Adicionando os campos telefone e profissão lado a lado, com as labels em cima -->
            <div class="double">
                <div>
                    <label for="telefone">Telefone:</label>
                    <input type="tel" id="telefone" name="telefone" placeholder="Digite seu telefone">
                </div>

                <div>
                    <label for="profissao">Profissão:</label>
                    <input type="text" id="profissao" name="profissao" placeholder="Digite sua profissão">
                </div>
            </div>

            <!-- Dados de Login -->
            <h3>Dados de Login</h3>
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="Digite seu email">

            <label for="senha">Senha:</label>
            <input type="password" id="senha" name="senha" placeholder="Digite sua senha">

            <!-- Seção de Endereço -->
            <h3>Endereço</h3>
            <label for="endereco">Endereço:</label>
            <input type="text" id="endereco" name="endereco" placeholder="Digite seu endereço">

            <label for="cidade">Cidade:</label>
            <input type="text" id="cidade" name="cidade" placeholder="Digite sua cidade">

            <!-- Campos CEP e Estado lado a lado -->
            <div class="double">
                <div>
                    <label for="cep">CEP:</label>
                    <input type="text" id="cep" name="cep" placeholder="Digite seu CEP">
                </div>

                <div>
                    <label for="estado">Estado:</label>
                    <input type="text" id="estado" name="estado" placeholder="Digite seu estado">
                </div>
            </div>

            <button type="submit">Salvar</button>
        </form>
    `;

    // Torna o primeiro botão ativo inicialmente
    document.getElementById("btnConta").classList.add("active");

    // Evento para o botão "Informações da Conta"
    document.getElementById("btnConta").addEventListener("click", function () {
        setActiveButton("btnConta");

        // Restaurar o tamanho do main ao padrão
        const mainContent = document.getElementById("mainContent");
        mainContent.className = ""; // Remove qualquer classe extra

        mainContent.innerHTML = `
            <h2>Informações da Conta</h2>
            <form id="accountForm">
                <!-- Seção para Foto de Perfil -->
                <h3>Foto de Perfil</h3>
                <label for="foto" class="foto-label">
                    Adicionar a imagem de um perfil
                    <input type="file" id="foto" name="foto" accept="image/*" style="display:none;">
                </label>

                <h3>Informações de Contato</h3>

                <label for="nome">Nome Completo:</label>
                <input type="text" id="nome" name="nome" placeholder="Digite seu nome">

                <!-- Campos telefone e profissão lado a lado, com labels em cima -->
                <div class="double">
                    <div>
                        <label for="telefone">Telefone:</label>
                        <input type="tel" id="telefone" name="telefone" placeholder="Digite seu telefone">
                    </div>

                    <div>
                        <label for="profissao">Profissão:</label>
                        <input type="text" id="profissao" name="profissao" placeholder="Digite sua profissão">
                    </div>
                </div>

                <!-- Dados de Login -->
                <h3>Dados de Login</h3>
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" placeholder="Digite seu email">

                <label for="senha">Senha:</label>
                <input type="password" id="senha" name="senha" placeholder="Digite sua senha">

                <!-- Seção de Endereço -->
                <h3>Endereço</h3>
                <label for="endereco">Endereço:</label>
                <input type="text" id="endereco" name="endereco" placeholder="Digite seu endereço">

                <label for="cidade">Cidade:</label>
                <input type="text" id="cidade" name="cidade" placeholder="Digite sua cidade">

                <!-- Campos CEP e Estado lado a lado -->
                <div class="double">
                    <div>
                        <label for="cep">CEP:</label>
                        <input type="text" id="cep" name="cep" placeholder="Digite seu CEP">
                    </div>

                    <div>
                        <label for="estado">Estado:</label>
                        <input type="text" id="estado" name="estado" placeholder="Digite seu estado">
                    </div>
                </div>

                <button type="submit">Salvar</button>
            </form>
        `;
    });

    // Evento para o botão "Eventos Criados"
    document.getElementById("btnCriados").addEventListener("click", function () {
        setActiveButton("btnCriados");

        // Reduzir o tamanho do main
        const mainContent = document.getElementById("mainContent");
        mainContent.className = "small-main"; // Adiciona a classe para diminuir o tamanho

        mainContent.innerHTML = `
            <h2>Eventos Criados</h2>
            <div class="quadrado-gigante">
                <div class="top-bar">
                    <span class="left">Eventos</span>
                    <div class="right">
                        <span>Inscrito</span>
                        <span>Status</span>
                    </div>
                </div>
                <div class="middle-content">
                    <!-- Nova div entre o topo e os detalhes dos eventos -->
                    <p>Informações adicionais sobre os eventos podem ser exibidas aqui.</p>
                </div>
                <div class="content">
                    <!-- Placeholder para os eventos -->
                    <p>Aqui ficam os detalhes dos eventos.</p>
                </div>
            </div>
        `;
    });

    // Evento para o botão "Eventos Inscritos"
    document.getElementById("btnInscritos").addEventListener("click", function () {
        setActiveButton("btnInscritos");

        // Restaurar o tamanho do main ao padrão
        const mainContent = document.getElementById("mainContent");
        mainContent.className = ""; // Remove qualquer classe extra

        mainContent.innerHTML = `
            <h2>Eventos Inscritos</h2>
            <div class="quadrado-gigante">
                <div class="top-bar">
                    <span class="left">Eventos</span>
                    <div class="right">
                        <span>Inscrito</span>
                        <span>Status</span>
                    </div>
                </div>
                <div class="middle-content">
                    <div class= "top-dow"> </div>
                </div>
                <div class="content">
                    <!-- Placeholder para os eventos -->
                    <p>Aqui ficam os detalhes dos eventos.</p>
                </div>
            </div>
        `;
    });
});
