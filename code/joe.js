window.onload = function(){
    var b = document.getElementsByClassName("middle-column");
    var p = document.getElementsByClassName("popup");
    var c = document.getElementsByClassName("close");
    console.log("joe start");
    for(var i = 0; i < b.length; i++){
        console.log(i);
        var b2 = b[i];
        var p2 = p[i];
        

        b2.addEventListener("click", function() {
                popup_go(p2);
            }
        );
            
        

        var c2 = c[i];
        
        c2.addEventListener("click", function() {
                close(p2);
            }
        );
    }

    function popup_go(popup){
        popup.style.display = "block";
        console.log(popup);
        console.log(b2);
    }
    function close(popup){
        popup.style.display = "none";
        console.log("closed");
    }
}