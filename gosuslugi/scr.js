document.getElementById('startbtn').onclick = startWork;
var canvas = document.getElementById('the-canvas');
var ctx = canvas.getContext('2d');
var x = 0;
var y = 0;


function startWork(){
    


    
    
    x++;
    y++;
    ctx.fillRect(x,y, 10,10);

    setTimeout(startWork, 10);
}