class Polygon {
  constructor(arr) {
    this.sides = arr
  }
  
  get countSides() {
    return this.sides.length
  }

  get perimeter() {
    return this.sides.reduce((a, c) => a + c)
  }
}

class Triangle extends Polygon {
  get isValid() {
    let a = this.sides[0];
    let b = this.sides[1];
    let c = this.sides[2];
    return a+b > c && b+c > a && a+c > b
  }
}

class Square extends Polygon {
  get isValid() {
    let a = this.sides[0];
    let b = this.sides[1];
    let c = this.sides[2];
    let d = this.sides[3];
    return a === b && b === c && c ===d
  }

  get area() {
    return this.sides[0]**2
  }
}