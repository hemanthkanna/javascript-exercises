const removeFromArray = function(...args) { 
    const myArray = args[0];
    let newArray = [];
    myArray.forEach((item) => {
        if(!args.includes(item)) {
            newArray.push(item);
            console.log(newArray);
        }
    })   
    return newArray;          
};

// Do not edit below this line
module.exports = removeFromArray;
