// String Compression: Implement a method to perform basic string compression using the counts
// of repeated characters. For example, the string aabcccccaaa would become a2blc5a3. If the
// "compressed" string would not become smaller than the original string, your method should return
// the original string. You can assume the string has only uppercase and lowercase letters (a - z).

//O(n) time | O(k) space, k beeing the number of alternating characters in the string
function stringCompression(str) {
    let count = 0
    let current = ''
    const result = []
    for (const letter of str) {
        if (current !== letter) {
            if (count !== 0) {
                result.push(`${current}${count}`)
                count = 0
            }
            current = letter
        }
        count++
    }
    result.push(`${current}${count}`)

    const newStr = result.join('')
    return str.length <= newStr.length ? str : newStr
}

console.log(stringCompression('aabcccccaaa'))