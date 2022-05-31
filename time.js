window.onload = (event) => {
 
secHand = document.getElementById("secHand");
minHand = document.getElementById("minHand");
hourHand = document.getElementById("hourHand");
btn  = document.getElementById("btn");

setInterval(() => {

    const now = new Date;
    const second = now.getSeconds();

    const secondDegree = ((second/60)*360);

    secHand.style.transform = `rotate(${secondDegree}deg)`;

    const minute = now.getMinutes();
    const minuteDegrees = ((minute/60)*360);
    minHand.style.transform = `rotate(${minuteDegrees}deg)`;

    const hour = now.getHours();
    const hourDegree = ((hour/60)*360)+180;
    hourHand.style.transform = `rotate(${hourDegree}deg)`;
   
   

},1000);
btn.addEventListener('click',soundOn);

function soundOn()
{


    btn.style.display = "none";

        var awaj = new Audio("tick.mp3");

        awaj.play();
        awaj.loop=true;
    
  
}
   

  };
