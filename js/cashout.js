document.getElementById('cashout-btn')
.addEventListener('click', function(event){
    event.preventDefault();
    const cashOut = inputFunctionById('input-id2');
    const pinNumber = inputFunctionById('pin-number2');
    if(isNaN(cashOut)){
        alert('Invalid Number');
        return;
    }

    if(pinNumber === 1234){
       
        let balance = document.getElementById('balance').innerText;
        balance -= cashOut;
        if(cashOut > balance){
            alert('Insufficient Balance')
            return;
        }
        console.log('Cash Out Successfully, Here is your balance:', balance);
        document.getElementById('balance').innerText = balance;
        //add to transaction
        const div = document.createElement('div');
        div.classList.add('bg-yellow-300')
        div.innerHTML = `
        <h2 class="text-3xl font-bold">Cash Out</h2>
        <p> Withdraw: ${cashOut}Tk. New Balance: ${balance}</p>`
        console.log(div)
        document.getElementById('transaction-container').appendChild(div);
    }
    else{
        alert('Invalid Pin');
    }
})