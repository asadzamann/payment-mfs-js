// console.log('login detected')
// Step 1: set event handler
document.getElementById('login-button').addEventListener('click', function(event){
    // step 2: Prevent default
    event.preventDefault();
    // step 3: get the phone number
    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;
    console.log(phoneNumber, pinNumber);
    if(phoneNumber === '55' && pinNumber === '55'){
        console.log('You are logged in successfully');
        window.location.href = '/home.html'
    }
    else{
        alert('Please Provide Correct Details')
    }
});
