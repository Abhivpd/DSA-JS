//  1. Best approach

function leftMostRepeatingCharacter(str) {
    const countArray = new Array(256).fill(0);

    for (let i = 0; i < str.length; i++) {
        countArray[str.charCodeAt(i)]++;
    };

    for (let i = 0; i < str.length; i++) {
        if (countArray[str.charCodeAt(i)] > 1) return i;
    }
    return -1;
}

// console.log(leftMostRepeatingCharacter("abbcca"));

//  TC => O(n + alphabetsize)  alphabetsize tc for creating filling array of alphabet size
//  SC => O(alphabetSize)

// 2. EFFICIENT APPROACH

function leftMost(str) {
    const array = new Array(256).fill(false);
    let output = -1;

    for (let i = str.length - 1; i >= 0; i--) {
        if (array[str.charCodeAt(i)]) output = i;
        else (array[str.charCodeAt(i)] = true)
    }

    return output;
}

console.log(leftMost("abbccd"))