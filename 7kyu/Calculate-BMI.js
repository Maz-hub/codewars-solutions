/*
Description:
Write function bmi that calculates body mass index (bmi = weight / height2).

if bmi <= 18.5 return "Underweight"

if bmi <= 25.0 return "Normal"

if bmi <= 30.0 return "Overweight"

if bmi > 30 return "Obese"
*/

// My Solution:
function bmi(weight, height) {
  let value = weight/(height*height);

  return value <=18.5 ? 'Underweight' 
    : value <=25.0 ?  'Normal' 
    : value <= 30.0 ? 'Overweight' 
    : 'Obese'  
}
