function addInput(event) {
    const buttonName = event.target.name;
    const ingredients = document.querySelector("#ingredients");
    const preparation = document.querySelector('#preparation');
    const fieldContainer = document.querySelectorAll(`.${buttonName}`);

    // Realiza um clone do último input adicionado
    const newField = fieldContainer[ fieldContainer.length - 1 ].cloneNode(true);
    // Não adiciona um novo input se o último tem um valor vazio
    if (newField.children[ 0 ].value == "") return false;

    // Deixa o valor do input vazio
    newField.children[ 0 ].value = "";
    if (buttonName === 'ingredient') {
        ingredients.appendChild(newField);
    } else {
        preparation.appendChild(newField);
    }
}

document
    .querySelectorAll(".add-input")
    .forEach(button => button.addEventListener("click", addInput))