
document.getElementById("content").innerHTML += `
<form id="form">
Name: <input type="text" id="name"><br>
Email: <input type="email" id="email"><br>
Password: <input type="password" id="password"><br>
<button type="submit">Submit</button>
<p id="msg"></p>
</form>`;

document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let email = document.getElementById("email").value;
    let pass = document.getElementById("password").value;
    let name = document.getElementById("name").value;
    let err = [];

    if (!email.includes("@")) { 
        err.push("email sus");
    }
    
    if (pass.length < 8) {
        err.push("pw weak af");
    }

    document.getElementById("msg").textContent = err.length ? err.join(", ") : "ur in";
});
