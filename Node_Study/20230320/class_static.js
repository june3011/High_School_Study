// 선언문
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  // static property
  static typeName = "Rectangle";

  // static method
  static info() {
    return `Type ${Rectangle.typeName}`;
  }

  // instance method
  getArea() {
    return this.width * this.height;
  }
}

const r = new Rectangle(10, 10);
console.log(r.getArea()); // call instance method
console.log(Rectangle.typeName);
console.log(Rectangle.info()); // call static(Class) method
