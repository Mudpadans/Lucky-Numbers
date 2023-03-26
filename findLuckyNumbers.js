// Write your code below this line.
function luckyNumbers(n) {
    let someLuckyNumbers = [];
    while (someLuckyNumbers.length < n) {
        var r = Math.floor(Math.random() * 10) + 1;
        if (someLuckyNumbers.indexOf(r) === -1) {
            someLuckyNumbers.push(r);
        }
    }
        console.log(someLuckyNumbers);
    }
luckyNumbers(10);


