function allLongestStrings(inputArray: string[]): string[] {
    let longest = 0;
    
    inputArray.map(item => {
        longest = longest < item.length ? item.length : longest;
    });

    return inputArray.filter((item) => {
        return item.length === longest
    })
}

console.log(allLongestStrings(["aba", "aa", "ad", "vceed", "abad"]));