burger=document.querySelector('.burger')
navbar=document.querySelector('.navbar')
right=document.querySelector('.right')
left=document.querySelector('.left')

burger.addEventListener('click',()=>{
    right.classList.toggle('v-class');
    left.classList.toggle('v-class');
    navbar.classList.toggle('h-nav');
})