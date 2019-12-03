function onPayment (payment) {
    alert('This is the callback function where we will perform a search once the payment has been processed');
    alert(payment);
    console.log('A payment has occurred!', payment);
}
