while (true) {
    console.log(input.temperature(TemperatureUnit.Fahrenheit) + 3.9)
    if (input.temperature(TemperatureUnit.Fahrenheit) + 3.9 > 85) {
        music.magicWand.playUntilDone()
    }
    
}
