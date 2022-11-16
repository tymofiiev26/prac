let chooseBtn = document.getElementById('choose');
let receiveBtn = document.getElementById('receive');
let heading = document.getElementsByTagName('h2')[0];
let nameInput = document.getElementsByClassName('contactform_name')[0];
let phoneInput = document.querySelector('.contactform_phone');
let mailInput= document.querySelectorAll('.contactform_mail')[0];
let modal  = document.querySelector('.modal');  
let closeBtn = document.querySelector('.close');
let text = document.getElementsByName('message')[0];

function hover(){
    heading.textContent = "Zeu"
}

chooseBtn.addEventListener('mouseenter', function(){
    heading.textContent = "Zeu"
});

chooseBtn.addEventListener('mouseleave', function(){
    heading.textContent = "BaCK!!!11"
});

receiveBtn.addEventListener('click', function(){
    modal.style.display = 'block';
});

closeBtn.addEventListener('click', function(){
    modal.style.display = 'none';
});

