let pointer = document.querySelector('.cursor');
window.addEventListener('mousemove',(event)=>{
    let Xpos =  event.clientX;
    let Ypos = event.clientY;

    pointer.style.top = Ypos+'px';
    pointer.style.left = Xpos+'px';
   
    console.log(Xpos,Ypos)
})