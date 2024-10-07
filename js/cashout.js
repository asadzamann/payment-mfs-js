document.getElementById('cashout-btn')
.addEventListener('click', function(event){
    event.preventDefault();
    const cashOut = inputFunctionById('input-id2');
    const pinNumber = inputFunctionById('pin-number2');
    if(pinNumber === 1234){
       
        let balance = document.getElementById('balance').innerText;
        balance -= cashOut;
        console.log('cashout successfully, Here is your balance:', balance);
        document.getElementById('balance').innerText = balance;
    }
    else{
        alert('Invalid Pin');
    }
})