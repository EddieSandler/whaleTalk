var input = "turpentine and turtles"
input=input.toLowerCase();
const vowels=['a','e','i','o','u']
let resultArray =[];

for (let i = 0; i < input.length; i++){
    // console.log(i)
    for(let j = 0; j < vowels.length; j++){

if(input[i]  === vowels[j]){
    resultArray.push(input[i])
    input[i] === 'e' || input[i] === 'u' ? resultArray.push(input[i]) : resultArray  
    }
 }
 
}
let resultString = resultArray.join('').toUpperCase()
console.log(resultString)
