
document.getElementById("content").innerHTML += '<button id="alertBtn">Alert</button>';
document.getElementById("content").innerHTML += '<button id="confirmBtn">Confirm Delete</button>';
document.getElementById("content").innerHTML += '<button id="promptBtn">Prompt</button>';


document.getElementById("alertBtn").addEventListener('click', function() {
    alert("yo this is an alert");
});

document.getElementById("confirmBtn").addEventListener('click', function() {
    if (confirm("r u sure???")) {
        console.log("ok item gone ig");
    } else {
        console.log("nah nvm");
    }
});

document.getElementById("promptBtn").addEventListener('click', function() {
    let name = prompt("who r u?");
    if (name) {
        document.getElementById("content").innerHTML += "<p>yo " + name + "!</p>";
    }
});
