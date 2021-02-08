while True:
    print(input.light_level() + 350)
    if input.light_level()+ 350 > 1500:
        light.show_animation(light.rainbow_animation, 100)