let itemsContainerElement = document.querySelector('.items-container');
let innerHtml = '';
let items = [
    {
        id: '001',
        image: '/images/1.jpg',
        company: 'Carlton London',
        rating: {
            stars: 4.5,
            review: 1400,
        },
        item_name: 'Rhodium-Plated CZ Floral Studs',
        final_price: '600',
        origional_price: '1200',
        return_period: 14,
        delivery_date: '07 Jan 2025',
        discount_price: 50,
    },
    {
        id: '002',
        image: '/images/2.jpg',
        company: 'CUKO',
        rating: {
            stars: 4.3,
            review: 24,
        },
        item_name: 'Women Padded Halter Neck Swimming Dress',
        final_price: '1507',
        origional_price: '2599',
        return_period: 14,
        delivery_date: '07 Jan 2025',
        discount_price: 42,
    },
    {
        id: '003',
        image: '/images/3.jpg',
        company: 'NUVOSDAMAS',
        rating: {
            stars: 4.1,
            review: 249,
        },
        item_name: 'Women Red & White Printed A-line Knee-Length Skirts',
        final_price: 495,
        origional_price: 1599,
        return_period: 14,
        delivery_date: '07 Jan 2025',
        discount_price: 69,
    },
    {
        id: '004',
        image: '/images/4.jpg',
        company: 'ADIDAS',
        rating: {
            stars: 4.2,
            review: 3500,
        },
        item_name: 'Pure Cotton T-shirt',
        final_price: 489,
        origional_price: 1399,
        return_period: 14,
        delivery_date: '07 Jan 2025',
        discount_price: 65,
    },
    {
        id: '005',
        image: '/images/5.jpg',
        company: 'Roadster',
        rating: {
            stars: 4.2,
            review: 3500,
        },
        item_name: 'Pure Cotton T-shirt',
        final_price: 489,
        origional_price: 1399,
        return_period: 14,
        delivery_date: '07 Jan 2025',
        discount_price: 65,
    },
    {
        id: '006',
        image: '/images/6.jpg',
        company: 'Nike',
        rating: {
            stars: 4.2,
            review: 3500,
        },
        item_name: 'Men ReactX Running Shoes',
        final_price: 14995,
        origional_price: 14995,
        return_period: 14,
        delivery_date: '07 Jan 2025',
        discount_price: 0,
    },
    {
        id: '007',
        image: '/images/7.jpg',
        company: 'The Indian Garage Co',
        rating: {
            stars: 4.2,
            review: 388,
        },
        item_name: 'Men Slim Fit Regular Shorts',
        final_price: 639,
        origional_price: 1599,
        return_period: 14,
        delivery_date: '07 Jan 2025',
        discount_price: 60,
    },

]
items.forEach(item => {
    innerHtml += `
     <div class="item-container">
                <img class="item-image" src="${item.image}" alt="" srcset="">
                <div class="rating">${item.rating.stars}⭐|${item.rating.review}</div>
                <div class="item-company">${item.company}</div>
                <div class="item-name">${item.item_name}</div>
                <div class="price">
                    <span class="final-price">Rs ${item.final_price}</span>
                    <span class="origional-price">Rs ${item.origional_price}</span>
                    <span class="item-discount">(${item.discount_price}% OFF)</span>
                </div>
                <button class="btn-add-bag" onclick="addToBag(${item.id});">Add to Bag</button>
            </div>
    `;
})
itemsContainerElement.innerHTML = innerHtml;
let itemsContainer2Element = document.querySelector('.items1-container');
let innerHTML = '';
let items1 = [
    {
        id: '008',
        image: '/images/download (1).jpeg',
        company: 'Urbano Fashion',
        rating: {
            stars: 4.5,
            review: 1400,
        },
        item_name: 'Men Slim Fit Jeans',
        final_price: '559',
        origional_price: '1399',
        return_period: 14,
        delivery_date: '07 Jan 2025',
        discount_price: 60,
    },
    {
        id: '009',
        image: '/images/download (2).jpeg',
        company: 'HIGHLANDER',
        rating: {
            stars: 3.6,
            review: 135,
        },
        item_name: 'Slim Fit Opaque Casual Shirt',
        final_price: '1507',
        origional_price: '2599',
        return_period: 14,
        delivery_date: '07 Jan 2025',
        discount_price: 42,
    },
    {
        id: '010',
        image: '/images/download (3).jpeg',
        company: 'KINGDOM OF WHITE',
        rating: {
            stars: 4.1,
            review: 249,
        },
        item_name: 'Pure Cotton Slim Fit Shirt',
        final_price: 495,
        origional_price: 1599,
        return_period: 14,
        delivery_date: '07 Jan 2025',
        discount_price: 69,
    },
    {
        id: '012',
        image: '/images/download (4).jpeg',
        company: 'ARROW',
        rating: {
            stars: 4.2,
            review: 3500,
        },
        item_name: 'Single Breasted Blazers',
        final_price: 4899,
        origional_price: 6999,
        return_period: 14,
        delivery_date: '07 Jan 2025',
        discount_price: 30,
    },
    {
        id: '013',
        image: '/images/images (12).jpeg',
        company: 'FIVEFEB',
        rating: {
            stars: 4.2,
            review: 3500,
        },
        item_name: 'Single Breasted Blazers',
        final_price: 4999,
        origional_price: 4999,
        return_period: 14,
        delivery_date: '07 Jan 2025',
        discount_price: 0,
    },
    {
        id: '014',
        image: '/images/images (15).jpeg',
        company: 'Mr Bowerbird',
        rating: {
            stars: 4.2,
            review: 3500,
        },
        item_name: 'Men Tailored Fit Blazers',
        final_price: 3599,
        origional_price: 8999,
        return_period: 14,
        delivery_date: '07 Jan 2025',
        discount_price: 60,
    },
    {
        id: '015',
        image: '/images/images (16).jpeg',
        company: 'Peter England',
        rating: {
            stars: 4.2,
            review: 388,
        },
        item_name: 'Men Solid Slim-Fit Single Breasted Blazers',
        final_price: 6399,
        origional_price: 7999,
        return_period: 14,
        delivery_date: '07 Jan 2025',
        discount_price: 20,
    },

]
items1.forEach(item => {
    innerHTML += `
     <div class="item-container">
                <img class="item-image" src="${item.image}" alt="" srcset="">
                <div class="rating">${item.rating.stars}⭐|${item.rating.review}</div>
                <div class="item-company">${item.company}</div>
                <div class="item-name">${item.item_name}</div>
                <div class="price">
                    <span class="final-price">Rs ${item.final_price}</span>
                    <span class="origional-price">Rs ${item.origional_price}</span>
                    <span class="item-discount">(${item.discount_price}% OFF)</span>
                </div>
                <button class="btn-add-bag" onclick="addToBag(${item.id});">Add to Bag</button>
            </div>
    `;
})
itemsContainer2Element.innerHTML = innerHTML;
//third array for the women section
let itemsContainer3Element = document.querySelector('.items2-container');
let innerHTML1 = '';
let items2 = [
    {
        id: '016',
        image: '/images/shopping (1).webp',
        company: 'Anni Designer',
        rating: {
            stars: 2.4,
            review: 140,
        },
        item_name: 'Kurta with Trouser & Dupatta',
        final_price: '1173',
        origional_price: '4345',
        return_period: 14,
        delivery_date: '07 Jan 2025',
        discount_price: 73,
    },
    {
        id: '017',
        image: '/images/shopping (2).webp',
        company: 'Anouk',
        rating: {
            stars: 4.3,
            review: 2400,
        },
        item_name: 'Women Padded Halter ',
        final_price: '545',
        origional_price: '1949',
        return_period: 14,
        delivery_date: '07 Jan 2025',
        discount_price: 72,
    },
    {
        id: '018',
        image: '/images/shopping (3).webp',
        company: 'Sangria',
        rating: {
            stars: 4.2,
            review: 163,
        },
        item_name: 'Woven Design Kurti',
        final_price: 499,
        origional_price: 1999,
        return_period: 14,
        delivery_date: '07 Jan 2025',
        discount_price: 75,
    },
    {
        id: '019',
        image: '/images/shopping (4).webp',
        company: 'KALINI',
        rating: {
            stars: 4.1,
            review: 76,
        },
        item_name: 'Embroiered A-line Kurti',
        final_price: 698,
        origional_price: 3177,
        return_period: 14,
        delivery_date: '07 Jan 2025',
        discount_price: 78,
    },
    {
        id: '020',
        image: '/images/shopping (6).webp',
        company: 'Rain & Rainbow',
        rating: {
            stars: 4.3,
            review: 3500,
        },
        item_name: 'Printed Pure Cotton Kurti',
        final_price: 489,
        origional_price: 1399,
        return_period: 14,
        delivery_date: '07 Jan 2025',
        discount_price: 65,
    },
    {
        id: '021',
        image: '/images/shopping (7).webp',
        company: 'Lakshita ',
        rating: {
            stars: 4.2,
            review: 3500,
        },
        item_name: 'Embroidered Lace Inserts Tunic',
        final_price: 1916,
        origional_price: 2995,
        return_period: 14,
        delivery_date: '07 Jan 2025',
        discount_price: 36,
    },
    {
        id: '022',
        image: '/images/shopping (8).webp',
        company: 'Junior',
        rating: {
            stars: 4.2,
            review: 388,
        },
        item_name: 'Floral Emdroidered Tunic',
        final_price: 799,
        origional_price: 3999,
        return_period: 14,
        delivery_date: '07 Jan 2025',
        discount_price: 80,
    },

]
items2.forEach(item => {
    innerHTML1 += `
     <div class="item-container">
                <img class="item-image" src="${item.image}" alt="" srcset="">
                <div class="rating">${item.rating.stars}⭐|${item.rating.review}</div>
                <div class="item-company">${item.company}</div>
                <div class="item-name">${item.item_name}</div>
                <div class="price">
                    <span class="final-price">Rs ${item.final_price}</span>
                    <span class="origional-price">Rs ${item.origional_price}</span>
                    <span class="item-discount">(${item.discount_price}% OFF)</span>
                </div>
                <button class="btn-add-bag" onclick="addToBag(${item.id})";>Add to Bag</button>
            </div>
    `;
})
itemsContainer3Element.innerHTML = innerHTML1;