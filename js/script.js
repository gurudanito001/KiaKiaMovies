

function moveCards (dir, category){
    /* let buttonContainer = document.getElementById(id)
    let cards = Array.from(buttonContainer.previousElementSibling.childNodes);
    console.log(buttonContainer.previousElementSibling.childNodes); */
    let cards = Array.from(document.querySelectorAll(`.${category}`));
    cards.forEach( card =>{
        let value = card.style.left.slice(0, -2);
        if(dir === "left"){
            card.style.left = (parseInt(value) - 374) + "px"
        }else{
            card.style.left = (parseInt(value) + 374) + "px"
        }
        
    })
}