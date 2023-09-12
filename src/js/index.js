const caixaInput = document.querySelectorAll(".informacoes, .texto")
const botaoEnvia = document.getElementById("enviar")

botaoEnvia.addEventListener('click', (event) => {
    event.preventDefault()
    caixaInput.forEach(item => {
        if(item.value){
        item.classList.add("valido")
        item.classList.remove("invalido")
        item.nextElementSibling.style.display = "none"
        } else{
            item.classList.add("invalido")
            item.nextElementSibling.style.display = "block"
        }
    })
})


