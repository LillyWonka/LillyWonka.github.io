let calc = document.getElementById("submitBMI");
calc.addEventListener('click',getBMI);
function getBMI (){
    let weight=+document.getElementById('weight').value;
    let height=+document.getElementById('height').value/100;
    let bmi= (weight /(height*height)).toFixed(1);
    let result;
if ((bmi!=Infinity)&&(bmi!=0)){
    if (bmi < 18.5) {
        result = "Oops. Your BMI is " + bmi + ". It means you're underweight.";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        result = "Your BMI is " + bmi +", you have a normal weight. Good for you!";
    } else if (bmi > 25){
        result = "Oops! Your BMI is " + bmi + ", so you are overweight.";
    }else{
        result = "Pal, told you to enter your weight and height. Don't play games with me"
    }
} else{
    result="Hmmm...Seems that you've forgotten something"
}
document.getElementById("showResult").innerText = result;
}