const country = ["USA", "GERMAN", "ITALY","KOREA", "JAPAN", "RUSSSIA","HOLAND", "ETHIOPIA", "BRITISH","CHINA", "SUDAN", "TURKY","YEMEN", "NIGERIA", "KENYA","UGANDA"];
function fun(){
    
   
    for(let i=0;i<=4;i++){
        Math.floor(Math.random() * i);
        document.getElementById('number').innerHTML +=country[i]+'<br>'+'<input id="okay"type="number"></input>'
        document.getElementById('number1').innerHTML +=country[i]+'<br>'+'<input type="number"></input>'
        document.getElementById('number2').innerHTML +=country[i]+'<br>'+'<input type="number"></input>'
        document.getElementById('number3').innerHTML +=country[i]+'<br>'+'<input type="number"></input>'
    }
 


}
country.forEach(funs);
function funs(){
    Math.floor(Math.random() * country);
  
   
}

