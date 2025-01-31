const participants = [];
const form = document.getElementById("participant-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const participantsList = document.getElementById("participants-list");
const setupPairsButton = document.getElementById("setup-pairs");
const pairsSetupDiv = document.getElementById("pairs-setup");
const pairsContainer = document.getElementById("pairs-container");
const finalizeDrawButton = document.getElementById("finalize-draw");
const resultsDiv = document.getElementById("results");

// Adicionar participante
form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();

    if (name && email) {
        participants.push({ name, email });
        updateParticipantsList();
        nameInput.value = "";
        emailInput.value = "";
    }
});

// Atualizar lista de participantes
function updateParticipantsList() {
    participantsList.innerHTML = "";
    participants.forEach((participant, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
            <span>${participant.name} (${participant.email})</span>
            <div class="actions">
                <button class="edit" onclick="editParticipant(${index})">Editar</button>
                <button class="delete" onclick="deleteParticipant(${index})">Excluir</button>
            </div>
        `;
        participantsList.appendChild(li);
    });

    setupPairsButton.disabled = participants.length < 2;
}

// Editar participante
function editParticipant(index) {
    const participant = participants[index];
    nameInput.value = participant.name;
    emailInput.value = participant.email;
    deleteParticipant(index); // Remove o participante para atualizar após edição
}

// Excluir participante
function deleteParticipant(index) {
    participants.splice(index, 1);
    updateParticipantsList();
}

// Configurar pares
setupPairsButton.addEventListener("click", () => {
    pairsSetupDiv.classList.remove("hidden");
    pairsContainer.innerHTML = "";

    participants.forEach((giver) => {
        const div = document.createElement("div");
        div.innerHTML = `
            <label>${giver.name} vai presentear:</label>
            <select data-giver="${giver.name}">
                <option value="">Selecione...</option>
                ${participants
                    .filter((receiver) => receiver.name !== giver.name)
                    .map((receiver) => `<option value="${receiver.name}">${receiver.name}</option>`)
                    .join("")}
            </select>
        `;
        pairsContainer.appendChild(div);
    });
});

// Função para enviar e-mail com EmailJS
function sendEmail(giver, receiver, email) {
    return emailjs.send("service_pw8v00o", "template_mpa8ao8", {
        to_name: giver, // Nome do participante que dará o presente
        pair_name: receiver, // Nome do participante que receberá o presente
        to_email: email, // E-mail do participante que dará o presente
    });
}

// Função com retentativa e atraso
function sendEmailWithRetry(giver, receiver, email, retries = 5, delay = 5000) {
    return new Promise((resolve, reject) => {
        const attemptToSend = (remainingRetries) => {
            console.log(`Tentando enviar e-mail para ${giver} (${email}). Retentativas restantes: ${remainingRetries}`);

            sendEmail(giver, receiver, email)
                .then(() => {
                    console.log(`E-mail enviado com sucesso para ${giver} (${email}).`);
                    resolve(); // Sucesso, finaliza a tentativa
                })
                .catch((error) => {
                    console.error(`Erro ao enviar e-mail para ${giver} (${email}):`, error);

                    if (remainingRetries > 0) {
                        console.log(`Aguardando ${delay / 1000} segundos antes da próxima tentativa...`);
                        setTimeout(() => attemptToSend(remainingRetries - 1), delay); // Aguarda antes da nova tentativa
                    } else {
                        console.error(`Falha ao enviar e-mail para ${giver} (${email}) após várias tentativas.`);
                        reject(error); // Sem mais tentativas, rejeita a promessa
                    }
                });
        };

        attemptToSend(retries); // Primeira tentativa
    });
}

// Mostrar resultados e enviar e-mails
async function displayResults(pairs) {
    resultsDiv.innerHTML = "<h3>Resultados:</h3>";

    const emailPromises = []; // Lista para armazenar as promessas de envio de e-mail

    for (const [giver, receiver] of Object.entries(pairs)) {
        const giverData = participants.find((p) => p.name === giver);
        const receiverData = participants.find((p) => p.name === receiver);

        // Mostrar resultados na tela
        const p = document.createElement("p");
        p.textContent = `${giver} → ${receiver}`;
        resultsDiv.appendChild(p);

        // Adicionar promessa de envio de e-mail
        emailPromises.push(sendEmailWithRetry(giver, receiver, giverData.email, 3, 5000));
    }

    // Esperar o processamento de todos os e-mails
    Promise.allSettled(emailPromises).then((results) => {
        console.log("Todos os e-mails foram processados.");
        results.forEach((result, index) => {
            if (result.status === "fulfilled") {
                console.log(`E-mail ${index + 1} enviado com sucesso.`);
            } else {
                console.error(`Falha no envio do e-mail ${index + 1}:`, result.reason);
            }
        });
    });
}

// Finalizar sorteio
finalizeDrawButton.addEventListener("click", () => {
    const pairs = {};
    const selects = pairsContainer.querySelectorAll("select");

    selects.forEach((select) => {
        const giver = select.getAttribute("data-giver");
        const receiver = select.value;

        if (receiver) {
            pairs[giver] = receiver;
        }
    });

    if (Object.keys(pairs).length === participants.length) {
        displayResults(pairs); // Mostrar resultados
        pairsSetupDiv.classList.add("hidden");
    } else {
        alert("Todos os pares devem ser configurados antes de finalizar o sorteio.");
    }
});
