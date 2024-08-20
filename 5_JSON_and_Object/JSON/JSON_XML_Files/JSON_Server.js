const xmlhttp = new XMLHttpRequest();
xmlhttp.onload = function(){
    const obj = JSON.parse(this.responseText);
    console.log(obj);
}
xmlhttp.open("GET","https://jsonplaceholder.typicode.com/users");
xmlhttp.send();

// Will work with console or html page only

// const myObj = { name: "John", age: 31, city: "New York" };
// const myJSON = JSON.stringify(myObj);
// window.location = "demo_json.php?x=" + myJSON;