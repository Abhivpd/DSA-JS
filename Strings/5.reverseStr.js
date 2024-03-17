// using array 

function reverse(str, l, h) {
    const arr = str.split("");
    while (l <= h) {
        [arr[l], arr[h]] = [arr[h], arr[l]];
        l++;
        h--;
    }
    return arr.join("");
}

function reverseWords(str) {
    let start = 0;
    const n = str.length;
    for (let end = 0; end < n; end++) {
        if (str[end] === " ") {
            str = reverse(str, start, end - 1);
            start = end + 1;
        };
    }
    str = reverse(str, start, n - 1);
    return reverse(str, 0, n - 1)
}

console.log(reverseWords("Hello world of the new"));