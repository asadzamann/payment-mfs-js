// show add money form
document.getElementById('show-add-money')
.addEventListener('click', function(){
    console.log('show add money');
    showSectionById('add-money-form');
})

// show cash-out form
document.getElementById('show-cashout')
.addEventListener('click', function(){
    console.log('show cashout');
    showSectionById('cashout-form')
})

// show transaction history
document.getElementById('show-transaction')
.addEventListener('click', function(){
    console.log('Show Transaction History');
    showSectionById('transaction-history');
})