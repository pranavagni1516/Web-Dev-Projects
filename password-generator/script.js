// const inputSlider = document.querySelector("[data-lengthSlider]");
// const lengthNumber=document.querySelector("[data-lengthNumber]");
// const passwordDisplay=document.querySelector("[dataPasswordDisplay]");
// const copyBtn=document.querySelector("[data-copy]");
// const copyMsg=document.querySelector("[data-copyMsg]");
// const uppercaseCheck = document.querySelector("#uppercase");
// const lowercaseCheck = document.querySelector("#lowercase");
// const numbersCheck = document.querySelector("#numbers");
// const symbolsCheck = document.querySelector("#symbols");
// const indicator = document.querySelector("[data-indicator]");
// const generateBtn = document.querySelector(".Generate-button");
// const allCheckBox = document.querySelectorAll("input[type=checkbox]");
// const symbols = '~`!@#$%^&*()_-+={[}]|:;"<,>.?/';

// let password = "";
// let passwordLength = 10;
// let checkcount = 0;
// handleSlider();
// function handleSlider(){
//     inputSlider.value = passwordLength;
//     lengthNumber.innerText = passwordLength;
// }

// function setIndicator(color){
//     indicator.style.backgroundColor = color;
// }

// function getRndInt(min,max){
//     return Math.floor(Math.random()*(max-min) + min);
// }

// function generateRandomNumber(){
//     return getRndInt(0,9);
// }

// function generateLowerCase(){
//     return String.fromCharCode(getRndInt(97,123));
// }

// function generateUpperCase(){
//     return String.fromCharCode(getRndInt(65,91));
// }
// function generateSymbols(){
//     const randnum = getRndInt(0,symbols.length);
//     return symbols.charAt[randnum];
// }
// function shufflePass(array){
//     // Fisher Yates Method 
//     for (let i = array.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * (i + 1));
//         const temp = array[i];
//         array[i] = array[j];
//         array[j] = temp;
//       }
//     let str = "";
//     array.forEach((el) => (str += el));
//     return str;


// }
// function calcStrength() {
//     let hasUpper = false;
//     let hasLower = false;
//     let hasNum = false;
//     let hasSym = false;
//     if (uppercaseCheck.checked) hasUpper = true;
//     if (lowercaseCheck.checked) hasLower = true;
//     if (numbersCheck.checked) hasNum = true;
//     if (symbolsCheck.checked) hasSym = true;
  
//     if (hasUpper && hasLower && (hasNum || hasSym) && passwordLength >= 8) {
//       setIndicator("#0f0");
//     } else if (
//       (hasLower || hasUpper) &&
//       (hasNum || hasSym) &&
//       passwordLength >= 6
//     ) {
//       setIndicator("#ff0");
//     } else {
//       setIndicator("#f00");
//     }
// }

// async function copyContent(){
//     try{
//         await navigator.clipboard.writeText(passwordDisplay.value)
//         copyMsg.innerText= "copied"; 
//     }
//     catch(e){
//         copyMsg.innerText= "Failed"; 
//     }
//     copyMsg.classList.add("active");

//     setTimeout(() =>{
//         copyBtn.classList.remove("active");
//     },2000);
// }

// inputSlider.addEventListener('input',(e)=>{
//     passwordLength = e.target.value;
//     handleSlider();
// })

// copyBtn.addEventListener('click',()=>{
//     if(passwordDisplay.length)
//     copyContent();
// })

// function handlecheck(){
//     checkcount=0;
//     allCheckBox.forEach((checkbox) => {
//         if(checkbox.checked)
//             checkcount++;
//     });

//     if(checkcount > passwordLength){
//         passwordLength = checkcount;
//         handleSlider();
//     }
// }

// allCheckBox.forEach((checkbox)=>{
//     checkbox.addEventListener('change',handlecheck);
// })

// generateBtn.addEventListener('click',()=>{
//     if(checkcount==0)
//         return;
//     if(passwordLength<checkcount){
//         passwordLength = checkcount;
//         handleSlider();
//     }

// console.log("starting the journey");
// password = "";
// let funcarr=[];
// // if(uppercaseCheck.checked){
// //     password += generateUpperCase();
// // }
// // if(lowercaseCheck.checked){
// //     password += generateLowerCase();
// // }
// // if(numbersCheck.checked){
// //     password += generateRandomNumber();
// // }
// // if(symbols.checked){
// //     password += generateSymbols();
// // }

// if(uppercaseCheck.checked)
//     funcarr.push(generateUpperCase);
// if(lowercaseCheck.checked)
//     funcarr.push(generateLowerCase);
// if(numbersCheck.checked)
//     funcarr.push(generateRandomNumber);
// if(symbolsCheck.checked)
//     funcarr.push(generateSymbols);

// for(let i=0;i<funcarr.length;i++){
//     password += funcarr[i]();
// }
// console.log("compulsory");
// for(let i=0;i<passwordLength-funcarr.length;i++){
//     let randInd = getRndInt(0,funcarr.length);
//     console.log("randIndex" + randInd);
//     password += funcarr[randInd]();
// }
// console.log("remainging");
// password = shufflePass(Array.from(password));

// passwordDisplay.value = password;
// console.log("display");
// calcStrength();

// });

const inputSlider = document.querySelector("[data-lengthSlider]");
const lengthDisplay = document.querySelector("[data-lengthNumber]");

