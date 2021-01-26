new TypeIt("#header-desc", {
        speed: 50,
        waitUntilVisible: true
    })
    .type("HAyallerinizdeki ", {
        delay: 400
    })
    .move(-15)
    .delete(1)
    .type('a')
    .move('END')
    .type(' web sitesiniXAX')
    .pause(500)
    .delete(3)
    .type(' hyata')
    .move(-4)
    .type('a')
    .move('END')
    .type(' geçirebilirim.')
    .pause(500)
    .break({
        delay: 500
    })
    .break({
        delay: 500
    })
    .type('<em><3</em>')
    .go();