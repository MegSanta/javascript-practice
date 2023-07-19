/**
 * Problem 14: Majority Element
 * 
 * Given a list of numbers, return the majority number.
 * The majority number is the one that appears at least ⌊n/2⌋ times, where n is the size of the list.
 * 
 * @example [3,2,3] -> 3
*/
function problem(numbers) {
    function countOccurrences(arr, target) {
        const occurrences = arr.filter((element) => element === target);
        return occurrences.length;
    }
    let majority_num = 0
    let majority_num_occ = 0
    for (i of numbers){
        occ = countOccurrences(numbers, numbers[i])
        if (majority_num_occ <= occ){
            majority_num = numbers[i]
            majority_num_occ = occ
        }
    }

    if (majority_num_occ > numbers.length/2){
        return majority_num
    }
    else{
        return "no majority number"
    }
}

const tests = [
    [[3,2,3], 3],
    [[2,2,1,1,3,2,2], 2]
]

module.exports = {problem, tests};