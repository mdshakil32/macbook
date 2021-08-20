function getBestPrice(){
    const bestPrice = document.getElementById('best-price');
    return bestPrice;
}
function getMemoryCost(){
    const memoryCost = document.getElementById('memory-cost');
    return memoryCost;
}
function getStorageCost(){
    const storageCost = document.getElementById('storage-cost');
    return storageCost;
}
function getDeliveryCharge(){
    const deliveryCharge = document.getElementById('delivery-charge');
    return deliveryCharge;
}
function getTotalPrice(){
    const totalPrice = document.getElementById('total-price');
    return totalPrice;
}
function getTotal(){
    const total = document.getElementById('total');
    return total;
}

// memory -8 
document.getElementById('memory-8').addEventListener('click',function(){
    const memoryCost = getMemoryCost();

    if(memoryCost.innerText != 0){

        memoryCost.innerText = 0;    

        const totalPrice = getTotalPrice();
        const newTotalPrice = parseFloat(totalPrice.innerText)-180;
        totalPrice.innerText = newTotalPrice;

        const total = getTotal();
        total.innerText = newTotalPrice;
    }
})
// memory -16
document.getElementById('memory-16').addEventListener('click',function(){
    const memoryCost = getMemoryCost();

    if(memoryCost.innerText == 0){
        memoryCost.innerText = 180;

        const totalPrice = getTotalPrice();
        const newTotalPrice = parseFloat(totalPrice.innerText)+180;
        totalPrice.innerText = newTotalPrice;

        const total = getTotal();
        total.innerText = newTotalPrice;
    }    
})
// storage-256gb
document.getElementById('storage-256').addEventListener('click',function(){
    const storageCost = getStorageCost();

    if(storageCost.innerText == 100){
        storageCost.innerText = 0;

        const totalPrice = getTotalPrice();
        const newTotalPrice = parseFloat(totalPrice.innerText)-100;
        totalPrice.innerText = newTotalPrice;

        const total = getTotal();
        total.innerText = newTotalPrice;
    }
    if(storageCost.innerText == 180){
        storageCost.innerText = 0;

        const totalPrice = getTotalPrice();
        const newTotalPrice = parseFloat(totalPrice.innerText)-180;
        totalPrice.innerText = newTotalPrice;

        const total = getTotal();
        total.innerText = newTotalPrice;
    }
})
// storage-500gb
document.getElementById('storage-500').addEventListener('click',function(){
    const storageCost = getStorageCost();

    if(storageCost.innerText == 0){
        storageCost.innerText = 100;

        const totalPrice = getTotalPrice();
        const newTotalPrice = parseFloat(totalPrice.innerText)+100;
        totalPrice.innerText = newTotalPrice;

        const total = getTotal();
        total.innerText = newTotalPrice;
    }
    if(storageCost.innerText == 180){
        storageCost.innerText = 100;

        const totalPrice = getTotalPrice();
        const newTotalPrice = parseFloat(totalPrice.innerText)-80;
        totalPrice.innerText = newTotalPrice;

        const total = getTotal();
        total.innerText = newTotalPrice;
    }    
})
// storage-1tb
document.getElementById('storage-1tb').addEventListener('click',function(){
    const storageCost = getStorageCost();

    if(storageCost.innerText == 0){
        storageCost.innerText = 180;

        const totalPrice = getTotalPrice();
        const newTotalPrice = parseFloat(totalPrice.innerText)+180;
        totalPrice.innerText = newTotalPrice;

        const total = getTotal();
        total.innerText = newTotalPrice;
    }
    if(storageCost.innerText == 100){
        storageCost.innerText = 180;

        const totalPrice = getTotalPrice();
        const newTotalPrice = parseFloat(totalPrice.innerText)+80;
        totalPrice.innerText = newTotalPrice;

        const total = getTotal();
        total.innerText = newTotalPrice;
    }
})

// free-delivery 
document.getElementById('free-delivery').addEventListener('click',function(){
    const deliveryCharge = getDeliveryCharge();
    
    if(deliveryCharge.innerText != 0 ){

        deliveryCharge.innerText=0;

        const totalPrice = getTotalPrice();
        const newTotalPrice = parseFloat(totalPrice.innerText)-20;
        totalPrice.innerText = newTotalPrice;

        const total = getTotal();
        total.innerText = newTotalPrice;
    }   
})

// paid-delivery 
document.getElementById('paid-delivery').addEventListener('click',function(){
    const deliveryCharge = getDeliveryCharge();

    if(deliveryCharge.innerText == 0 ){

        deliveryCharge.innerText=20;

        const totalPrice = getTotalPrice();
        const newTotalPrice = parseFloat(totalPrice.innerText)+20;
        totalPrice.innerText = newTotalPrice;

        const total = getTotal();
        total.innerText = newTotalPrice;

    }
})

// promo 
document.getElementById('promo-button').addEventListener('click',function(){
    const promoInput = document.getElementById('promo-input').value;

    if(promoInput == 'stevekaku'){

        const totalPrice = parseFloat(getTotalPrice().innerText);
        const discount = totalPrice*.2;

        const total = getTotal();
        total.innerText = (totalPrice-discount);

        document.getElementById('promo-input').value = '';
    }   
})