function pal(s) {
    let begin = 0;
    let end = s.length - 1;

    while (begin < end) {
        if (s[begin] !== s[end]) return false;

        begin++;
        end--;
    }
    return true;
}

console.log(pal("abcda"))