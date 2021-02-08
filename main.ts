while (true) {
    console.log(input.temperature(TemperatureUnit.Fahrenheit) + 3.1)
    if (input.temperature(TemperatureUnit.Fahrenheit) + 3.1 > 85) {
        music.magicWand.playUntilDone()
    }
    
}
