var Username = "";
let textbox = document.getElementById("search");
document.getElementById("button").addEventListener('click', () => {
    if (Username = "") {
        Username = (textbox.value);
        textbox.value = "";
        textbox.placeholder = "Ask your question";

    } else {

        var randomNumber = Math.floor(Math.random() * 8);
        console.log(randomNumber)
        var eightBall = " ";
        // If/else statements 
        if (randomNumber == 1) {
            userQuestion = "It is certain"

        } else if (randomNumber ==2) {
            userQuestion = "It is decidedly so"

        } else if (randomNumber ==3) {
            userQuestion = "Reply hazy try again"

        } else if (randomNumber == 4) {
            userQuestion = "Cannot predict now"

        } else if (randomNumber == 5) {
            userQuestion = "Do not count on it"

        } else if (randomNumber == 6) {
            userQuestion = "My sources say no"

        } else if (randomNumber == 7) {
            userQuestion="Outlook not so good"
        } else if (randomNumber == 8) {
            userQuestion="Signs point to yes"
        }
        console.log(userQuestion);

    }

});

    console.log("hello");