const passwordDisplay = document.querySelector("[datapasswordDisplay]");
const copyBtn = document.querySelector("[data-copy]");
const copyMsg = document.querySelector("[data-copyMsg]");
const uppercaseCheck = document.querySelector("#uppercase");
const lowercaseCheck = document.querySelector("#lowercase");
const numbersCheck = document.querySelector("#numbers");
const symbolsCheck = document.querySelector("#symbols");
const indicator = document.querySelector("[data-indicator]");
const generateBtn = document.querySelector(".Generate-button");
const allCheckBox = document.querySelectorAll("input[type=checkbox]");
const symbols = '~`!@#$%^&*()_-+={[}]|:;"<,>.?/';


//initially
let password = "";
let passwordLength = 10;
let checkCount = 0;
handleSlider();
//ste strength circle color to grey
setIndicator("#ccc")

//set passwordLength
function handleSlider() {
    inputSlider.value = passwordLength;
    lengthDisplay.innerText = passwordLength;
    //or kuch bhi karna chahiye ? - HW
    const min = inputSlider.min;
    const max = inputSlider.max;

    inputSlider.style.backgroundSize = ((passwordLength - min)*100/(max-min)) + "% 100%";
}

function setIndicator(color) {
    indicator.style.backgroundColor = color;
    //shadow - HW
    indicator.style.boxShadow = `0px 0px 12px 1px ${color}`;

}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function generateRandomNumber() {
    return getRndInteger(0,9);
}

function generateLowerCase() {  
       return String.fromCharCode(getRndInteger(97,123))
}

function generateUpperCase() {  
    return String.fromCharCode(getRndInteger(65,91))
}

function generateSymbol() {
    const randNum = getRndInteger(0, symbols.length);
    return symbols.charAt(randNum);
}

function calcStrength() {
    let hasUpper = false;
    let hasLower = false;
    let hasNum = false;
    let hasSym = false;
    if (uppercaseCheck.checked) hasUpper = true;
    if (lowercaseCheck.checked) hasLower = true;
    if (numbersCheck.checked) hasNum = true;
    if (symbolsCheck.checked) hasSym = true;
  
    if (hasUpper && hasLower && (hasNum || hasSym) && passwordLength >= 8) {
      setIndicator("#0f0");
    } else if (
      (hasLower || hasUpper) &&
      (hasNum || hasSym) &&
      passwordLength >= 6
    ) {
      setIndicator("#ff0");
    } else {
      setIndicator("#f00");
    }
}

async function copyContent() {
    try {
        await navigator.clipboard.writeText(passwordDisplay.value);
        copyMsg.innerText = "copied";
    }
    catch(e) {
        copyMsg.innerText = "Failed";
    }
    //to make copy wala span visible
    copyMsg.classList.add("active");

    setTimeout( () => {
        copyMsg.classList.remove("active");
    },2000);

}

function shufflePassword(array) {
    //Fisher Yates Method
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    let str = "";
    array.forEach((el) => (str += el));
    return str;
}

function handleCheckBoxChange() {
    checkCount = 0;
    allCheckBox.forEach( (checkbox) => {
        if(checkbox.checked)
            checkCount++;
    });

    //special condition
    if(passwordLength < checkCount ) {
        passwordLength = checkCount;
        handleSlider();
    }
}

allCheckBox.forEach( (checkbox) => {
    checkbox.addEventListener('change', handleCheckBoxChange);
})


inputSlider.addEventListener('input', (e) => {
    passwordLength = e.target.value;
    handleSlider();
})


copyBtn.addEventListener('click', () => {
    if(passwordDisplay.value)
        copyContent();
})

generateBtn.addEventListener('click', () => {
    //none of the checkbox are selected

    if(checkCount == 0) 
        return;

    if(passwordLength < checkCount) {
        passwordLength = checkCount;
        handleSlider();
    }

    // let's start the jouney to find new password
    console.log("Starting the Journey");
    //remove old password
    password = "";

    //let's put the stuff mentioned by checkboxes

    // if(uppercaseCheck.checked) {
    //     password += generateUpperCase();
    // }

    // if(lowercaseCheck.checked) {
    //     password += generateLowerCase();
    // }

    // if(numbersCheck.checked) {
    //     password += generateRandomNumber();
    // }

    // if(symbolsCheck.checked) {
    //     password += generateSymbol();
    // }

    let funcArr = [];

    if(uppercaseCheck.checked)
        funcArr.push(generateUpperCase);

    if(lowercaseCheck.checked)
        funcArr.push(generateLowerCase);

    if(numbersCheck.checked)
        funcArr.push(generateRandomNumber);

    if(symbolsCheck.checked)
        funcArr.push(generateSymbol);

    //compulsory addition
    for(let i=0; i<funcArr.length; i++) {
        password += funcArr[i]();
    }
    console.log("COmpulsory adddition done");

    //remaining adddition
    for(let i=0; i<passwordLength-funcArr.length; i++) {
        let randIndex = getRndInteger(0 , funcArr.length);
        console.log("randIndex" + randIndex);
        password += funcArr[randIndex]();
    }
    console.log("Remaining adddition done");
    //shuffle the password
    password = shufflePassword(Array.from(password));
    console.log("Shuffling done");
    //show in UI
    passwordDisplay.value = password;
    console.log("UI adddition done");
    //calculate strength
    calcStrength();
});