while True:
    print(input.sound_level() + 350)
    if input.sound_level()+ 350 > 1500:
        music.magic_wand.play_until_done()