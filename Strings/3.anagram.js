function anagram(s1, s2) {
    if (s1.length !== s2.length) return false;

    const countArray = new Array(256).fill(0);
    for (let i = 0; i < s1.length; i++) {
        countArray[s1.charCodeAt(i)]++;
        countArray[s2.charCodeAt(i)]--;
    }

    for (let i = 0; i < countArray.length; i++) {
        if (countArray[i] !== 0) return false
    }
    return true;
}

console.log(anagram("abcd", "bcda"))

//  TC  =>  O(n + alphabetsize)   n - s.length
//  SC  =>  O(alphabetsize)