window.onload = function() {
    var b = document.getElementsByClassName("middle-column");
    var p = document.getElementsByClassName("popup");
    var c = document.getElementsByClassName("close");
    console.log("joe start");
    for(var i = 0; i < b.length; i++){
        console.log(i);
        var b2 = b[i];
        var p2 = p[i];
        b2.onclick = function(){
            p2.style.display = "block";
            console.log("clicc");
        }

        var c2 = c[i];
        c2.onclick = function(){
            p2.style.display = "none";
        }
    }
}