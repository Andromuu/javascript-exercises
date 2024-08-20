
const repeatString = function( string, num) {
    let phrase = "";
    if (num >= 0){
        for (let i = 0; i < num; i++){
            phrase = `${phrase}${string}`;
        }
    } else {
        phrase = "ERROR";
    }
    return phrase;
};

// Do not edit below this line
module.exports = repeatString;
