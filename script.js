let decrease;
let reset;
let increase;
let count = 0;

document.getElementById("button1").onclick = function(){
    count--;
    document.getElementById("displayCounter").textContent = count;
}

document.getElementById("button2").onclick = function(){
    count = 0;
    document.getElementById("displayCounter").textContent = 0;
}

document.getElementById("button3").onclick = function(){
    count++;
    document.getElementById("displayCounter").textContent = count;
}