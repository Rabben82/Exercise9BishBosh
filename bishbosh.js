let divisionTal1;
let divisionTal2;
let loopstart;

const btn1 = document.querySelector('#tal1');
const btn2 = document.querySelector('#tal2');
const btn3 = document.querySelector('#loop');
const formBtn = document.querySelector('#formBtn');
const outputDiv = document.querySelector('#output'); 


btn1.addEventListener('change', function () {
  divisionTal1 = parseInt(btn1.value);
});

btn2.addEventListener('change', function () {
  divisionTal2 = parseInt(btn2.value);
});

btn3.addEventListener('change', function () {
  loopstart = parseInt(btn3.value);
});

formBtn.addEventListener('click', function () {
  if (divisionTal1 !== undefined && divisionTal2 !== undefined && loopstart !== undefined) {
    BishBosh(divisionTal1, divisionTal2, loopstart);
  } else {
    outputDiv.innerHTML = 'You need to enter values for all fields.';
  }
});

function BishBosh(num1, num2, num3) {
  let output = '';
  for (let i = 1; i <= num3; i++) {
    if (i % num1 === 0 && i % num2 === 0) {
      output += 'Bish Bosh<br>';
    } else if (i % num1 === 0) {
      output += 'Bish<br>';
    } else if (i % num2 === 0) {
      output += 'Bosh<br>';
    } else {
      output += i + '<br>';
    }
  }
  outputDiv.innerHTML = output; 
}
//Uppgift 1
/* for (let i=1; i < 100; i++){
    
    if(i %3==0 && i %4==0)
    {
        console.log('Bish Bosh');
    }
    else if(i %3==0)
    {
        console.log('Bish');
    }
    else if(i %4==0)
    {
        console.log('Bosh');
    }
    
    else
    {
        console.log(i);
    }
} */