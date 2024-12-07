// Seleciona os elementos
const colorDisplay = document.getElementById("colorDisplay");
const generateColorButton = document.getElementById("generateColor");

// Função para gerar uma cor hexadecimal aleatória
function generateRandomColor() {
  const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
  document.body.style.backgroundColor = randomColor;
  colorDisplay.textContent = randomColor;
}

// Adiciona evento de clique ao botão
generateColorButton.addEventListener("click", generateRandomColor);

// Gera uma cor inicial ao carregar a página
generateRandomColor();
