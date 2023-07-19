/**
 * Problem 11: Palindrome
 * 
 * Given a string, return true if it is a palindrome.
 * A palindrome is a string that is the same forward and backwards.
 * Only consider letters, ignore spaces and cases.
 * 
 * @example "racecar" -> true
*/
function problem(str) {
    let lower = str.toLowerCase()
    let new_string = lower.replace(/\s/g, '')
    console.log(new_string)
    let middle = new_string.length - parseInt(new_string.length/2)
    console.log(middle)
    let f_sub_string = new_string.substring(0,middle)
    let s_sub_string = new_string.substring(middle -1 , new_string.length)
    console.log(f_sub_string)
    console.log(s_sub_string)
    let r_s_sub_string = s_sub_string.split('').reverse().join('')
    console.log(r_s_sub_string)
    console.log("end")
    if (f_sub_string === r_s_sub_string){
        return true;
    }
    else{
        return false;
    }
}

const tests = [
    ["racecar", true],
    ["icssc", false],
    ["dont nod", true],
    ["Was it a cat I saw", true],
    ["how are you", false]
]

module.exports = {problem, tests};