let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains3 = document.getElementById('mountains3');
let mountains4 = document.getElementById('mountains4');
let river = document.getElementById('river');
let boat = document.getElementById('boat');
let nouvill = document.querySelector('.nouvill');
window.onscroll = function(){
    let value = scrollY;
    // console.log(value); to check the place of the scroll
    // now this can scroll left (stars move)
    stars.style.left = value + 'px';
    // i can control on left value because i give him a abolute element 
    // this can scroll down (moon move)
    moon.style.top = value * 4 + 'px';
    // to down speed i add *3
    // this can scroll down (mountains3 the farest mountain move)
    mountains3.style.top = value * 2 + 'px';
    // this can scroll down (mountains4 move)
    mountains4.style.top = value * 1.5 + 'px';
    // this can scroll down (river move)
    river.style.top = value + 'px';
    // this can scroll down (boat move)
    boat.style.top = value + 'px';
    // i want to move the boat to the right side (right side boat move)
    boat.style.left = value * 3 + 'px';
    
    // i want the nouvill word get bigger when i move 
    nouvill.style.fontSize = value + 'px';
    // i want when the word get bigger to the determine level stop
    // from inspect i get scrollY and get where i am stop for instance in 67 when i arrive to 67 just stop the fontSize 
    if(scrollY >= 67){
        nouvill.style.fontSize = 67 + 'px';
        // i want from it to stop 
        nouvill.style.position = 'fixed';
        // i face problem that the word follow me so i want to say if it arrive to the border just hide it
        // i know that place from inspect again scrollY for instance 478 or 414
        if(scrollY >= 414){
            nouvill.style.display = 'none';
        }else{
            nouvill.style.display = 'block';
        }

        // now i want to know when the moon hide for make the sky in the noon
        if(scrollY >= 84){
            // i want when the moon is hide the section background change 
            document.querySelector('.main').style.background = 'linear-gradient(#376281, #10001f)'
        }else{
            document.querySelector('.main').style.background = 'linear-gradient(#200016, #10001f)'
        }

    }

}