function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var form = document.getElementById("txtano")
    var res = document.querySelector("div#res")
    
    if (form.value.length == 0 || form.value > ano) {
        window.alert("ERRO! Verifique os dados e tente novamente")
    } else {
        var fsex = document.getElementsByName("radsex")
        var idade = ano - Number(form.value)
        var genero = ""
        var img = document.createElement("img")
        img.setAttribute("id", "foto")

        if (fsex[0].checked) {
            genero = "Homem"
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute("src", "img/bebe_homem.jpg")
            } else if (idade < 25) {
                //jovem
                img.setAttribute("src", "img/jovem_homem.jpg")
            } else if (idade < 50) {
                //adulto
                img.setAttribute("src", "img/idoso_homem.jpg")
            } else {
                //idoso
                img.setAttribute("src", "img/idoso_homem.jpg")
            }
        } else if (fsex[1].checked) {
            genero = "Mulher"
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute("src", "img/bebe_mulher.jpg")
            } else if (idade < 25) {
                //jovem
                img.setAttribute("src", "img/jovem_mulher.jpg")
            } else if (idade < 50) {
                //adulto
                img.setAttribute("src", "img/idosa_mulher.jpg")
            } else {
                //idoso
                img.setAttribute("src", "img/idosa_mulher.jpg")
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}