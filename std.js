// uh add date
document.getElementById("content").innerHTML += "<p id='d'></p>";
document.getElementById("d").textContent = new Date(); 

document.getElementById("content").innerHTML += "<p id='r'></p>";
document.getElementById("r").textContent = Math.random() * 100; 

fetch("https://api.openweathermap.org/data/2.5/weather?q=London&appid=YOUR_API_KEY")
.then(res => res.json())
.then(data => {
    document.getElementById("content").innerHTML += "<p>wthr: " + JSON.stringify(data) + "</p>"; 

}).catch(e => console.log("idk what happened", e));
