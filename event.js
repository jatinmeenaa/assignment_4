document.getElementById("content").innerHTML += '<button id="btn">Click me</button>';
document.getElementById("content").innerHTML += '<p id="txt">This is text</p>';

document.getElementById("btn").addEventListener('click', function() {
    document.getElementById("txt").textContent = "ok text changed lol";
});

document.getElementById("content").innerHTML += '<div id="box" style="width:100px;height:100px;background:blue;">Hover lol</div>';

document.getElementById("box").addEventListener('mouseover', function() {
    this.style.backgroundColor = "blue"; 
});
document.getElementById("box").addEventListener('mouseout', function() {
    this.style.backgroundColor = "green"; 
});

