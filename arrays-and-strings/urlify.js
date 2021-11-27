// URLify: Write a method to replace all spaces in a string with '%20'. You may assume that the string
// has sufficient space at the end to hold the additional characters, and that you are given the "true"
// length of the string. (Note: If implementing in Java, please use a character array so that you can
// perform this operation in place.)

/**
 * Ask: can I use regex? (Maybe not a good idea, because have the overhead of compiling)
 * Ask: trailing spaces should be considered?
 */

function urlify(url) {
    for (const index in url)
        if (url[index] === ' ')
            url[index] = '%20'
    return url.join('')
}

console.log(urlify('Mr John Smith'.split('')))