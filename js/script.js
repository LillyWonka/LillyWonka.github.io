let subscribeBtn = document.querySelector('.subscribe');
subscribeBtn.addEventListener('click',openSubscribe);
function openSubscribe(){
    document.querySelector(".subscribeField").style.display = "block";
    document.querySelector(".overlay").style.display = "block";
}

let closeBtn = document.querySelector('.closeSubscribe');
closeBtn.addEventListener('click',closeSubscribe);
function closeSubscribe(){
    document.querySelector(".subscribeField").style.display = "none";
    document.querySelector(".overlay").style.display = "none";
}

let subscribeButton=document.querySelector('.subscribe-everywhere');
if (subscribeButton){
subscribeButton.addEventListener('click', openSubscribe);
}
let scroll=document.querySelector('a.scroll');
if (scroll){
scroll.addEventListener('click', scrollDown)
function scrollDown() {
    scroll.scrollIntoView({
        block: 'start',
        behavior: 'smooth'
})
}
}
