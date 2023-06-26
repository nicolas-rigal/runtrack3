function fizzbuzz() {
    let i =0;
    while (i <= 151) {
        if (i % 15 == 0) {
            console.log("Fizzbuzz");
        }
        else if (i % 3 == 0) {
            console.log("Fizz");
        }
        else if (i % 5 == 0) {
            console.log("Buzz");
        }
        else {
            console.log(i);
        }
        i++
    }
}
fizzbuzz();