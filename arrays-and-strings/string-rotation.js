// String Rotation: Assume you have a method isSubstring which checks if one word is a substring
// of another. Given two strings, s1 and s2, write code to check if s2 is a rotation of s1 using only one
// call to isSub5string (e.g., "waterbottle" is a rotation of" erbottlewat").

// O(s1) time | O(1) space 
function stringRotation(s1, s2) {
    for (const index in s1) {
        if (s2.includes(s1.substring(0, index)) && s2.includes(s1.substring(index))) {
            console.log(s1.substring(0, index), ' and ', s1.substring(index))
            return true
        }
    }
}

console.log(stringRotation('waterbottle', 'erbottlewat'))