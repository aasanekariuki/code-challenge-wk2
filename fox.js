function swap(str) {
    // we put an empty string to store the awaiting string
    let sentence = '';
    // we create a loop through each character of the input string
    for (let i = 0; i < str.length; i++) {
        // we check if the character is upperCase 
            if (str[i] === str[i].toUpperCase()) {
                // if upperCase, it converts to lowercase 
                sentence += str[i].toLowerCase();
            } else {
                // if not upperCase meaning lowerCase converts to Uppercase
                sentence += str[i].toUpperCase();
            }
        }
        // return the string
        return sentence;
    }
    // calling the function with the string
    console.log(swap('The Quick Brown Fox'));
