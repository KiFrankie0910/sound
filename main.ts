let sound = 0
OLED.init(128, 64)
let strip = neopixel.create(DigitalPin.P1, 1, NeoPixelMode.RGB)
basic.forever(function () {
    sound = smarthome.ReadNoise(AnalogPin.P2)
    OLED.writeNumNewLine(sound)
    OLED.writeNumNewLine(smarthome.ReadNoise(AnalogPin.P2))
    if (sound >= 60) {
        strip.showColor(neopixel.colors(NeoPixelColors.White))
    } else {
        strip.showColor(neopixel.colors(NeoPixelColors.Black))
    }
})
