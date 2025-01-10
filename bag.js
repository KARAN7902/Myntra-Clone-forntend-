//const items=require('./index.js');
const convenience_fees=99;
//console.log(items);
let bagItemsObjet;
//console.log(items1)

onload();
function onload() {
    loadBagItemsObjet();
    displayBagItem();
    displayBagFinalBill();
}

function displayBagFinalBill(){
    let BagFinalBill=document.querySelector('.bill-details');
    let TotalItems=bagItemsObjet.length;
    let TotalMrp=0;
    let TotalDiscount=0;
    let FinalAmont=0;
    bagItemsObjet.forEach(bagItem=>{
        TotalMrp+=bagItem.origional_price;
        TotalDiscount+=bagItem.origional_price-bagItem.final_price;
    })
    FinalAmont+=TotalMrp+convenience_fees-TotalDiscount;
    BagFinalBill.innerHTML=`
    <div class="final">price details final (${TotalItems} Items)</div>
                <div class="bill">
                    <div class="left-part-fnl-bill">
                        <div class="total-mrp">total <span>MRP</span></div>
                        <div class="discount-on-price">discount on <span>MRP</span></div>
                        <div class="convi-fee">convenience fee</div>
                    </div>
                    <div class="right-part-fnl-bill">
                        <div class="mrp">₹ ${TotalMrp}</div>
                        <div class="discount">-₹ ${TotalDiscount}</div>
                        <div class="fee">₹ 99</div>
                    </div>
                </div>
                <div class="hr"></div>
                <div class="total-amt">
                    <div class="left-hr">
                        <div class="l">
                            total ammount
                        </div>
                    </div>
                    <div class="right-hr">
                        <div class="r">₹ ${FinalAmont}</div>
                    </div>
                </div>`;
}
function loadBagItemsObjet() {
    bagItemsObjet = bagitem.map(itemId => {
        
        for (let i = 0; i < items.length; i++) {
        if (itemId == items[i].id) {
                  return items[i];
              }
          }
  })
  // console.log(bagitem);
}
//console.log(bagItemsObjet);

function displayBagItem() {
    let containerElement = document.querySelector('.bag-items-container');
    let innerHTML = '';
    bagItemsObjet.forEach(bagitem => {
        innerHTML += generateItemHtml(bagitem);
    });
    containerElement.innerHTML = innerHTML;
}

function removeBagItem(itemId){
    bagitem = bagitem.filter(bagItemId=>bagItemId!=itemId);
    localStorage.setItem('Bagitem', JSON.stringify(bagitem));
    loadBagItemsObjet();
    displayBagCount();
    displayBagItem();
    displayBagFinalBill();
}

function generateItemHtml(item) {
    return `<div class="bag-item-container">
<div class="item">

    <div class="item-left-part">
        <img src="${item.image}" alt="" srcset="">
    </div>
    <div class="item-right-part">
        <button class="cancel-btn"onclick=" removeBagItem(${item.id})">X</button>
        <div class="details">
            <div class="item-company">${item.company}</div>
            <div class="item-name">${item.item_name}</div>
            <div class="price">
                <span class="final-price">${item.final_price}</span>
                <span class="origional-price">${item.origional_price}</span>
                <span class="item-discount">${item.discount_price}% OFF</span>
                <div class="return-details">${item.return_period}days return policy</div>
                <div class="delivery-details">${item.delivery_date}</div>
            </div>
        </div>
    </div>
</div>
</div> `;
}