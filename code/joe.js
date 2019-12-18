window.onload = function(){
    var b = document.getElementsByClassName("middle-column");
    var p = document.getElementsByClassName("popup");
    var c = document.getElementsByClassName("close");
    console.log("joe start");
    for(var i = 0; i < b.length; i++){
        console.log(i);
        var be = b[i];
        var pe= p[i];
        var ce = c[i];

        be.addEventListener("click", function() {
                popup_go(pe);
            }
        );
            
        

        
        
        ce.addEventListener("click", function() {
                close(pe);
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