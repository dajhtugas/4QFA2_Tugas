function clicked(){
    var a=document.getElementById("num1").value;
    var b=document.getElementById("num2").value;
    var c=parseInt(a);
    var d=parseInt(b);
    var e;
    var f;
    var multtable=document.getElementById("multiply");
    var display="<table border=1>";

    if(c<=1||c>=11||d<=1||d>=11){
        alert("Please Enter Numbers From 2 to 10 ONLY")
    }
    else{
        for(e=1; e<=c; e++){
            display=display+"<tr>";
            for(f=1;f<=d; f++){
                display=display+"<td>"+e*f+"</td>";
            }
            display=display+"</tr>";
        }
        document.getElementById("table").innerHTML = display;
    }
    return false
}