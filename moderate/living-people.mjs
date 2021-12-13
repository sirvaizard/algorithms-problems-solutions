// Living People: Given a list of people with their birth and death years, implement a method to
// compute the year with the most number of people alive. You may assume that all people were born
// between 1900 and 2000 (inclusive). If a person was alive during any portion of that year, they should
// be included in that year's count. For example, Person (birth= 1908, death= 1909) is included in the
// counts for both 1908 and 1909.

function livingPeople (people) {
    const timeline = Array(101).fill(0)

    for (const person of people) {
        timeline[person.birth-1900]++
        timeline[person.death-1900]--
    }

    let max = 0
    let count = 0
    for (const year of timeline) {
        if (count > max)
            max = count
        
        count += year
    }

    return max
}

class Person {
    constructor (birth, death) {
        this.birth = birth
        this.death = death
    }
}