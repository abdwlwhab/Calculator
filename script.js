const add = function (num1,num2)
{
    return num1+num2;
}
// =========================================
const subtract = function (num1,num2)
{
    return num1-num2;
}
// ==========================================
const multiply = function (num1,num2)
{
    return num1*num2;
}
// ==========================================
const divide = function (num1,num2)
{
    return num1/num2;
}
// ================================================================================
let cFun = function () {

    display.textContent = display.textContent.slice(0, -1);

};
// ================================================================================
function result(){
    try {
        display.textContent = eval(display.textContent)
    }
    catch(error){display.textContent='Error (:'}
}
// ================================================================================
let operator; 
let num1 ;
let num2 ;
// ===================================================================================
let display = document.querySelector('.display')
display.textContent=''

let button1 = document.querySelector('.btn1')
button1.addEventListener('click', ()=>display.textContent+='1')

let button2 = document.querySelector('.btn2')
button2.addEventListener('click', ()=>display.textContent+='2')

let button3 = document.querySelector('.btn3')
button3.addEventListener('click', ()=>display.textContent+='3')

let button4 = document.querySelector('.btn4')
button4.addEventListener('click', ()=>display.textContent+='4')

let button5 = document.querySelector('.btn5')
button5.addEventListener('click', ()=>display.textContent+='5')

let button6 = document.querySelector('.btn6')
button6.addEventListener('click', ()=>display.textContent+='6')

let button7 = document.querySelector('.btn7')
button7.addEventListener('click', ()=>display.textContent+='7')

let button8 = document.querySelector('.btn8')
button8.addEventListener('click', ()=>display.textContent+='8')

let button9 = document.querySelector('.btn9')
button9.addEventListener('click', ()=>display.textContent+='9')

let buttonAc = document.querySelector('.AC')
buttonAc.addEventListener('click', ()=>display.textContent='')

let buttonC = document.querySelector('.C')
buttonC.addEventListener('click', cFun)

let btn0 = document.querySelector('.btn0')
btn0.addEventListener('click', ()=>display.textContent+='0')

let btn = document.querySelector('.btnn')
btn.addEventListener('click', ()=>display.textContent+='/')


let btnx = document.querySelector('.btnx')
btnx.addEventListener('click', ()=>display.textContent+='*')


let btnm = document.querySelector('.btnm')
btnm.addEventListener('click', ()=>display.textContent+='-')


let btna = document.querySelector('.btna')
btna.addEventListener('click', ()=>display.textContent+='+')

let btne= document.querySelector('.btne')
btne.addEventListener('click', result)


let btnd = document.querySelector('.btnd')
btnd.addEventListener('click', ()=>display.textContent+='.')

