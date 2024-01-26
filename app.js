// When the user clicks the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};
btn1.onclick = function () {
  modal.style.display = "block";
};

function removerAcentosECaracteresEspeciais(palavra) {
  return palavra
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-zA-Z ]/g, ""); // Adicionando espaço na expressão regular
}

function criptografar() {
  const originalInput = document.getElementById("original");
  const resultadoElement = document.getElementById("resultado");

  const palavraOriginal = removerAcentosECaracteresEspeciais(
    originalInput.value.trim().toLowerCase()
  );

  if (palavraOriginal !== "") {
    const palavraCriptografada = criptografarPalavra(palavraOriginal);
    resultadoElement.value = `${palavraCriptografada}`;
  } else {
    console.log(
      "O campo de entrada está vazio. Nenhuma criptografia será realizada."
    );
  }
}

function descriptografar() {
  const originalInput = document.getElementById("original");
  const resultadoElement = document.getElementById("resultado");

  const palavraCriptografada = removerAcentosECaracteresEspeciais(
    originalInput.value.trim().toLowerCase()
  );

  if (palavraCriptografada !== "") {
    const palavraOriginal = descriptografarPalavra(palavraCriptografada);
    resultadoElement.value = `${palavraOriginal}`;
  } else {
    console.log(
      "O campo de entrada está vazio. Nenhuma descriptografia será realizada."
    );
  }
}

function apagarResultado() {
  document.getElementById("resultado").value = "";
  document.getElementById("original").value = "";
}

function criptografarPalavra(palavra) {
  return palavra
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "!")
    .replace(/m/g, "@")
    .replace(/s/g, "#")
    .replace(/t/g, "$")
    .replace(/d/g, "%")
    .replace(/j/g, "&")
    .replace(/l/g, "*")
    .replace(/c/g, "?")
    .replace(/b/g, "°")
    .replace(/p/g, "+");
}

function descriptografarPalavra(palavraCriptografada) {
  return palavraCriptografada
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u")
    .replace(/!/g, "u")
    .replace(/@/g, "m")
    .replace(/#/g, "s")
    .replace(/"$"/g, "t")
    .replace(/%/g, "d")
    .replace(/&/g, "j")
    .replace(/"*"/g, "l")
    .replace(/"?"/g, "c")
    .replace(/°/g, "b")
    .replace(/'+'/g, "p");
}

function copiar() {
  let textoCopiado = document.getElementById("resultado");
  textoCopiado.select();
  textoCopiado.setSelectionRange(0, 99999);
  document.execCommand("copy");
}
