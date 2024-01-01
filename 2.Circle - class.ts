
//Convert the UML diagram to Typescript class

class Circle {
  private radius: number = 1.0;
  private color: string = "red";

  constructor();
  constructor(radius: number);
  constructor(radius: number, color: string);

  constructor(radius?: number, color?: string) {
    if (radius !== undefined) {
      this.radius = radius;
    }

    if (color !== undefined) {
      this.color = color;
    }
  }

  getRadius(): number {
    return this.radius;
  }

  setRadius(radius: number): void {
    this.radius = radius;
  }

  getColor(): string {
    return this.color;
  }

  setColor(color: string): void {
    this.color = color;
  }

  toString(): string {
    return `Circle radius=${this.radius}
Circle color=${this.color} `;
  }

  getArea(): number {
    return (Math.PI * Math.pow(this.radius, 2));
  }

  getCircumference(): number {
    return 2 * Math.PI * this.radius;
  }
}


const myCircle = new Circle(); // Creates a circle for radius and color
console.log(myCircle.toString());

console.log(`Area: ${myCircle.getArea().toFixed(2)}`); // Outputs the area of the circle
console.log(`Circumference: ${myCircle.getCircumference().toFixed(2)}`); // Outputs the Circumference of the circle