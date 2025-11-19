




// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };

function calculateTax(amount) {
    const taxValue = amount * (10/100)
    return taxValue
}

function convertToUpperCase(text) {
    const convertedText = text.toUpperCase();
    return convertedText
}

function findMaximum(num1, num2) {
    if (num1 > num2) {
        return num1
    }
    else {
        return num2
    }
}

function isPalindrome(word) {
    const characterArray = word.split('');
    const reversedArray = characterArray.reverse();
    const reversedWord = reversedArray.join('');
    if (reversedWord === word) {
        return true
    }
    else {
        return false
    }
}

function calculateDiscountedPrice(originalPrice, discountPercentage) {
    const discountedPrice = originalPrice * (1 - discountPercentage/100)
    return discountedPrice 
}
