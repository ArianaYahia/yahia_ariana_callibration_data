while (true) {
    console.log(input.soundLevel() + 350)
    if (input.soundLevel() + 350 > 1500) {
        music.magicWand.playUntilDone()
    }
    
}
