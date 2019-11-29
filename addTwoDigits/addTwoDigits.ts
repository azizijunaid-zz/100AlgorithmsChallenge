function addTwoDigits(n: any): number {
    return n.toString().split('').reduce((a, b) => parseInt(a) + parseInt(b));
}

console.log(addTwoDigits(29));