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
export function fizzbuzz(n: number, useFizz: boolean = true, useBuzz: boolean= true, useBang: boolean= true, useBong: boolean = true,
    useFezz: boolean = true, useReverse: boolean = true): string[] {
    const bang: string = "Bang";
    const bong: string = "Bong";
    const buzz: string = "Buzz";
    const fezz: string = "Fezz";
    const fizz: string = "Fizz";

    const output: string[] = [];
    const finalOutput: string[] = [];

    for (let i: number = 1; i <= n; i ++) {
        if (i % 3 === 0 && useFizz) {
            output.push(fizz);
        }
        if (i % 5 === 0 && useBuzz) {
            output.push(buzz);
        }
        if (i % 7 === 0 && useBang) {
            output.push(bang);
        }
        if (i % 11 === 0 && useBong) {
            output.length = 0;
            if (i % 13 === 0 && useFezz) {
                output.push(fezz);
            }
            output.push(bong);
        }
        if (i % 13 === 0 && useFezz) {
            const index = output.findIndex(word => word.startsWith("B"));
            if (index === -1) {
                output.push(fezz);
            } else {
                output.splice(index, 0, fezz);
            }
        }
        if (i % 17 === 0 && useReverse) {
            output.reverse();
        }
        const result: string = output.length === 0 ? i.toString() : output.join("");
        console.log(result);
        finalOutput.push(result);
        output.length = 0;
    }
    return finalOutput
}

// Now, we run the main function:
async function main() {
    const maxInputStr: string = await readInput('Input a number: ');
    const maxInput = parseInt(maxInputStr);

    const args = process.argv.slice(2);

    const useFizz: boolean = args.includes("3");
    const useBuzz: boolean = args.includes("5");
    const useBang: boolean = args.includes("7");
    const useBong: boolean = args.includes("11");
    const useFezz: boolean = args.includes("13");
    const useReverse: boolean = args.includes("17");

    fizzbuzz(maxInput, useFizz, useBuzz, useBang, useBong, useFezz, useReverse);
}

main();
