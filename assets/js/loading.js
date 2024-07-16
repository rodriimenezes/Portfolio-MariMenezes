function loading(){
    myvar = setTimeout(showPage,1000)
}
function showPage(){
    document.getElementById("load").style.display = "none"
    document.getElementById("page").style.display = "flex"
}