var total_seats=23;
console.log(total_seats)

window.onload = function fun1(){
    console.log("inside");
    document.getElementById("span").innerHTML=total_seats;
}
function sub(){
    let req=document.getElementById("sel").value;
    total_seats-=req;
    document.getElementById("span").innerHTML=total_seats;
}