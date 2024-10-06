// console.log('login detected')
// Step 1: set event handler
document.getElementById('login-button').addEventListener('click', function(event){
    // step 2: Prevent default
    event.preventDefault();
    // step 3: get the phone number
    const phoneNumber = document.getElementById('phone-number').value;
    console.log(phoneNumber);
});
