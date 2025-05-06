var MD = document.getElementById('MainDiv');
var d1 = document.getElementById('JsDiv1');
var d2 = document.getElementById('JsDiv2');
var d3 = document.getElementById('JsDiv3');
var LB = document.getElementById('LeftButton');
var CB = document.getElementById('CenterButton');
var RB = document.getElementById('RightButton');
var p1 = document.getElementById('jsDivP1');
var p2 = document.getElementById('jsDivP2');
var p3 = document.getElementById('jsDivP3');



function PopUp1(){
	MD.style.gridTemplateColumns ='auto';
	
	p1.style.animationName='animo';
	p2.style.animationName='anim';
	p3.style.animationName='anim';
	
	d1.style.display='grid';
	d2.style.display='none';
	d3.style.display='none';
	
	
	d1.classList.add('clicked');
	LB.innerHTML='Close';
	LB.onclick=closeDiv;
	
}
// function reset1(){
	// <!-- d1.style.display='grid'; -->
	// <!-- d2.style.display='inline-block';
	// <!-- d3.style.display='inline-block';
// }
function PopUp2(){
MD.style.gridTemplateColumns ='auto';
	
	p1.style.animationName='anim';
	p2.style.animationName='animo';
	p3.style.animationName='anim';

	d2.style.display='grid';
	d1.style.display='none';
	d3.style.display='none';
	
	
	d2.classList.add('clicked');
	CB.innerHTML='Close';
	CB.onclick=closeDiv;
}
// function reset2(){
	// <!-- d1.style.display='inline-block';
	// <!-- d2.style.width='400px'; -->
	// <!-- d3.style.display='inline-block';
// }
function PopUp3(){
MD.style.gridTemplateColumns ='auto';
	
	p1.style.animationName='anim';
	p2.style.animationName='anim';
	p3.style.animationName='animo';
	
	d3.style.display='grid';
	d2.style.display='none';
	d1.style.display='none';
	
	
	d3.classList.add('clicked');
	RB.innerHTML='Close';
	RB.onclick=closeDiv;
}
// function reset3(){
	// <!-- d1.style.display='inline-block';
	// <!-- d2.style.display='inline-block';
	// <!-- d3.style.width='400px';
// }
function closeDiv(){
	MD.style.gridTemplateColumns ='auto auto auto';

	d1.style.display='grid';
	d2.style.display='grid';
	d3.style.display='grid';
	
	
	d1.classList.remove('clicked');
	d2.classList.remove('clicked');
	d3.classList.remove('clicked');
	
	
	LB.innerHTML='See More';
	CB.innerHTML='See More';
	RB.innerHTML='See More';
	
	
	LB.onclick=PopUp1;
	CB.onclick=PopUp2;
	RB.onclick=PopUp3;
}