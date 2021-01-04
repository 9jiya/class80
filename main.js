x=[];
y=[];
function submit(){
    for(var j=1;j<=4;j++){
   var i = document.getElementById("i"+j).value;  
   console.log(i);
   x.push(i);
    }
    console.log(x);
    var l = x.length;
    console.log(l);
    for(var z=0;z<l;z++){
        y.push("<h4> Name:"+x[z]+"</h4>");
        console.log(y);
    }
    document.getElementById("ans1").innerHTML = y;
    var b=y.join(" ");
    document.getElementById("ans2").innerHTML= b;
    document.getElementById("b1").style.display="none";
    document.getElementById("b2").style.display="inline-block";
}
function change(){
    x.sort();
    console.log(x);
    var s = [];
    var li = x.length;
    console.log(li);
    for(var zi=0;zi<li;zi++){
        s.push("<h4> Name:"+x[zi]+"</h4>");
        console.log(s);
    }
    document.getElementById("ans1").innerHTML = s;
    var bi=s.join(" ");
    document.getElementById("ans2").innerHTML= bi;
}