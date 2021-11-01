radio.onReceivedNumber(function (receivedNumber) {
    if (input.buttonIsPressed(Button.A)) {
        led.plotBarGraph(
        radio.receivedPacket(RadioPacketProperty.SignalStrength) + 100,
        60
        )
    }
})
radio.setGroup(1)
