const enum Words {
    bang = "Bang",
    bong = "Bong",
    buzz = "Buzz",
    fezz = "Fezz",
    fizz = "Fizz"
}

function fizzbuzz(): void {

    for (let i: number = 1; i <= 255; i ++) {
        const output: string[] = [];
        if (i % 3 === 0) {
            output.push(Words.fizz);
        }
        if (i % 5 === 0) {
            output.push(Words.buzz);
        }
        if (i % 7 === 0) {
            output.push(Words.bang);
        }
        if (i % 11 === 0) {
            output.length = 0;
            output.push(Words.bong);
        }
        if (i % 13 === 0) {
            const index = output.findIndex(word => word.startsWith("B"));
            if (index === -1) {
                output.push(Words.fezz);
            } else {
                output.splice(index, 0, Words.fezz);
            }
        }
        if (i % 17 === 0) {
            output.reverse();
        }
        const result: string = output.length === 0 ? i.toString() : output.join("");
        console.log(result)
    }
}

fizzbuzz();