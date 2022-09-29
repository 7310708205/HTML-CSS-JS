class circle {
    constructor(radius) {
        this.radius = radius;
    }
    getArea() {
        return Math.PI*this.radius*this.radius
    }
    getPerimeter() {
        return 2*Math.PI*this.radius;
    }
}
let r = new circle(5)
console.log(r.getArea())
console.log(r.getPerimeter())
