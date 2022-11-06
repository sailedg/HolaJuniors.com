let btnScroll = document.querySelector('.scroll-btn');

//Scroll smooth and default url
btnScroll.addEventListener('click', clickHandler)
function clickHandler(e){
    const href = this.getAttribute("href")
    const itemHTML = document.querySelector(href); 
    let moveTo = itemHTML.offsetTop; 
    window.scrollTo({ top: moveTo, behavior: "smooth" }) 
    e.preventDefault();
}

