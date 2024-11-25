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

