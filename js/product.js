"use strict";

const productsEl=document.querySelector('.products');

(async()=>{
    try {
        const res= await fetch('https://fakestoreapi.com/products')
        const data= await res.json()
        data?.map(item=>{
            productsEl.innerHTML+=`<div class="product-items">
            <div class="product-card">
            <img src="${item.image}" />
            <p>${item.title}</p>
            <span>$${item.price}</span>
            </div>
            </div>`
        })
    } catch (error) {
        console.log(error);
        
    }
})()