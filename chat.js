document.getElementById("chatBtn").addEventListener("click", function() {
    let userInput = document.getElementById("chatInput").value.toLowerCase();
    let response = "I don't understand.";

    if (userInput.includes("hello")) {
        response = "Hi there!";
    } else if (userInput.includes("how are you")) {
        response = "I'm just a bot, but I'm good!";
    } else if (userInput.includes("bye")) {
        response = "Goodbye!";
    }

    document.getElementById("chatOutput").textContent = response;
});
