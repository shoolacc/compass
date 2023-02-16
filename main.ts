let degrees = 0
basic.forever(function () {
    degrees = input.compassHeading()
    if (degrees < 45 || degrees > 325) {
        basic.showString("N")
    } else if (degrees >= 45 && degrees <= 80) {
        basic.showString("NE")
    } else if (degrees < 135) {
        basic.showString("E")
    } else if (degrees >= 135 && degrees <= 150) {
        basic.showString("SE")
    } else if (degrees < 220) {
        basic.showString("S")
    } else if (degrees >= 220 && degrees <= 240) {
        basic.showString("SW")
    } else if (degrees < 290) {
        basic.showString("W")
    } else if (degrees >= 290 && degrees <= 325) {
        basic.showString("NW")
    }
})
