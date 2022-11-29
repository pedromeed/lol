let x = 50;
let x2 = 550;
let y = 550;
let y2 = 10;


function setup() {
 createCanvas(700, 600);
 background(255,255,0);
}

function draw() {
 background(50,05,)
 noFill();
 stroke('#85FFC7');
strokeWeight(30);
rect(x, 300, 100, 100);
   
 fill("black");
 stroke('#70e000');
  strokeWeight(30)
 rect(50, y, 100, 100);
  
  fill("#85FFC7");
 stroke('#70e000');
  strokeWeight(30)
 rect(550, y, 100, 100);

noFill();
 stroke('#85FFC7');
strokeWeight(30);
 rect(x, y, 100);
  
  fill ("#70e000");
  stroke ("black");
   strokeWeight(30)
 rect(300, y2, 100, 100);
  
   noFill ();
  stroke ("black");
   strokeWeight(30)
 rect(x, y2, 100, 100);
  
   noFill ();
  stroke ("#85FFC7");
   strokeWeight(30)
 rect(x2, 300, 100, 100);
  
   noFill ();
  stroke ("#85FFC7");
   strokeWeight(30)
 rect(x2, y, 100, 100);
  
  noFill ();
  stroke ("#85FFC7");
   strokeWeight(30)
 rect(x2, y2, 100, 100);
  
  noFill ();
  stroke ("#80ffdb");
   strokeWeight(30)
 rect(x, y2, 100, 100);
  
  fill ("#70e000");
  stroke ("black");
   strokeWeight(30)
 rect(50, y2, 100, 100);
  
  fill ("#70e000")
  stroke ("black");
   strokeWeight(30)
 rect(550, y2, 100, 100);
  
  
  fill ("#70e000");
  stroke ("black");
   strokeWeight(30)
 rect(300, y , 100, 100);
  
  
  
  
  x=x+2;
  x2=x2-2;
  y=y-2;
  y2=y2+2;
  
  }