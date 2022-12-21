    var myKier = document.getElementById("kier");
	var myKaro = document.getElementById("karo");
	var myPik = document.getElementById("pik");
	var myTrefl = document.getElementById("trefl");
    var myDiv1 = document.getElementById("div1");
	var myDiv2 = document.getElementById("div2");
	var myDiv3 = document.getElementById("div3");
	var a = 0;
	var b = 0;
	var c = 0;

window.onload = function () {

	 myKier = document.getElementById("kier");
	 myKaro = document.getElementById("karo");
	 myPik = document.getElementById("pik");
	 myTrefl = document.getElementById("trefl");
     myDiv1 = document.getElementById("div1");
	 myDiv2 = document.getElementById("div2");
	 myDiv3 = document.getElementById("div3");
	 a = 0;
	 b = 0;
	 c = 0;

	
	myKier.onclick = function(){
	
	myDiv3.style.background = myDiv2.style.background;
	myDiv2.style.background = myDiv1.style.background;
	myDiv1.style.background = "url(kier.png)"
	c = b;
	b = a;
	a = 1;
	
	check();
	
	};
	
	myKaro.onclick = function(){
	
	myDiv3.style.background = myDiv2.style.background;
	myDiv2.style.background = myDiv1.style.background;
	myDiv1.style.background = "url(karo.png)"
	c = b;
	b = a;
	a = 2;
	
	check();
	
	};
	
	myPik.onclick = function(){
	
	myDiv3.style.background = myDiv2.style.background;
	myDiv2.style.background = myDiv1.style.background;
	myDiv1.style.background = "url(pik.png)"
	c = b;
	b = a;
	a = 3;
	
	check();
	
	};
	
	myTrefl.onclick = function(){
	
	myDiv3.style.background = myDiv2.style.background;
	myDiv2.style.background = myDiv1.style.background;
	myDiv1.style.background = "url(trefl.png)"
	c = b;
	b = a;
	a = 4;
	
	check();
	
	};
};

function check(){
	myKier.style = "border:solid blue 2px;";
	if(a == 1)
	{myKier.style = "border:solid red 4px;"; console.log("a")}
	if(b == 1)
	{myKier.style = "border:solid red 4px;"; console.log("b")}
	if(c == 1)
	{myKier.style = "border:solid red 4px;"; console.log("c")}

	myKaro.style = "border:solid blue 2px;";
	if(a == 2)
	{myKaro.style = "border:solid red 4px;"; console.log("a")}
	if(b == 2)
	{myKaro.style = "border:solid red 4px;"; console.log("b")}
	if(c == 2)
	{myKaro.style = "border:solid red 4px;"; console.log("c")}

	myPik.style = "border:solid blue 2px;";
	if(a == 3)
	{myPik.style = "border:solid red 4px;"; console.log("a")}
	if(b == 3)
	{myPik.style = "border:solid red 4px;"; console.log("b")}
	if(c == 3)
	{myPik.style = "border:solid red 4px;"; console.log("c")}

	myTrefl.style = "border:solid blue 2px;";
	if(a == 4)
	{myTrefl.style = "border:solid red 4px;"; console.log("a")}
	if(b == 4)
	{myTrefl.style = "border:solid red 4px;"; console.log("b")}
	if(c == 4)
	{myTrefl.style = "border:solid red 4px;"; console.log("c")}
}
