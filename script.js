const botao = document.querySelector('#seta')

botao.addEventListener('click', () => {
    window.scroll({top: window.innerHeight, behavior: "smooth"})
    botao.style.display = 'none'
})