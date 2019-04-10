// ES6:

// function marsExpo(s) {
//     const expected = "SOS".repeat(s.length / 3);
//     return console.log([...s].reduce((c, v, i) => c + (v !== expected[i]), 0));
// }

function marsExpo(s) {
    var n = s.length;
    var r = "SOS".repeat(n / 3);
    var t = 0;


    for (var i = 0; i < n; i++) {
        if (s[i] !== r[i]) {
            t++;
        }
    }

    return console.log(t);
}

marsExpo("SOSSOSd")

// Mars Exploration:
//
// Sami's spaceship crashed on Mars! She sends a series of SOS messages to Earth for help.
//
// NASA_Mars_Rover.jpg
//
// Letters in some of the SOS messages are altered by cosmic radiation during transmission. Given the signal received by Earth as a string, , determine how many letters of Sami's SOS have been changed by radiation.
//
// For example, Earth receives SOSTOT. Sami's original message was SOSSOS. Two of the message characters were changed in transit.
//
// Function Description
//
// Complete the marsExploration function in the editor below. It should return an integer representing the number of letters changed during transmission.
//
// marsExploration has the following parameter(s):
//
// s: the string as received on Earth
// Input Format
//
// There is one line of input: a single string, .
//
// Note: As the original message is just SOS repeated  times, 's length will be a multiple of .
//
// Constraints
//
//  will contain only uppercase English letters, ascii[A-Z].
// Output Format
//
// Print the number of letters in Sami's message that were altered by cosmic radiation.
