// Função para mostrar ou ocultar os campos de valor e quantidade de ingressos, dependendo do tipo de ingresso selecionado
function toggleTicketFields() {
    const ticketType = document.getElementById('ticketType').value;
    const paidTicketFields = document.getElementById('paidTicketFields');

    if (ticketType === 'paid') {
        paidTicketFields.style.display = 'block';
    } else {
        paidTicketFields.style.display = 'none';
    }
}

// Função de validação do formulário
document.getElementById('eventForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que o formulário seja enviado

    const eventName = document.getElementById('eventName').value;
    const eventDateTime = document.getElementById('eventDateTime').value;
    const eventLocation = document.getElementById('eventLocation').value;
    const eventDescription = document.getElementById('eventDescription').value;
    const eventStart = document.getElementById('eventStart').value;
    const eventEnd = document.getElementById('eventEnd').value;

    if (!eventName || !eventDateTime || !eventLocation || !eventDescription || !eventStart || !eventEnd) {
        alert('Por favor, preencha todos os campos obrigatórios.');
    } else {
        alert('Evento criado com sucesso!');
        // Aqui você pode enviar os dados para o servidor ou processar como necessário
    }
});

document.getElementById("eventForm").addEventListener("submit", async function (event) {
    event.preventDefault(); // Evita o comportamento padrão do formulário

    // Capturar os dados do formulário
    const eventData = {
        nome: document.getElementById("eventName").value,
        local: document.getElementById("eventLocation").value,
        data: document.getElementById("eventDateTime").value,
        listClientes: [] // Adicione a lógica para capturar usuários, se necessário
    };

    try {
        // Enviar os dados ao backend
        const response = await fetch("http://localhost:8080/api/eventos/cadastrar", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(eventData),
        });

        if (response.ok) {
            const result = await response.text();
            alert(result); // Exibe a mensagem do backend
        } else {
            alert("Erro ao cadastrar evento.");
        }
    } catch (error) {
        console.error("Erro ao cadastrar evento:", error);
        alert("Erro ao conectar-se ao servidor.");
    }
});


