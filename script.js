let bagitem=[];
function addToBag(itemID){
    bagitem.push(itemID);
    bagCount();
}

function bagCount(){
    let bagCountElement=document.querySelector('.bagcount');
    bagCountElement.innerHTML=bagitem.length;
}