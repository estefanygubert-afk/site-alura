// script.js

const form = document.getElementById("complaintForm");
const complaintsList = document.getElementById("complaintsList");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const nome = document.getElementById("nome").value;
  const categoria = document.getElementById("categoria").value;
  const mensagem = document.getElementById("mensagem").value;

  const complaintDiv = document.createElement("div");
  complaintDiv.classList.add("complaint");

  complaintDiv.innerHTML = `
    <h3>${nome}</h3>
    <p><strong>Problema:</strong> ${categoria}</p>
    <p>${mensagem}</p>
  `;

  complaintsList.prepend(complaintDiv);

  form.reset();
});
