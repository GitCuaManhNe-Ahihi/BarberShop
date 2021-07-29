const menuBtn = document.querySelector('.toggle2')
const menu = document.querySelector('.toggle')
const Close =document.querySelector('#close')
menuBtn.addEventListener('click',()=>
{  
    menu.classList.toggle('active')
})
Close .addEventListener('click',()=>
{     menu.classList.remove('active')
   
})
