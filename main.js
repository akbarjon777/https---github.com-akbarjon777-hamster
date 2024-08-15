let a=8;
a=5;

var d = 6;
d=99;

const o = 9;
// o = 10;

//////////////////////////////////////////////////////////////
// alert - ogohlantirish  
// confirm - tasdiqlash 
// prompt - so'rash 
// prompt('yashash manzilingizni kiriting');
// confirm('rostdan ham Namanganda yashaysizmi?');
// alert('Namangan ahli uchun 17-dan 22-gacha selopasno');

/////////////////////////////////////////////////////////
// a=true;

// String, Number, Character, Boolean, null-hech narsa, undefined-aniqemas

///////////////////////////////////////////////////

// let f;
// console.log(f);  // undefined

// f=79;
// console.log(f); // 79
/////////////////////////////////////////////////////////////////////

// let userLocation = prompt('yashash manzilingizni kiriting');

// console.log(userLocation);

////////////////////////////////////////////////////////////////////

// let answer = confirm('Rostdan ham '+ userLocation +'da yashaysizmi?');

// console.log(answer);

/////////////////////////////////////////////////////////////////////

// Htmldan teglarni chaqirib olish 



// let myH1 = document.getElementById('content');
// let myH1 = document.getElementsByClassName('hi')[1];

// let myH1=  document.getElementsByTagName('h1')[2];
// let myh1= document.getElementsByName('bye')[0];
// myh1.style.color = 'red';



// console.log(myH1);
//////////////////////////////////////////////////////////////////////

let myH4=document.getElementById ('content3');
console.log(myH4);

let myH1 = document.getElementsByName ('bye')[2];
console.log(myH1);

let myButton = document.getElementsByClassName('hi')[3];
console.log(myButton);

let myDiv = document.getElementsByTagName('div')[0];
console.log(myDiv);
myDiv.style.transform = 'rotate(-25deg)';
myDiv.style.borderRadius = '120px';
////////////////////////////////////////////////////////////////////////

let h2 = document.querySelectorAll('div :nth-child(2)');  // shu shatni qanoatlantiruvchi hamma elementlarni bitta kollksiyada olib keladi
console.log(h2);

let myH2 = document.querySelector('h2'); // shu shatni qanoatlantiruvchi birinchi elementlarni
console.log(myH2);

//////////////////////////////////////////////////////////////////////////

let ourH1 = document.querySelector('h1'); 
ourH1.style.color = 'blue';

let myButton1=document.querySelector('button');
myButton1.style.backgroundColor ='red';

myButton1.style.color = 'yellow';

/////////////////////////////////////////////////////////////////////
// console.log(ourH1.innerText);
// console.log(myButton1.innerText);

// ourH1.innerText = 'Bye earth!'


myH2.innerText = 'Hamster is listing';
myH2.style.color = 'tomato';

myH4.innerText = 'PHD doctor! is me'
myH4.style.color = 'crimson';

myButton1.innerText = 'WELCOME TO USA';
myButton.style.color = 'black';

// myDiv.innerText = 'My life my rules';

/////////////////////////////////////////////////////

console.log(ourH1.innerText);
console.log(ourH1.innerHTML);
console.log(ourH1.outerHTML);

// ourH1.innerHTML = '<sub>Hello</sub> <strike>World</strike> <input type="checkbox">';
ourH1.outerHTML = '<textarea></textarea>'

function hallo(){
    myButton1.innerText = 'You has been selected!'
}