//  value assigning-------------
 
function inputValues(product,memory,value){
    const productValue = document.getElementById(memory);
    const productText = productValue.innerText;
    productValue.innerText = value;
    return value;
}
//  value calculation------------------
function totalAmount(amount){
    const productAmount = document.getElementById("total-"+amount)
    const amountText =parseInt(productAmount.innerText);
    return amountText;
}

function amount(){
    const memory = totalAmount("memory");
    const storageValue = totalAmount("storage");
    const deliveyValue =totalAmount("delivery");
        
    const bestPrice = document.getElementById('best-price');
    const bestPriceText = parseInt(bestPrice.innerText);
    const totalProductMoney = parseInt(bestPriceText) + parseInt(memory) + parseInt(storageValue) + parseInt(deliveyValue);
    
    const total = document.getElementById('total-price');
    const totalText = parseInt(total.innerText);
    total.innerText = totalProductMoney;

    const allTotal = document.getElementById('total');
    const allTotalText = allTotal.innerText;
    allTotal.innerText = totalProductMoney
    return totalProductMoney ;
    
}

//  eventhandler add

//  memory
document.getElementById('memory-8').addEventListener('click',function(){
const value = inputValues('memory-8','total-memory',0);
amount();
})

document.getElementById('memory-16').addEventListener('click',function(){
   const value = inputValues('memory-16','total-memory',180);
   amount();
})

// storage

document.getElementById('stroage-256').addEventListener('click',function(){
   const value = inputValues('stroage-256','total-storage',0);
   amount();
   
})
// 512GB storage
document.getElementById('stroage-512').addEventListener('click',function(){
   const value = inputValues('stroage-512','total-storage',100);
   amount();
})

// 1TB ssd storage
document.getElementById('stroage-1tb').addEventListener('click',function(){
   const value =  inputValues('stroage-1tb','total-storage',180);
   amount();
})
// delivery free
document.getElementById('delivery-free').addEventListener('click',function(){

   const value =  inputValues('delivery-free','total-delivery',0);
   amount();
})

// delivery fast
document.getElementById('delivery-fast').addEventListener('click',function(){
   const value = inputValues('delivery-fast','total-delivery',20);
   amount();
})

// promo code
document.getElementById('pomo-btn').addEventListener('click',function(){
   const promo = document.getElementById('pomo-input')
    const promoText = promo.value;
    if (promoText == 'stevekaku') {
        const bottomTotalText = document.getElementById('total');
        const bottomTotalValue = bottomTotalText.innerText
        const bottomTotal = parseInt(bottomTotalValue);
        const amount = bottomTotal * 0.2;
        const subtractAmount = bottomTotal - amount;
        bottomTotalText.innerText = subtractAmount;
    }
   document.getElementById('pomo-btn').disabled = true;
   promo.value = '';
})