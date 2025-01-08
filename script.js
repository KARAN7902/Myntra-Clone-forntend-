let bagitem;
onLoad();
function onLoad() {
    let BagitemStr = localStorage.getItem('Bagitem');
    bagitem = BagitemStr ? JSON.parse(BagitemStr) : [];
    displayBagCount();
}

function addToBag(itemID) {
    bagitem.push(itemID);
    localStorage.setItem('Bagitem', JSON.stringify(bagitem));
    displayBagCount();
}

function displayBagCount() {
    let bagCountElement = document.querySelector('.bagcount');
    if (bagitem.length > 0) {
        bagCountElement.style.visibility = 'visible';

        bagCountElement.innerText = bagitem.length;
    } else {
        bagCountElement.style.visibility = 'hidden';
    }
}