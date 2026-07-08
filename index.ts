import * as readline from 'node:readline';

function readInput(question: string): Promise<string> {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise((resolve) => {
        rl.question(question, (answer: string) => {
            rl.close();
            resolve(answer);
        });
    });
}

// This is our main function
function fizzbuzz(n: number): void {
    const bang: string = "Bang";
    const bong: string = "Bong";
    const buzz: string = "Buzz";
    const fezz: string = "Fezz";
    const fizz: string = "Fizz";

    const output: string[] = [];

    for (let i: number = 1; i <= n; i ++) {
        if (i % 3 === 0) {
            output.push(fizz);
        }
        if (i % 5 === 0) {
            output.push(buzz);
        }
        if (i % 7 === 0) {
            output.push(bang);
        }
        if (i % 11 === 0) {
            output.length = 0;
            if (i % 13 === 0) {
                output.push(fezz);
            }
            output.push(bong);
        }
        if (i % 13 === 0) {
            const index = output.findIndex(word => word.startsWith("B"));
            if (index === -1) {
                output.push(fezz);
            } else {
                output.splice(index, 0, fezz);
            }
        }
        if (i % 17 === 0) {
            output.reverse();
        }
        const result: string = output.length === 0 ? i.toString() : output.join("");
        console.log(result)
        output.length = 0;
    }
}

// Now, we run the main function:
async function main() {
    const maxInputStr: string = await readInput('Input a number: ');
    const maxInput = parseInt(maxInputStr);
    fizzbuzz(maxInput);
}

main();