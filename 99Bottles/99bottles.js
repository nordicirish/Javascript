var count = 99;
function beer() {
    while (count >= 0) {
        if (count > 1) {
            console.log(
                count +
                " bottles of beer on the wall, " +
                count +
                " bottles of beer. Take one down and pass it around, " +
                (count - 1) +
                " bottles of beer on the wall."
            );
        } else if (count === 1) {
            console.log(
                count +
                " bottle of beer on the wall, " +
                count +
                " bottle of beer. Take one down and pass it around, " +
                (count - 1) +
                " bottles of beer on the wall."
            );
        } else {
            console.log(
                "No bottles of beer on the wall. No bottles of beer! You took 'em down passed 'em around, now go to the store!!"
            );
        }
        count--;
    }
}
beer();
