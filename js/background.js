function addHexes(r) {
    for (var i = 1; i <= (6 * r); i++) {
        $('.container').append(
            '<div class="hexagon r' + r + '"></div>'
        )
    }
}

$('.container').append(
    '<div class="hexagon r0"></div>'
)

var radius = 5 //Hex-radius

for (var r = 1; r < radius; ++r) {
    addHexes(r);
}