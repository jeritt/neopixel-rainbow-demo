// P8 is connected to Kitronik 1A output
let strip = neopixel.create(DigitalPin.P8, 10, NeoPixelMode.RGB)
strip.showRainbow(1, 360)
basic.forever(function () {
    strip.rotate(1)
    strip.show()
})
