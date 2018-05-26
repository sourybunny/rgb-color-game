
var numsqrs=6;
var colors=generateRandomColors(numsqrs);


var squares=document.querySelectorAll(".square");
var pickedcolor=pickColor();
var colordisplay=document.getElementById("colordisplay")
var displaymsg=document.getElementById("displaymsg");
var h1=document.querySelector("h1");
var reset=document.querySelector("#reset");
var easybtn=document.querySelector("#easy");
var hardbtn=document.querySelector("#hard");

easybtn.addEventListener("click",function(){
	easybtn.classList.add("selected");
	hardbtn.classList.remove("selected");
	numsqrs=3;
	colors=generateRandomColors(numsqrs);
	pickedcolor=pickColor();
colordisplay.textContent=pickedcolor;
displaymsg.textContent="";
for(var i=0;i<squares.length;i++){
	if(colors[i])
	{
		squares[i].style.backgroundColor=colors[i];
	}else{
		squares[i].style.display="none";
	}
}

})

hardbtn.addEventListener("click",function(){
	easybtn.classList.remove("selected");
	hardbtn.classList.add("selected");
	numsqrs=6;

	colors=generateRandomColors(numsqrs);
		pickedcolor=pickColor();
colordisplay.textContent=pickedcolor;
displaymsg.textContent="";
for(var i=0;i<colors.length;i++){
		squares[i].style.backgroundColor=colors[i];
	squares[i].style.display="block";
}

})

reset.addEventListener("click",function(){
 colors=generateRandomColors(numsqrs);
pickedcolor=pickColor();
colordisplay.textContent=pickedcolor;
displaymsg.textContent="";

for(var i=0;i<squares.length;i++){
	squares[i].style.backgroundColor=colors[i];
}
// h1.style.backgroundColor="#232323";
}
)

colordisplay.textContent=pickedcolor;
for(var i=0;i<squares.length;i++){
	squares[i].style.backgroundColor=colors[i];

	squares[i].addEventListener("click", function(){


		var clickedcolor=this.style.backgroundColor;
		console.log(clickedcolor,pickedcolor);
		if(clickedcolor===pickedcolor){
			displaymsg.textContent="correct";
			changeColor(clickedcolor);
			h1.style.backgroundColor=clickedcolor;
			reset.textContent="Play Again?"

			
		}else{
			reset.textContent="New Colors";
			// this.style.backgroundColor= "#232323";
			displaymsg.textContent="Try Again!";
		}
		
	})
}

function changeColor(colorr){
	for(var i=0;i<squares.length;i++){
		squares[i].style.backgroundColor=colorr;
	}
}


function pickColor(){
	var random=Math.floor(Math.random()*colors.length+0);
	return colors[random];
}


function generateRandomColors(num){
	var arr=[];
for(var i=0;i<num;i++){

	arr.push(randomColor());
				}
	return arr;
}


function randomColor(){
	var r=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);
	return "rgb(" +r+", "+g+", "+b+ ")";
}



