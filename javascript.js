function myFunction1() {
    var x = Math.floor((Math.random() * 6)+ 1);
    document.getElementById("demo").innerHTML = x;
    document.getElementById("diceImage").src="dice-"+x+".png";
   if(x<5){
    var up=document.getElementById("player1").style.marginLeft=100*x+"px";
    if( up =="200px"){
        document.getElementById("player1").style.marginTop="-"+300+"px";
        
    }else if(up=="400px"){
        
    }
}
  }
  function myFunction2(){
      var y=Math.floor((Math.random() * 6)+ 1);
      document.getElementById("demo").innerHTML = y;
      document.getElementById("diceImage").src="dice-"+y+".png";
      if(y=="6"){
          myFunction2();
      }
      document.getElementById("player2").style.marginLeft=100*y+"px";
      if(up=="400px" || up=="200px"){
        
        document.getElementById("player2").style.marginTop="-"+400+"px";
    }

  }
