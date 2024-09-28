function saveUserName(){
    let text = document.getElementById("username").value
    // let text = document.getElementsByName("username")[0].value
    console.log(text);

    document.getElementById("name").innerHTML ="Name "
    document.getElementById("name").innerHTML += text
}


function callmouseover(){
    console.log("mouse over");
}

function keypressed(){
    console.log("Key Pressed");
    document.getSelection
    let text = document.querySelector("#username").value
    console.log(text);
}


function findSquare(){
    let num = document.getElementById("square").innerText
    console.log(num*num);
    document.getElementById("square").innerHTML = ""
    document.getElementById("square").textContent = num*num
}

function changeBackground(){
    document.getElementsByTagName("body")[0].setAttribute("style", "background-color: red;color: white;");
}