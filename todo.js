document.getElementById("addTask").addEventListener("click", function() {
    let taskText = document.getElementById("taskInput").value;
    if (taskText) {
        let li = document.createElement("li");
        li.textContent = taskText;
        
        let delBtn = document.createElement("button");
        delBtn.textContent = "Delete";
        delBtn.onclick = function() { li.remove(); };

        li.appendChild(delBtn);
        document.getElementById("taskList").appendChild(li);
    }
});
