while True:
    print(input.temperature(TemperatureUnit.FAHRENHEIT)+3.1)
    if input.temperature(TemperatureUnit.FAHRENHEIT)+3.1 > 85:
        music.magic_wand.play_until_done()
        