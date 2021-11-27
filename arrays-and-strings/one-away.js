// One Away: There are three types of edits that can be performed on strings: insert a character,
// remove a character, or replace a character. Given two strings, write a function to check if they are
// one edit (or zero edits) away.


// O(n) time | O(1) space
function oneAway(str1, str2) {
    if (str1.length === str2.length)
        return canReplace(str1, str2)

    if (str1.length > str2.length)
        return canRemove(str1, str2)
    
    if (str1.length < str2.length)
        return canInsert(str1, str2)

    return false
}

function canReplace(str1, str2) {
    let difference = 0
    for (const index in str1)
        if (str1[index] !== str2[index])
            difference++
        if (difference > 1)
            return false
    return true
}

function canInsert(str1, str2) {
    let different = 0

    for (const index in str1) {
        if (str1[index] !== str2[index+different])
            different++
        if (different > 1)
            return false
    }
    return true
}

function canRemove(str1, str2) {
    let different = 0
    let index = 0
    while (index < str2.length) {
        if (str1[index+different] !== str2[index]) {
            different++
            if (different > 1)
                return false
            continue
        }
        index++
    }
    return true
}

console.log(oneAway('pale', 'ple')) // -> true
console.log(oneAway('pales', 'pale')) // -> true
console.log(oneAway('pale', 'bale')) // -> true
console.log(oneAway('pale', 'bae')) // -> false