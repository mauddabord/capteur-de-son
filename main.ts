basic.forever(function () {
    if (input.soundLevel() > 100) {
        basic.showIcon(IconNames.Heart)
    } else {
        basic.showIcon(IconNames.SmallHeart)
    }
})
