let textInput = document.getElementById("text");
let reply = document.getElementById("reply");
//if the input is less than 5 characters print the error message: The string is too short.
//if the input is greater than 12 characters print the error message : The string is too long.
//if the input is a number print the error message: You cannot enter a number.
textInput.addEventListener("keyup", run);
const regex = /\d/g; 
//number = parseInt(textInput.input);
function run() {
    try {
        //if (typeof(number) === "number") throw "You cannot enter a number.";
        if (textInput.value.length < 5) throw "The string is too short.";
        if (textInput.value.length > 12) throw "TThe string is too long.";
        if (textInput.value.match(regex)) throw "You cannot enter a number.";
        
    } catch (error) {
        reply.innerHTML = error;
    }
    console.log(textInput.value);
    
}