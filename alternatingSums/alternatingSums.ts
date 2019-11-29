function alternatingSums(a: number[]): number[] {

    let evenSum = 0;
    let oddSum = 0;

    a.map((elem, i)=>{
        return (i % 2 === 0)  ? evenSum += elem : oddSum += elem; 
    })

    return [evenSum, oddSum]

}

console.log(alternatingSums([50, 60, 60, 45, 70]))