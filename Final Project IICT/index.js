
function valCardDetails(){
    let card = document.getElementById("ccn").value;
    let cvv = document.getElementById("cvv").value;
    let amt = document.getElementById("amount").value;
    let first = document.getElementById("firstName").value;
    let last = document.getElementById("lastName").value;

    if (card.length < 14)
    {
        alert("The credit card number needs to be 14 digits!");
    }
    else if(cvv.length < 3)
    {
        alert("The CVV needs to be 3 digits!");
    }
    else if(amt == 0)
    {
        alert("Enter a valid amount!");
    }
    else if(first == "" || first == null){
        alert("Please enter your first name!")
    }
    else if(last == "" || last == null){
        alert("Please enter your last name!")
    }
    else{
        alert("Your donation has been received. Thank you for helping!");
    }
}
