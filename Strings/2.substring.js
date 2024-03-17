// 1. ITERATIVE METHOD

function subString(s1, s2) {
    let j = 0;
    for (let i = 0; i < s1.length && j < s2.length; i++) {
        if (s1[i] === s2[j]) j++;
    }

    return (j === s2.length);
}

//   Time complexity --> O(m + n)  => m = s1.length ;  n = s2.length
//   Space --> O(1)


// 2. RECURSIVE METHOD

function recSubString(s1, s2, m, n) {
    if (n === 0) return true;
    if (m === 0) return false;

    if (s1[m - 1] === s2[n - 1]) return recSubString(s1, s2, m - 1, n - 1);
    else return recSubString(s1, s2, m - 1, n);
}

console.log(recSubString("abcde", "aec", 5, 3))

//  TC => O(m + n)
//  SC => O(m + n)

