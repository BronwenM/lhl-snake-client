let connection;

// setup interface to handle user input from stdin
const setupInput = function (conn) {
    connection = conn; //pass conn into local connection variable
    const stdin = process.stdin;  // create variable to hold the stdin object so we don't have to type process.stdin multiple times
    stdin.setRawMode(true); // Raw Mode allows us to listen for individual keypresses instead of waiting for the user to press enter
    stdin.setEncoding("utf8"); // utf8 encoding is set so that we can read the text data that is input
    stdin.resume(); // resume stdin so the program can listen for input
    stdin.on('data', handleUserInput);
    return stdin;   // return the stdin object so we can use it elsewhere in the program
};

//actions to pass to server based on key input
const handleUserInput = function (key) {
    switch (key) {
        case "w": //W            
            connection.write("Move: up");
            break;
        case "a": //A
            connection.write("Move: left");
            break;
        case "s": //S
            connection.write("Move: down");
            break;
        case "d": //D
            connection.write("Move: right");
            break;
        case "q": //D
            connection.write("Say: I'm sooooo hungry");
            break;
        case "e": //D
            connection.write("Say: om nom nom nom");
            break;
        case "\u0003": //Ctrl+C
            process.exit();
        default:
            break;
    }
};

module.exports = setupInput;