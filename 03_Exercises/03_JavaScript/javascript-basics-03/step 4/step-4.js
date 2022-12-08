function checkpass(){
    var y=document.getElementById("password").value;
    var x=document.getElementById("confirmation").value;
    if(x!=y)
    {
        document.getElementById("password").style.border="2px solid red";
        document.getElementById("confirmation").style.border="2px solid red";
    }

}