// let username;

// username = window.prompt("Enter your name: ");

// console.log(username);


let username;

document.getElementById("mySubmit").onclick = function () {
    username = document.getElementById("myText").value;
    document.getElementById("myH1").textContent = `Hello ${username}`
}