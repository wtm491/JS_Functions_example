let radiusCircle = 15;
let sideSquare = 10;
let baseTriangle = 5;
let heightTriangle = 7;

function getAreaOfCircle(radius) {
  let area = 0;
  area = 3.14 * (radius * radius);
  alert("The area of the circle is " + area);
  return area;

}

function getCircumferenceOfCircle(radius){
  let circumference = 0;
  circumference = 2 * 3.14 * radius;
   alert("The circumference of the circle is  " + circumference);
  return circumference;

}

function getAreaOfSquare(side){
  let area = 0;
  area = side * side;
  alert("The area of the square is " + area);
  return area;

}

function getAreaOfTriangle(base, height){
  let area = 0;
  area = (base * height) / 2;
  alert("The area of the triangle is " + area);
  return area;

}


getAreaOfCircle(radiusCircle);
getCircumferenceOfCircle(radiusCircle);
getAreaOfSquare(sideSquare);
getAreaOfTriangle(baseTriangle, heightTriangle);
