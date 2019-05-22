let masterTodoList = [];
let userInput;
let isDone = false;

function addTodoList() {
    userInput = document.getElementById("user-input").value;
    if (/^\s*$/.test(userInput)) return alert("You need to input your to-do!");
    const newTodo = {
        isDone: false,
        text: document.getElementById("user-input").value
    }
    masterTodoList.push(newTodo);
    document.getElementById("user-input").value = "";
    updateTodoList()
}

function updateTodoList() {
    let html = "";
    for (let i = 0; i < masterTodoList.length; i++) {
        html +=
            `<li>
            <a href="#" style="text-decoration: none;" onclick="toggleDone(${i})">${masterTodoList[i].isDone ? "✔" : "❌"}</a>
            <span style="text-decoration: ${masterTodoList[i].isDone ? "line-through" : "none"}">${masterTodoList[i].text}</span>
            <a class="btn-danger ml-3 py-0 px-2" 
            style="border-radius: 60%;
            text-decoration: none;" href="#" 
            onclick="removeItem(${i})">X</a>
            </li>`
    }
    document.getElementById("current-list-item").innerHTML = html;
}

function clearAllTodoList() {
    masterTodoList = [];
    document.getElementById("current-list-item").innerHTML = "";
}

function toggleDone(idx) {
    const newerTodo = {
        isDone: !masterTodoList[idx].isDone,
        text: masterTodoList[idx].text
    }
    masterTodoList[idx] = newerTodo;
    updateTodoList();
}

function removeItem(idx) {
    masterTodoList.splice(idx, 1);
    updateTodoList();
}

function checkShowTask() {
    document.getElementById("current-list-item").innerHTML = "";
    var x = document.getElementById("check-done").checked;
    for (let i = 0; i < masterTodoList.length; i++) {
        if (x && masterTodoList[i].isDone) {
            document.getElementById("current-list-item").innerHTML +=
                `<li>
                <a href="#" style="text-decoration: none;" onclick="toggleDone(${i})">${masterTodoList[i].isDone ? "✔" : "❌"}</a>
                <span style="text-decoration: ${masterTodoList[i].isDone ? "line-through" : "none"}">${masterTodoList[i].text}</span>
                <a class="btn-danger ml-3 py-0 px-2" 
                style="border-radius: 60%;
                text-decoration: none;" href="#" 
                onclick="removeItem(${i})">X</a>
                </li>`
        } else if (!x && !masterTodoList[i].isDone) {
            document.getElementById("current-list-item").innerHTML +=
                `<li>
                <a href="#" style="text-decoration: none;" onclick="toggleDone(${i})">${masterTodoList[i].isDone ? "✔" : "❌"}</a>
                <span style="text-decoration: ${masterTodoList[i].isDone ? "line-through" : "none"}">${masterTodoList[i].text}</span>
                <a class="btn-danger ml-3 py-0 px-2" 
                style="border-radius: 60%;
                text-decoration: none;" href="#" 
                onclick="removeItem(${i})">X</a>
                </li>`
        }
    }
}

function showAllTask() {
    updateTodoList()
}
