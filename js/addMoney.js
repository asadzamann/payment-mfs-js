document.getElementById('add-money-btn')
    .addEventListener('click', function (event) {
        event.preventDefault();
        const addMoney = inputFunctionById('input-id');
        const pinNumber = inputFunctionById('pin-number1');
        if(pinNumber === 1234){
            let balance = document.getElementById('balance').innerText;
            newBalance = parseFloat(balance);
            newAddMoney = parseFloat(addMoney);
            newBalance += newAddMoney;
            console.log('balance added successfully, Here is your balance:', newBalance)
            document.getElementById('balance').innerText = newBalance;

        }
        else{
            alert('Invalid Pin');
        }
});