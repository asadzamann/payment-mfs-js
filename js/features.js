// show the cash out form
document.getElementById('show-cashout').addEventListener('click', function(){
    // console.log('show cashout button clicked')
    document.getElementById('cashout-form').classList.remove('hidden');

    document.getElementById('add-money-form').classList.add('hidden');
})
document.getElementById('show-add-money').addEventListener('click', function(){
    document.getElementById('add-money-form').classList.remove('hidden');
    document.getElementById('cashout-form').classList.add('hidden')
})