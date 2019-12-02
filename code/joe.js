window.onload = function() {
    var b = document.getElementsByClassName("middle-column");
    var p = document.getElementsByClassName("popup");
    var c = document.getElementsByClassName("close");
    console.log("joe start");
    for(var i = 0; i < b.length; i++){
        console.log(i);
        var b2 = b[i];
        var p2 = p[i];
        

        b2.addEventListener("click", popup_go(p2), false);
            
        

        var c2 = c[i];
        
        c2.onclick = function(){
            p2.style.display = "none";
        }
    }
}
function popup_go(popup){
    popup.style.display = "block";
    console.log(popup);
    console.log(b2);
}
function close(cl)