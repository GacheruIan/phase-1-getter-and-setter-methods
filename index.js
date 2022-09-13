class Circle{
    constructor(radius){
        this.radius = radius;
    }
    get diameter(){
        return this.radius*2
    }
    get circumference(){
        return Math.PI * this.radius*2
    }
    get area(){
        return Math.PI*this.radius*this.radius
    }

    set diameter(diameter){

        this.radius = diameter / 2;
      
    }
    set area(area) {
        this.radius = Math.sqrt(area / Math.PI);
      }
      set circumference(circumference) {
        this.radius = circumference / (2 * Math.PI);
      }
}
const circle = new Circle(10)
circle.diameter;
circle.radius = 20
circle.diameter;
circle.radius = 30
console.log(circle.diameter);

