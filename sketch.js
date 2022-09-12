let palette = ["#003B6E","#EBBF4B","#DB442B","#F2F2F2"]
let qt

function setup() {
  createCanvas(400,400)
  background(51)
  let rect = new Rectangle(200,200,200,200,"#F2F2F2")
  qt = new Quadtree(rect,4)

  //adding points
  // for (let i = 0; i<200;i++) {
  //   let p = new Point(random(width),random(height))
  //   qt.insert(p)
  // }
  // qt.show()
  console.log(qt)
}

function draw() {
background(255)
if(mouseIsPressed) {
  qt.insert(new Point(mouseX,mouseY))
}
qt.show()
}
