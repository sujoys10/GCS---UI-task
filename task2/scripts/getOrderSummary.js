function getOrderSummary(bill){

    //variable
    const orderSummary = document.querySelector('.orderSummary');
    const total = document.querySelector('#total');

    //clear the div
    orderSummary.innerHTML = '';

    bill.map(item => {
        const elem = document.createElement('div');
        elem.classList.add('orderSummary__item');
        elem.innerHTML = itemTemplate(item);
        orderSummary.appendChild(elem);
    })


    //calculate Total
    let totalAmount = 0;
    bill.map(item => totalAmount += item.value)
    
    total.innerText = totalAmount.toFixed(2);

};