# 🎁 Secret Santa Draw 🎁

A simple and interactive app to organize **Secret Santa** draws, built with **HTML, CSS, and JavaScript**. The project allows you to add participants, match pairs, and automatically send notifications via **EmailJS**.

---

## 🚀 Features

✔️ Add and remove participants\
✔️ Set up Secret Santa pairs\
✔️ View draw results\
✔️ Automatic email notifications

---

## 📸 Screenshots



![Home Screen]\(image/tela-inicial.png)



![Participants Added]\(image/participantes-adicionados.png)



![Message Sent]\(image/mensagem-enviada.png)



![Email Received]\(image/email-recebido.png)



---

## 🛠️ Technologies Used

- **HTML5 & CSS3** → Responsive and styled UI
- **JavaScript** → Draw logic and DOM manipulation
- **EmailJS** → Automated email notifications

---

## 🎯 How to Use

1. Clone this repository:
   ```sh
   git clone https://github.com/KarenCMoreira/Sorteador-Amigo-Secreto.git
   ```
2. Navigate to the project folder:
   ```sh
   cd Sorteador-Amigo-Secreto
   ```
3. Open **index.html** in your browser
4. Add participants, set up the draw, and see the results!

---

## 📩 EmailJS Setup

To enable automatic email notifications, configure **EmailJS**:

1. Create a free account at [EmailJS](https://www.emailjs.com/).
2. Set up a new email service and get your **Public Key** and **Service ID**.
3. Replace the values in this line:
   ```js
   emailjs.init("YOUR_PUBLIC_KEY_HERE");
   ```
4. Set your **Template ID** and update the sending logic in `script.js`.
5. Customize the email template according to your needs. Below is an example of the email template currently in use:

```html
<table style="width: 100%; max-width: 650px; margin: auto; font-family: 'Arial', sans-serif; background-color: #f9f9f9; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);">
  <tr>
    <td style="background: linear-gradient(135deg, #6a11cb, #2575fc); color: white; text-align: center; padding: 40px 20px;">
      <h1 style="margin: 0; font-size: 36px; font-weight: bold; letter-spacing: 1px;">🎁 Amigo Secreto 🎁</h1>
      <p style="margin: 10px 0 0; font-size: 18px;">A diversão já começou!</p>
    </td>
  </tr>
  <tr>
    <td style="background-color: white; padding: 40px 30px; text-align: center; color: #333;">
      <p style="font-size: 20px; font-weight: bold; margin: 0;">Olá, <span style="color: #6a11cb;">{{to_name}}</span>!</p>
      <p style="font-size: 18px; margin: 20px 0;">
        Você foi sorteado para presentear: <br>
        <span style="color: #2575fc; font-size: 24px; font-weight: bold;">{{pair_name}}</span>
      </p>
      <p style="font-size: 16px; color: #555; line-height: 1.6;">
        Prepare algo especial, porque o momento da revelação está chegando. 🎉
      </p>
      <p style="font-size: 16px; color: #555; margin-top: 30px;">
        Confira a planilha de sugestões de presentes:
      </p>
      <a href="https://docs.google.com/spreadsheets/d/1Q2ENdRE6W4l7vwaREPUSrlgydRsyOolFENRYYXy9Jw4/edit?usp=sharing" target="_blank" style="display: inline-block; margin-top: 10px; padding: 12px 30px; font-size: 18px; color: white; background: linear-gradient(135deg, #6a11cb, #2575fc); text-decoration: none; border-radius: 8px; box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);">
        Confira
      </a>
    </td>
  </tr>
  <tr>
    <td style="background-color: #f4f4f4; text-align: center; padding: 20px; color: #777; font-size: 14px;">
      <p style="margin: 0;">Este e-mail foi gerado automaticamente pelo sistema de sorteio de Amigo Secreto.</p>
    </td>
  </tr>
</table>
```

To enable automatic email notifications, configure **EmailJS**:

1. Create a free account at [EmailJS](https://www.emailjs.com/).
2. Set up a new email service and get your **Public Key** and **Service ID**.
3. Replace the values in this line:
   ```js
   emailjs.init("YOUR_PUBLIC_KEY_HERE");
   ```
4. Set your **Template ID** and update the sending logic in `script.js`.

---

## 📝 Future Improvements

🔹 Automatic pair matching without manual selection\
🔹 Improved UI with animations and visual feedback\
🔹 Login system to manage multiple draws

---

## 📄 License

This project is licensed under the **MIT License**. Feel free to use, modify, and distribute it.

---

# 🎁 Sorteador de Amigo Secreto 🎁

Um aplicativo simples e interativo para organizar sorteios de **Amigo Secreto**, desenvolvido com **HTML, CSS e JavaScript**. O projeto permite adicionar participantes, realizar o sorteio dos pares e enviar notificações por e-mail automaticamente via **EmailJS**.

---

## 🚀 Funcionalidades

✔️ Adicionar e remover participantes\
✔️ Configurar pares de amigo secreto\
✔️ Visualizar os resultados do sorteio\
✔️ Envio automático de e-mails

---

## 📸 Capturas de Tela



![Tela Inicial]\(image/tela-inicial.png)



![Participantes Adicionados]\(image/participantes-adicionados.png)



![Mensagem Enviada]\(image/mensagem-enviada.png)



![Email Recebido]\(image/email-recebido.png)



---

## 🛠️ Tecnologias Utilizadas

- **HTML5 & CSS3** → Interface responsiva e estilizada
- **JavaScript** → Lógica do sorteio e manipulação do DOM
- **EmailJS** → Envio automático de e-mails

---

## 🎯 Como Usar

1. Clone este repositório:
   ```sh
   git clone https://github.com/KarenCMoreira/Sorteador-Amigo-Secreto.git
   ```
2. Acesse a pasta do projeto:
   ```sh
   cd Sorteador-Amigo-Secreto
   ```
3. Abra o **index.html** no navegador
4. Adicione participantes, realize o sorteio e veja os resultados!

---

## 📩 Configuração do EmailJS

Para ativar o envio automático de e-mails, configure o **EmailJS**:

1. Crie uma conta gratuita em [EmailJS](https://www.emailjs.com/).
2. Crie um novo serviço de e-mail e obtenha sua **Public Key** e **Service ID**.
3. Substitua os valores na linha:
   ```js
   emailjs.init("SUA_PUBLIC_KEY_AQUI");
   ```
4. Configure o **Template ID** e ajuste a lógica de envio no arquivo `script.js`.

---

## 📝 Melhorias Futuras

🔹 Sortear os pares automaticamente sem necessidade de configuração manual\
🔹 Melhorar a interface com animações e feedbacks visuais\
🔹 Adicionar um sistema de login para gerenciar múltiplos sorteios

---

## 📄 Licença

Este projeto está sob a licença **MIT**. Você pode usá-lo, modificá-lo e distribuí-lo livremente.

