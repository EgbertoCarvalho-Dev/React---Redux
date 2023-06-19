export default function gerarNumeros(value) {
    if (value >= 60) {
        value = 60;
    }
    let numbers = [];
    let generateNumber;
    let count = 0;

    while (count != value) {
        generateNumber = parseInt((Math.random() * (1 - 60) + 1)) * -1;
        if (generateNumber == 0) {
            generateNumber = 1;
        }
        if (!numbers.includes(generateNumber)) {

            numbers.push(generateNumber);

            count++;
        }

    }

    return numbers.sort(function (a, b) {
        return a - b;
    });
}
