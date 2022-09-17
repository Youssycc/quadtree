let paletteMondrian = ["#003B6E","#EBBF4B","#DB442B","#F2F2F2", "#BCC3CB", "#000000"]
let qt

function setup() {
  createCanvas(700,700)
  background(51)
  let rect = new Rectangle(width/2,height/2,width/2,height/2,"#F2F2F2")
  qt = new Quadtree(rect,4)
}

//draw the quadtree each frame
function draw() {
background("#F2F2F2")
qt.show()
}

//insert points in quadtree at mouse position when dragging
function mouseDragged() {
  qt.insert(new Point(mouseX,mouseY))
}

function keyPressed() {
  //save canvas as .png when any key is pressed
  saveCanvas("mondrian","png")
}

//function that picks randomly from the Mondrian palette colors
//probabilities are assigned to each color
function randomColor() {
  let r = random()
  let c
  if (r<1/20) {
    c = paletteMondrian[0]
  } else if (r <4/20) {
    c = paletteMondrian[1]
  } else if (r<6/20 ) {
    c = paletteMondrian[2]
  } else if (r<13/20) {
    c = paletteMondrian[3]
  } else if (r<18/20) {
    c = paletteMondrian[4]
  } else {
    c  = paletteMondrian[5]
  }
  return c
}
