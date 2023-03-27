canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

img_width = 300;
img_height = 100;

var img_image;

img_x = 100;
img_y = 100;

function add() {
	img_imgTag = new Image(); //definindo uma variável com uma nova imagem
	img_imgTag.onload = uploadimg; // ajustando uma função, ao carregar essa variável
	img_imgTag.src = img_image;   // carregar uma imagem
}

function uploadimg() {

	ctx.drawImage(img_imgTag, img_x, img_y, img_width, img_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
		if((keyPressed >=97 && keyPressed<=122)|| (keyPressed >=65 && keyPressed<=90))
		function my_keydown(e)
		{
			keyPressed = e.keyCode;
		}
		if((keyPressed >=97 && keyPressed<=122)|| (keyPressed >=65 && keyPressed<=90))
		{
			aplhabetkey();
			document.getElementById("d1").innerHTML="Você pressionou uma tecla do alfabeto";
		}
		else if(keyPressed>=48 && keyPressed <= 57)
		{
			nmuberkey();
			document.getElementById("d1").innerHTML="Você pressionou uma tecla dos números";
		}
		else if(keyPressed>=37 && keyPressed<=40)
		{
			deircionalkey();
			document.getElementById("d1").innerHTML="Você pressionou uma tecla direcional";
		}
		else if(keyPressed==17 || keyPressed==18 || keyPressed==27)
		{
			especionalkey();
			document.getElementById("d1").innerHTML="Você pressionou uma tecla especial";
		}

	else{
		otherkey();
		document.getElementById("d1").innerHTML="Você pressionou uma outra tecla qualquer que ninguem liga👍";
	}
}

function aplhabetkey()
{
	img_image="alfabeto.png";
	add();

}
function nmuberkey()
{
	img_image="número.png";
	add();

}
function deircionalkey()
{
	img_image="direcional.png";
	add();

}
function espacionalkey()
{
	img_image="especial.png";
	add();

}
function otherkey()
{
	img_image="outras.png";
	add();
}
	
