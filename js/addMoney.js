document.getElementById('add-money-btn')
    .addEventListener('click', function (event) {
        event.preventDefault();
        const addMoney = inputFunctionById('input-id');
        const pinNumber = inputFunctionById('pin-number1');
        if(isNaN(addMoney)){
            alert('Invalid Number');
            return;
        }
        if (pinNumber === 1234) {
            let balance = document.getElementById('balance').innerText;
            newBalance = parseFloat(balance);
            newAddMoney = parseFloat(addMoney);
            newBalance += newAddMoney;
            console.log('balance added successfully, Here is your balance:', newBalance)
            document.getElementById('balance').innerText = newBalance;
            // add to transaction history
            const div = document.createElement('div');
        div.classList.add('bg-green-300')
        div.innerHTML = `
        <h2 class="text-3xl font-bold">Add Money</h2>
        <p> Withdraw: ${newAddMoney}Tk. New Balance: ${newBalance}</p>`
        console.log(div)
        document.getElementById('transaction-container').appendChild(div);
        }
        else {
            alert('Invalid Pin');
        }
    });