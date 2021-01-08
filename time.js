function time(){
    var date=new Date();
    var time=document.getElementById("h1time");
    time.innerHTML=date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
    var dat=document.getElementById("pdate");
    dat.innerHTML=date.getDate()+"/"+parseInt(date.getMonth()+1)+"/"+date.getFullYear() ;
}
onload=time();
//نخدم ساعة تلقائي
setInterval(time,100);

function getcolor(){
    var getcolor=document.getElementById("INcolor").value;
      localStorage.setItem("col",getcolor);
      document.getElementById("h1time").style.color=localStorage.getItem("col");
      document.getElementById("pdate").style.color=localStorage.getItem("col");
      document.body.style.background=localStorage.getItem("col");
}
function set(){

    document.getElementById("INcolor").value=localStorage.getItem("col");

    document.getElementById("h1time").style.color=localStorage.getItem("col");
      document.getElementById("pdate").style.color=localStorage.getItem("col");
      document.body.style.background=localStorage.getItem("col");
}
//onload=color();
//setInterval(set,100);
onload=set();