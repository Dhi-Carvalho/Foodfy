const contentList =document.querySelectorAll('.content-list')

for (let attribute of contentList) {
    const button = attribute.querySelector('a')
    const content = attribute.querySelector('.content-text')
    button.addEventListener("click", function() {
        if (button.innerHTML == "ESCONDER") {
            content.classList.add('show-content')
            button.innerHTML = "MOSTRAR"
        }
        else if (button.innerHTML == "MOSTRAR") {
            content.classList.remove('show-content')
            button.innerHTML = "ESCONDER"
        }
    })
}