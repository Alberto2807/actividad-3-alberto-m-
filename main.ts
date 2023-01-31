input.onButtonPressed(Button.A, function () {
    contador += 1
})
input.onButtonPressed(Button.B, function () {
    if (contador >= 0) {
        contador += -1
    }
})
let contador = 0
contador = 0
basic.forever(function () {
    basic.showNumber(contador)
})
