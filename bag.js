const items=require('./index.js');

console.log(items);
//let bagItemsObjet;
//console.log(items1)

// onload();
// function onload() {
//     loadBagItemsObjet();
//     displayBagItem();
// }

// function loadBagItemsObjet() {
//       bagItemsObjet = bagitem.map(itemId => {
          
//             for (let i = 0; i < items.length; i++) {
//                 if (itemId == items[i].id) {
//                     return items[i];
//                 }
//             }
//     })
//     // console.log(bagitem);
// }
// function loadBagItemsObjet() {
//     bagItemsObjet = bagitem.map(itemId => {
        
//         for (let i = 0; i < items1.length; i++) {
//         if (itemId == items1[i].id) {
//                   return items1[i];
//               }
//           }
//   })
//   // console.log(bagitem);
// }
//console.log(bagItemsObjet);

// function displayBagItem() {
//     let containerElement = document.querySelector('.bag-items-container');
//     let innerHTML = '';
//     bagItemsObjet.forEach(bagitem => {
//         innerHTML += generateItemHtml(bagitem);
//     });
//     containerElement.innerHTML = innerHTML;
// }



// function generateItemHtml(item) {
//     return `<div class="bag-item-container">
// <div class="item">

//     <div class="item-left-part">
//         <img src="${item.image}" alt="" srcset="">
//     </div>
//     <div class="item-right-part">
//         <button class="cancel-btn"><i class="fa-solid fa-xmark"></i></button>
//         <div class="details">
//             <div class="item-company">${item.company}</div>
//             <div class="item-name">${item.item_name}</div>
//             <div class="price">
//                 <span class="final-price">${item.final_price}</span>
//                 <span class="origional-price">${item.origional_price}</span>
//                 <span class="item-discount">${item.discount_price}% OFF</span>
//                 <div class="return-details">${item.return_period}days return policy</div>
//                 <div class="delivery-details">${item.delivery_date}</div>
//             </div>
//         </div>
//     </div>
// </div>
// </div> `;
// }