function carregar() {
    var msg = document.getElementById("msg")
    var imagem = document.getElementById("imagem")
    var date = new Date()
    var hora = date.getHours()
    msg.innerHTML = `Agora são ${hora} horas`

    if (hora >= 0 && hora < 12) {
        imagem.src = "img/manhã.jpg"
        document.body.style.background = "yellow"
    } else if (hora >= 12 && hora <= 18) {
        imagem.src = "img/tarde.jpg"
        document.body.style.background = "orange"
    } else {
        imagem.src = "img/noite.jpg"
        document.body.style.background = "darkblue"
    }
}