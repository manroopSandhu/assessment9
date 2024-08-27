function unroll(squareArray) {
    let unrolled = []

    while (squareArray.length) {
        // move right
        unrolled.concat(squareArray.shift())

        // move down
        for (let i = 0; i < squareArray.length; i++) {
            unrolled.push(squareArray[i].pop())
        }

        // move left
        if(squareArray.length) {
            unrolled = unrolled.concat(squareArray.pop().reverse())
        }

        // move up
        for (let i = squareArray.length - 1; i >= 0; i--) {
            unrolled.push(squareArray[i].shift())
        }
    }
    return unrolled
}

module.exports = unroll;
