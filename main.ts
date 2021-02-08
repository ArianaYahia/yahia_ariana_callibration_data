while (true) {
    console.log(input.lightLevel() + 350)
    if (input.lightLevel() + 350 > 1500) {
        light.showAnimation(light.rainbowAnimation, 100)
    }
    
}
