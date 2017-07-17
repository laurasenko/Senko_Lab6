var fahrenheit;
var celsius;

function convertTemp (temp, type) {

      var fahrenheit = (temp * 1.8) + 32;
      var celsius = (temp - 32) * 5/9;

  if (type === 'F') {
   console.log(temp + " degrees C is " + fahrenheit + " " + type);
} else if (type === 'C') {
  console.log(temp + " degrees F is " + celsius + " " + type);
} else {
  console.log("error");
}
}

convertTemp(212, "C");
convertTemp(32, "C");
convertTemp(65, "C");
convertTemp(100, "F");
convertTemp(-40, "F");
