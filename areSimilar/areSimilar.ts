function areSimilar(a: number[], b: number[]): boolean {
   let c : number[] = [];
   let d : number[] = [];

    if(a.toString() === b.toString()){
       return true
   }

   for (let index = 0; index < a.length; index++) { // 0 value 1 !== 2
       if(a[index] !== b[index]){
            c.push(a[index])
            d.push(b[index])
       }
   }

   d.reverse();
   if(c.length === 2 && (c.toString() === d.toString()){
       return true
   } 
   return false;
}

console.log(areSimilar([1, 2, 3], [1, 2, 3]));
console.log(areSimilar([1, 2, 3], [2, 1, 3]));
console.log(areSimilar([1, 2, 2], [2, 1, 1]));
