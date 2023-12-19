input.onButtonPressed(Button.A, function () {
    if (spalte > 0) {
        spalte += 0 - 1
    }
})
input.onButtonPressed(Button.B, function () {
    if (spalte < 4) {
        spalte += 1
    }
})
let spalte: number
let zeile: number
let spalte_alt: number
let x: number
let y: number
let zahl: number
zahl = 0
basic.forever(function () {
    spalte = 2
    zeile = 0
    spalte_alt = 2
    led.plot(spalte, zeile)
    while (zeile < 4 && led.point(spalte, zeile + 1) == false) {
        basic.pause(750 / (zahl + 1))
        led.plot(spalte, zeile + 1)
        led.unplot(spalte_alt, zeile)
        spalte_alt = spalte
        zeile += 1
        if (led.point(0, 4) && led.point(1, 4) && led.point(2, 4) && led.point(3, 4) && led.point(4, 4)) {
            zahl = zahl + 1
            basic.pause(750)
            for (y = 4; y > 1; y -= 1) {
                for (x = 0; x < 5; x += 1) {
                    if (led.point(x, y - 1)) {
                        led.plot(x, y)
                    } else {
                        led.unplot(x, y)
                    }
                }
            }

        }
    }
    if (led.point(2, 0) && led.point(2, 1) && led.point(2, 2) && led.point(2, 3) && led.point(2, 4)) {
        basic.showNumber(zahl, 1000)
    }


})

