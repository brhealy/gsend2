basic.showString("SEND")
radio.setGroup(255)
input.setAccelerometerRange(AcceleratorRange.EightG)
basic.forever(function () {
    radio.sendNumber(input.acceleration(Dimension.Z))
})
