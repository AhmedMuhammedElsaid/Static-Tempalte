let home=document.querySelector('.home');
let h1=document.getElementById('header-one');
let p=document.getElementById('header-p');
let home1=document.getElementById('home1');
document.querySelector('.btn-start').onclick= function(event)
{
    home.setAttribute('style','background-image: url(images/background/background2.webp)');
}
document.querySelector('.btn-learn').onclick=function(event) 
{
    h1.setAttribute('style','color:#6195FF;');
    p.innerHTML="Warning Mina ,This is a Sensitive Content ,It's Not Allowed To Get Close.Better To You To Stay Away";
    let btn3=document.createElement('button');
    btn3.setAttribute('id','btn3');
    btn3.setAttribute('class','btn btn-start hover-opacity');
    btn3.innerText='Button Four';
    home1.appendChild(btn3);
}
