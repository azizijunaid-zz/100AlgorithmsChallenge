function adjacentElementsProduct(inputArray: number[]): number {
    let largestProduct = inputArray[0] * inputArray[1];

    for (let index = 1; index < inputArray.length - 1; index++) {
        let product = inputArray[index] * inputArray[index+1];
        // console.log(product)
        // console.log((`${largestProduct} < ${product}`), largestProduct < product)
        largestProduct = largestProduct < product ? product : largestProduct;
        // console.log("largestProduct", largestProduct)
    }

    return largestProduct;
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));


function largestNumber(params){
    let largestNumber = params[0];
    for (let index = 1; index < params.length; index++) {
        const currentNumber = params[index];
        if(largestNumber < currentNumber){
            largestNumber = currentNumber
        } 
    }
    return largestNumber
}

console.log(largestNumber([12, 45,1, 100,676, 300]));


function smallestNumber(params){
    let smallestNumber = params[0];
    for (let index = 1; index < params.length; index++) {
        const currentNumber = params[index];
        console.log(smallestNumber)
        if(smallestNumber > currentNumber){
            smallestNumber = currentNumber
        } 
    }
    return smallestNumber;
}

console.log(smallestNumber([12, 45,1, 100,676, 300]));