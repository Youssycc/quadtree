class Point {
  constructor(_x,_y) {
    this.x = _x
    this.y = _y
  }

  show() {
    fill("#22F005")
    noStroke()
    ellipse(this.x,this.y,6,6)
  }
}

class Rectangle {
  constructor(_x,_y,_w,_h,_color) {
    this.x = _x
    this.y = _y
    this.w = _w
    this.h = _h
    this.color = _color
  }

  contains(point) {
    return (point.x >= this.x-this.w)
        && (point.x <= this.x+this.w)
        && (point.y >= this.y-this.h)
        && (point.y <= this.y+this.h)
  }

  show() {
    stroke(0)
    strokeWeight(3)
    fill(this.color)
    rectMode(RADIUS)
    rect(this.x,this.y,this.w,this.h)
  }
}

class Quadtree {
  constructor(_boundary,_capacity) {
    this.boundary = _boundary //First rectangle
    this.capacity = _capacity //capacity in points before subdividing
    this.points = []
    this.divided = false
  }

  insert(point) {
    //function to insert a point in the quadtree

    if(!this.boundary.contains(point)) {
      return
    }

    if(this.points.length<this.capacity) {
      //if capacity not met
      this.points.push(point) //insert point in points
    } else {
      //else, divide into 4 sub rectangles
      if(!this.divided) {
        this.subdivide()
      }
      this.northwest.insert(point)
      this.northeast.insert(point)
      this.southwest.insert(point)
      this.southeast.insert(point)
    }
  }

  subdivide() {
    this.divided = true
    //top left rectangle
    let nwRect = new Rectangle(this.boundary.x-this.boundary.w/2,
      this.boundary.y-this.boundary.h/2,this.boundary.w/2,this.boundary.h/2,randomColor())
    this.northwest = new Quadtree(nwRect,this.capacity)
    //top right rectangle
    let neRect = new Rectangle(this.boundary.x+this.boundary.w/2,
      this.boundary.y-this.boundary.h/2,this.boundary.w/2,this.boundary.h/2,randomColor())
    this.northeast = new Quadtree(neRect,this.capacity)
    //bottom left rectangle
    let swRect = new Rectangle(this.boundary.x-this.boundary.w/2,
      this.boundary.y+this.boundary.h/2,this.boundary.w/2,this.boundary.h/2,randomColor())
    this.southwest = new Quadtree(swRect,this.capacity)
    //bottom right rectangle
    let seRect = new Rectangle(this.boundary.x+this.boundary.w/2,
      this.boundary.y+this.boundary.h/2,this.boundary.w/2,this.boundary.h/2,randomColor())
    this.southeast = new Quadtree(seRect,this.capacity)
  }

  show() {
    //showing this quadtree boundary
    this.boundary.show()

    //showing children nodes
    if (this.divided) {
      this.northeast.show()
      this.northwest.show()
      this.southeast.show()
      this.southwest.show()
    }
    //showing the points in the quadtree
    // for(let point of this.points) {
    //   point.show()
    // }
  }



}
