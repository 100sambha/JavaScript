let button = document.getElementsByTagName("button")[0];
button.addEventListener("click", function() {
    let head = document.getElementsByTagName("h1")[0];
    let body = document.getElementsByTagName("body")[0];
    if (body.style.backgroundColor === "black") {
        body.style.backgroundColor = "white"; // Set background to white
        head.style.color = "black"; // Set background to white
    } else {
        body.style.backgroundColor = "black"; // Set background to black
        head.style.color = "white"; // Set background to white
    }

});