let palette = ["#003B6E","#EBBF4B","#DB442B","#F2F2F2", "#BCC3CB", "#000000"]
//white 7/20, gray 5/20, black 2/20, red 2/20, yellow 3/20, blue 1/20
let qt

function setup() {
  createCanvas(800,800)
  background(51)
  let rect = new Rectangle(width/2,height/2,width/2,height/2,"#F2F2F2")
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
background("#F2F2F2")
// if(mouseIsPressed) {
//   qt.insert(new Point(mouseX,mouseY))
// }
qt.show()
}

function mouseDragged() {
  qt.insert(new Point(mouseX,mouseY))

}

function randomColor() {
  let r = random()
  let c
  if (r<1/20) {
    c = palette[0]
  } else if (r <4/20) {
    c = palette[1]
  } else if (r<6/20 ) {
    c = palette[2]
  } else if (r<13/20) {
    c = palette[3]
  } else if (r<18/20) {
    c = palette[4]
  } else {
    c  = palette[5]
  }
  return c
}
