function almostIncreasingSequence(sequence: number[]): boolean {
    let count = 0;
    let phase = 0;
    for (let i = 0; i < sequence.length; i++) {
        phase += 1;
        if(sequence[i] <= sequence[i-1]){
            console.log(sequence[i])
            count++
            if(sequence[i] <= sequence[i-2] && sequence[i+1] <= sequence[i-1]) return false
        }
    }

    return count <= 1;
}

console.log(almostIncreasingSequence([1, 3, 2, 1])) 
console.log(almostIncreasingSequence([1, 3, 2])) 