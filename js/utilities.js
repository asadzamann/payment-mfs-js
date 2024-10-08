function inputFunctionById(id){
    const common = document.getElementById(id).value;
    const number = parseFloat(common)
    return (number);
}

function showSectionById(id){
    document.getElementById('add-money-form').classList.add('hidden');
    document.getElementById('cashout-form').classList.add('hidden');
    document.getElementById('transaction-history').classList.add('hidden');
    /////// show the section with the provide id as parameter
    document.getElementById(id).classList.remove('hidden');
}