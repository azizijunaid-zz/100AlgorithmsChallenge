function addBorder(picture: string[]): string[] {

    let lenOfWall = picture.length + 2;
    
    picture.forEach((item, i)=>{
        picture[i] = "*".concat(picture[i]) + item.concat("*")
    })
    picture.unshift("*".repeat(lenOfWall)); 
    picture.push("*".repeat(lenOfWall));
    
    return picture;
}


console.log(addBorder(["abc", "ded"]));