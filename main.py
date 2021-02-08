while True:
    print(input.temperature(TemperatureUnit.FAHRENHEIT)+3.9)
    if input.temperature(TemperatureUnit.FAHRENHEIT)+3.9 > 85:
        music.magic_wand.play_until_done()


