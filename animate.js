var stop = document.getElementById("clear");
var svg = document.getElementById("svg");
var dvd = document.getElementById("dvd");
var dot = document.getElementById("circle");

var req = 0;

var halt = function(){
    //console.log(svg.hasChildNodes());
    //console.log(svg.lastChild);
    
    window.cancelAnimationFrame(req);
}

stop.addEventListener('click', halt);

var circle = function(){
    
    window.cancelAnimationFrame(req);
    while (svg.hasChildNodes()){
	svg.removeChild(svg.lastChild);
    }
    
    var radius = 10;
    var bounce = false;
    
    var animateDot = function(){
    
	halt();
	var circ = document.createElementNS("http://www.w3.org/2000/svg","circle");
	circ.setAttribute("cx",250);
	circ.setAttribute("cy",250);
	circ.setAttribute("r", radius);
	circ.setAttribute("fill","lightcoral");
	circ.setAttribute("stroke","pink");
	svg.appendChild(circ);

	//console.log(radius);
	
	if (radius == 250){
	    bounce = true;
	}
	if (radius <= 1){
	    bounce = false;
	}
	
	if (bounce){
	    radius--;
	}else{
	    radius++;
	}
	
	req = window.requestAnimationFrame( animateDot );
    };
    animateDot();
}

dot.addEventListener('click', circle);

var standby = function(){
    window.cancelAnimationFrame(req);
    
    var x = Math.floor(Math.random()*450);
    var y = Math.floor(Math.random()*450);
    
    var vert = true;
    var horiz = true;
    
    var moving = function(){
	halt();
	while (svg.hasChildNodes()){
	    svg.removeChild(svg.lastChild);
	}
	

	var img = document.createElementNS('http://www.w3.org/2000/svg','image');
	img.setAttributeNS(null,'height', 35);
	img.setAttributeNS(null,'width', 80);
	img.setAttributeNS('http://www.w3.org/1999/xlink','href','dvd_logo.jpg');
	img.setAttributeNS(null,'x', x);
	img.setAttributeNS(null,'y', y);
	svg.appendChild(img);


	if (x >= 420){
	    horiz = false;
	}
	if (x <= 0){
	    horiz = true;
	}
	if (y >= 465){
	    vert = false;
	}
	if (y <= 0){
	    vert = true;
	}

	if (horiz){ x++;
	}else{ x--;}
	if (vert){ y++;
	}else{ y--; }

	//console.log("x:"+x);
	//console.log("y:"+y);

	req = window.requestAnimationFrame( moving );
    };
    moving();

}

dvd.addEventListener('click', standby)
