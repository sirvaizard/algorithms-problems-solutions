// Calculator: Given an arithmetic equation consisting of positive integers,+,-,* and/ (no parentheses),
// compute t he result.
// EXAMPLE
// Input: 2*3+5/6*3+15
// Output: 23.5

/**
 * 2*3+5/6*3+15
 * 2*3, 5/6*3, 15
 *  
 */

function calculator (input) {
    console.log(_calculator([input]))
}

function _calculator (input, operators=['+', '-', '*', '/']) {
    const currentOperator = operators[0]

    for (const equation of input) {
        const equations = equation.split(currentOperator)
        if(operators.length > 1)
            _calculator(equations, operators.slice(1))
        else {
            console.log('e', equations, operators)
        }
        return equations
    }
}

function doOperation (equations, operator) {
    switch (operator) {
        case '+':
            break
        case '-':
            break
        case '*':
            break
        case '/':
            break
    }
}

console.log(calculator('2*3+5/6*3+15'))