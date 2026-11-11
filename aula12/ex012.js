var agora = new Date()
var hora = agora.getHours
console.log(`Agora são ${hora} horas`)

if (hora < 12) {
    console.log ("BOM DIA")
} else if (hora <= 18) {
    console.log("BOA TARDE")
} else if (hora > 18 && hora <= 23) {
    console.log("BOA NOITE")
} else {
    console.log("BOA MADRUGADA")
}