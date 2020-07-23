const modalRecipe = document.querySelector('.modalRecipe');
const cards = document.querySelectorAll('.card');

for (let card of cards) {
    card.addEventListener("click", function(){
        const imageId =card.querySelector("img").getAttribute("alt");
        const title = card.querySelector("h4.nome").textContent;
        const autor = card.querySelector("p.autor").textContent;
        modalRecipe.querySelector("img").src = `/assets/${imageId}.png`;
        modalRecipe.querySelector("h4.nome").innerHTML = title;
        modalRecipe.querySelector("p.autor").innerHTML = autor;

        modalRecipe.classList.add('active')
    })
}

document.querySelector('.closeModal').addEventListener("click", function(){
    modalRecipe.classList.remove('active')
})

