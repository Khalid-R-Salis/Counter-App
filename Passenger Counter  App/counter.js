let counter = 0;
function increment(){
    counter +=1;
    document.getElementById("record").innerHTML=counter;
    
}
function save(){
    document.getElementById("record").innerHTML = 0;
    let counterStr = counter +"-"
    document.getElementById("entries").innerText += counterStr;
    counter = 0;
}

function takeoff(){
    document.getElementById("entries").innerHTML = "Previous Entries 0"
}

