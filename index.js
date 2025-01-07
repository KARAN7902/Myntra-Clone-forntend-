let itemsContainerElement=document.querySelector('.items-container');
let innerHtml='';
let items=[
    {
    id:'001',
    image:'/images/1.jpg',
    company:'Carlton London',
    rating:{
    stars:4.5,
    review:1400,
    },
    item_name:'Rhodium-Plated CZ Floral Studs',
    final_price:'600',
    origional_price:'1200',
    return_period:14,
    delivery_date:'07 Jan 2025',
    discount_price:50,
    },
    {
        id:'002',
        image:'/images/2.jpg',
        company:'CUKO',
        rating:{
        stars:4.3,
        review:24,
        },
        item_name:'Women Padded Halter Neck Swimming Dress',
        final_price:'1507',
        origional_price:'2599',
        return_period:14,
        delivery_date:'07 Jan 2025',
        discount_price:42,
        },
        {
            id:'003',
            image:'/images/3.jpg',
            company:'NUVOSDAMAS',
            rating:{
            stars:4.1,
            review:249,
            },
            item_name:'Women Red & White Printed A-line Knee-Length Skirts',
            final_price:495,
            origional_price:1599,
            return_period:14,
            delivery_date:'07 Jan 2025',
            discount_price:69,
            },
            { 
                id:'004',
                image:'/images/4.jpg',
                company:'ADIDAS',
                rating:{
                stars:4.2,
                review:3500,
                },
                item_name:'Pure Cotton T-shirt',
                final_price:489,
                origional_price:1399,
                return_period:14,
                delivery_date:'07 Jan 2025',
                discount_price:65,
                },
                {
                    id:'005',
                    image:'/images/5.jpg',
                    company:'Roadster',
                    rating:{
                    stars:4.2,
                    review:3500,
                    },
                    item_name:'Pure Cotton T-shirt',
                    final_price:489,
                    origional_price:1399,
                   return_period:14,
                   delivery_date:'07 Jan 2025',
                    discount_price:65,
                    },
                    {
                        id:'006',
                        image:'/images/6.jpg',
                        company:'Nike',
                        rating:{
                        stars:4.2,
                        review:3500,
                        },
                        item_name:'Men ReactX Running Shoes',
                        final_price:14995,
                        origional_price:14995,
                       return_period:14,
                       delivery_date:'07 Jan 2025',
                        discount_price:0,
                        },
                        {
                            id:'007',
                            image:'/images/7.jpg',
                            company:'The Indian Garage Co',
                            rating:{
                            stars:4.2,
                            review:388,
                            },
                            item_name:'Men Slim Fit Regular Shorts',
                            final_price:639,
                            origional_price:1599,
                           return_period:14,
                           delivery_date:'07 Jan 2025',
                            discount_price:60,
                            },
                            {
                                id:'008',
                                image:'/images/8.jpg',
                                company:'Nivea',
                                rating:{
                                stars:4.2,
                                review:5200,
                                },
                                item_name:'Men Fresh Deodrant 150ml',
                                final_price:142,
                                origional_price:285,
                               return_period:14,
                               delivery_date:'07 Jan 2025',
                                discount_price:50,
                                },
]
items.forEach(item=>{
    innerHtml+=`
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
                <button class="btn-add-bag">Add to Bag</button>
            </div>
    `;
})
itemsContainerElement.innerHTML= innerHtml;
let itemsContainer2Element=document.querySelector('.items1-container');
let innerHTML='';
let items1=[
    {
    id:'001',
    image:'"/images/download (1).jpeg',
    company:'Carlton London',
    rating:{
    stars:4.5,
    review:1400,
    },
    item_name:'Rhodium-Plated CZ Floral Studs',
    final_price:'600',
    origional_price:'1200',
    return_period:14,
    delivery_date:'07 Jan 2025',
    discount_price:50,
    },
    {
        id:'002',
        image:'/images/download (2).jpeg',
        company:'CUKO',
        rating:{
        stars:4.3,
        review:24,
        },
        item_name:'Women Padded Halter Neck Swimming Dress',
        final_price:'1507',
        origional_price:'2599',
        return_period:14,
        delivery_date:'07 Jan 2025',
        discount_price:42,
        },
        {
            id:'003',
            image:'"/images/download (3).jpeg',
            company:'NUVOSDAMAS',
            rating:{
            stars:4.1,
            review:249,
            },
            item_name:'Women Red & White Printed A-line Knee-Length Skirts',
            final_price:495,
            origional_price:1599,
            return_period:14,
            delivery_date:'07 Jan 2025',
            discount_price:69,
            },
            { 
                id:'004',
                image:'/images/download (4).jpeg',
                company:'ADIDAS',
                rating:{
                stars:4.2,
                review:3500,
                },
                item_name:'Pure Cotton T-shirt',
                final_price:489,
                origional_price:1399,
                return_period:14,
                delivery_date:'07 Jan 2025',
                discount_price:65,
                },
                {
                    id:'005',
                    image:'/images/images (12).jpeg',
                    company:'Roadster',
                    rating:{
                    stars:4.2,
                    review:3500,
                    },
                    item_name:'Pure Cotton T-shirt',
                    final_price:489,
                    origional_price:1399,
                   return_period:14,
                   delivery_date:'07 Jan 2025',
                    discount_price:65,
                    },
                    {
                        id:'006',
                        image:'"/images/images (15).jpeg',
                        company:'Nike',
                        rating:{
                        stars:4.2,
                        review:3500,
                        },
                        item_name:'Men ReactX Running Shoes',
                        final_price:14995,
                        origional_price:14995,
                       return_period:14,
                       delivery_date:'07 Jan 2025',
                        discount_price:0,
                        },
                        {
                            id:'007',
                            image:'/images/images (16).jpeg',
                            company:'The Indian Garage Co',
                            rating:{
                            stars:4.2,
                            review:388,
                            },
                            item_name:'Men Slim Fit Regular Shorts',
                            final_price:639,
                            origional_price:1599,
                           return_period:14,
                           delivery_date:'07 Jan 2025',
                            discount_price:60,
                            },
                            
]
items1.forEach(item=>{
    innerHTML+=`
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
                <button class="btn-add-bag">Add to Bag</button>
            </div>
    `;
})
itemsContainer2Element.innerHTML=innerHTML;