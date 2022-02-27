// convert into int 
function getOptionPrice(optionId){
    const cost = document.getElementById(optionId);
    const costInt = parseInt(cost.innerText);
    const errorMessage = document.getElementById('pomo-msg');
        errorMessage.innerText = '';
    return costInt;
}
// add total price 
function getTotalPrice(){
    const basicPrice = getOptionPrice('basic-price');
    const extraMemoryCost = getOptionPrice('memory-price');
    const extraStorageCost = getOptionPrice('storage-price');
    const deliveryPrice = getOptionPrice('delivery-price');
    const totalPriceText = document.getElementById('total-price');
    totalPriceText.innerText = basicPrice + extraMemoryCost + extraStorageCost + deliveryPrice;
    return totalPriceText.innerText;
}
// add pomo code 
function getPomoDiscount(codeId){
    const code = document.getElementById(codeId);
    if(code.value == 'stevekaku')
    {
        const finalBillText = document.getElementById('total-price1');
        const finalBill = getOptionPrice('total-price1');
        const finalBillInt = parseInt(finalBill)-(parseInt(finalBill) * 0.2);
        finalBillText.innerText = Math.round(finalBillInt);
        const pomoCode = document.getElementById('pomo-code');
        pomoCode.value = '';
        const errorMessage = document.getElementById('pomo-msg');
        errorMessage.innerText = 'Pomo code Accepted';
        return finalBillText;
    }
    else if(code.value == ''){
        const errorMessage = document.getElementById('pomo-msg');
        errorMessage.innerText = 'Please enter a Pomo Code!';
    }
    else{
        const pomoCode = document.getElementById('pomo-code');
        pomoCode.value = '';
        const errorMessage = document.getElementById('pomo-msg');
        errorMessage.innerText = 'Pomo code not Matched!';
        return errorMessage.innerText;
    }
}
// add total price after pomo code 
function getTotalPrice1(){
    const finalBill = document.getElementById('total-price1');
    finalBill.innerText = getTotalPrice();
    return finalBill.innerText;
}
//memory price
document.getElementById('memory-basic').addEventListener('click', function(){
    const extraMemoryCost = document.getElementById('memory-price');
    extraMemoryCost.innerText = 0;
    getTotalPrice();
    getTotalPrice1();

});
document.getElementById('memory-extra').addEventListener('click', function(){
    const extraMemoryCost = document.getElementById('memory-price');
    extraMemoryCost.innerText = 180;
    getTotalPrice();
    getTotalPrice1();
});
//storage price
document.getElementById('storage-basic').addEventListener('click', function(){
    const extraMemoryCost = document.getElementById('storage-price');
    extraMemoryCost.innerText = 0;
    getTotalPrice();
    getTotalPrice1();
});
document.getElementById('storage-extra').addEventListener('click', function(){
    const extraMemoryCost = document.getElementById('storage-price');
    extraMemoryCost.innerText = 100;
    getTotalPrice();
    getTotalPrice1();
});
document.getElementById('storage-double-extra').addEventListener('click', function(){
    const extraMemoryCost = document.getElementById('storage-price');
    extraMemoryCost.innerText = 180;
    getTotalPrice();
    getTotalPrice1();
});
// delivery charge 
document.getElementById('free-delivery').addEventListener('click', function(){
    const extraMemoryCost = document.getElementById('delivery-price');
    extraMemoryCost.innerText = 0;
    getTotalPrice();
    getTotalPrice1();
});
document.getElementById('charge-delivery').addEventListener('click', function(){
    const extraMemoryCost = document.getElementById('delivery-price');
    extraMemoryCost.innerText = 20;
    getTotalPrice();
    getTotalPrice1();
});
// pomo code 
document.getElementById('apply-btn').addEventListener('click', function(){
    getPomoDiscount('pomo-code');
});