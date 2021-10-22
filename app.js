const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkNumber = document.querySelector("#check-number");
const outputBox = document.querySelector("#output-box");

function compareValue(sum,luckyNumber){
    if(sum % luckyNumber === 0){
        console.log("----------------")
        outputBox.innerText = "Your Birthday is Lucky";
    }else{
        outputBox.innerText = "Not lucky";
    }
}
function checkNumberIsLucky(){
    const dob = dateOfBirth.value;
    const sum = calculateSum(dob);
    if(sum&&dob){
        console.log("------------00000000----")
        compareValue(sum,luckyNumber.value);
    }else{
        outputBox.innerText = "Please enter both fields"; 
    }
    
}
function calculateSum(dob){
    dob = dob.replaceAll("-","");
    let sum = 0;
    for(let i=0;i<dob.length;i++){
        sum = sum + Number(sum + dob.charAt(i));
    }
    return sum;
}
checkNumber.addEventListener("click",checkNumberIsLucky)

