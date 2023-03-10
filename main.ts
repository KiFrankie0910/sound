OLED.init(128, 64)
basic.forever(function () {
    OLED.writeNumNewLine(smarthome.ReadNoise(AnalogPin.P2))
})
