function myFunc(){
    myvar = setTimeout(myFunc2,1000)
}
function myFunc2(){
    document.getElementById("load").style.display = "none"
    document.getElementById("page").style.display = "flex"
}