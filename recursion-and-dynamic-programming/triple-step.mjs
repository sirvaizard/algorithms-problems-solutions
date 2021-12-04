// Triple Step: A child is running up a staircase with n steps and can hop either 1 step, 2 steps, or 3
// steps at a time. Implement a method to count how many possible ways the child can run up the
// stairs.

/**
 * 21:20 21:22
 * Ask: the child has to be exactly at step n to count as solution or it could be at > n
 */

/**
 * O(3^n) time | O(log n) space
 */
function tripleStep (n) {
    if (n < 0)
        return 0
    if (n === 0)
        return 1

    return tripleStep(n-1) + tripleStep(n-2) + tripleStep(n-3)
}

console.log(tripleStep(3))

/**
 * O(n) time | O(n) space
 */
const memo = Array(3).fill(null)
function tripleStepMemoization (n) {
    if (n < 0)
        return 0
    if (n === 0)
        return 1

    if (!memo[n])
        memo[n] = tripleStepMemoization(n-1) + tripleStepMemoization(n-2) + tripleStepMemoization(n-3)

    return memo[n]
}

console.log(tripleStepMemoization(3))

/**
 *                       f(3)
 *         f(2)          (f1)           f(0)
 *    f(1) f(0)    f(0) f(-1) f(-2)    
 * f(0) f(-1) f(-2)
 */