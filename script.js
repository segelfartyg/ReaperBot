var scrollat = false;
var ursprung = window.scrollY;
var x = 0;
var z = 40;
var y = 80;

var framåt = true;

function Go(){
  setInterval(Gcircle(), 0.001)
}





function Gcircle(){

  setInterval(function(){

    if(x == 40){
      framåt = false;
      console.log("tjosan");
    }
    if(x == 5){
      framåt = true;
    }

    console.log(framåt)

    if(framåt == true)
    {
      y = y + 1;
      x = x + 1;
      z = z + 1;
      console.log(x);
      console.log(y);
      x = x.toString();


    }
    if(framåt == false){
      y = y - 1;
      x = x - 1;
      z = z - 1;
      console.log(x);
      x = x.toString();

    }
   
  
    var con = document.getElementById("containerr");
    var desc = document.getElementById("desc");
    desc.style.background = "linear-gradient(140deg, rgb(255, 0, 0)" + x + "%, rgb(0, 185, 9)" + z + "%, rgb(255, 0, 0)" + y + "%)";
    con.style.background = "linear-gradient(140deg, rgb(255, 0, 0)" + x + "%, rgb(0, 185, 9)" + z + "%, rgb(255, 0, 0)" + y + "%)";
    console.log("scs")

    x = parseInt(x);

  }, 90)
 

}




/* document.addEventListener("scroll", function (e){


  var scrollY = window.scrollY;
  
  console.log(scrollY);
  
if(scrollY >= ursprung && scrollat == false){
window.scrollTo({
    top: 950, 
    left: 0, 
    behavior: 'smooth'
  });   rgba(0, 133, 7, 0.507)rgba(0, 133, 7, 0.507)

  
console.log("scrolla ner");
var bildspel22 = document.getElementById("container")
scrolla = true;
bildspel22.style.animation = "mysko linear 0.5s";


console.log(scrollY);
scrollat = true;

}
if(scrollY <=  ursprung && scrollat == false){

  console.log("scrolla upp");
  window.scroll({
    top: 0, 
    left: 0, 
    behavior: 'smooth'
  });   
var bildspel2 = document.getElementById("container");
bildspel2.style.animation = "myskos linear 1s";
console.log(ursprung)
scrollat = true;
}

console.log("*DELAY*");
setTimeout(() => {  console.log("INTE SCROLLAT"); 
scrollat =  false;}, 1000);
scrollY = window.scrollY;
ursprung = scrollY;







}


);
*/