let w=300,h=300; //scale 100 
let img=[];
let m;
let angle=0;
let q=1;
let mn=-100;
let mx=100;
let z=0;
let canvas;

function setup() {  
	canvas=createCanvas(w,h);
	canvas.parent('canvas');
	for(let i=0;i<100;i++){
		img[i] = loadImage("data/picture1/Movie"+q+".jpg");
	console.log(q);
		q++;
	}
}

function draw() {
  background(200);
  if(mouseX>0 && mouseX<w){
  	m=map(mouseX,z,w,mn,mx);
	/*if(m>=mn && m<=z){
		angle=PI;
	}else if(m>z && m<=mx){
		angle=0;
	}*/
  }
  createTarget();
}

function createTarget(){
	for(let i=0; i<100; i++){
		if((m>-(100-i) && m<=-(99-i))){
		push();
			scale(-1,1);//画面を反転させる。
			image(img[i], -width, 0,w,h); 
		pop();
		}else if(m<(100-i) && m>=(99-i)){
		push();
			image(img[i], 0, 0,w,h); 
		pop();
		}
	}
}
