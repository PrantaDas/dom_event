function makeRed(){
    document.body.style.backgroundColor='red';
}

function makeBlue(){
    document.body.style.backgroundColor='blue';
}

const blueButton=document.getElementById('blue-button');
blueButton.onclick=makeBlue;

const greenButton=document.getElementById('green-button');
greenButton.onclick=function(){
    document.body.style.backgroundColor='green';
}

const orangeButton=document.getElementById('orange-button');
orangeButton.addEventListener('click',makeOrange);


function makeOrange(){
    document.body.style.backgroundColor='orange';
}

const pinkButton=document.getElementById('pink_button');
pinkButton.addEventListener('click', function(){
    document.body.style.backgroundColor='hotpink';
})

document.getElementById('lb-button').addEventListener('click',function (){
    document.body.style.backgroundColor='lightblue';
})