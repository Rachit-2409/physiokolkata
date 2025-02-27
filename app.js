let pointer = document.querySelector('.cursor');
window.addEventListener('mousemove',(event)=>{
    let Xpos =  event.clientX;
    let Ypos = event.clientY;
    // pointer.style.top = Ypos+'px';
    // pointer.style.left = Xpos+'px';
   
  pointer.animate(
    {
        left : `${Xpos}px`,
        top : `${Ypos}px`
    }
    , {
        duration : 1000,
        fill: "forwards"
    }
  )
   
    console.log(Xpos,Ypos)
})


