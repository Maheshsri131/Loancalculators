function calculate(){


    const amount= document.querySelector("#amount").value;


    const rate=document.querySelector("#rate").value;

    const months=document.querySelector("#months").value;


    const interest= (amount*months*rate)/100;

    const total=((interest)+amount/months).toFixed(2);

    const totalamount= Number(amount)+interest;


    document.querySelector("#total").innerHTML="EMI :(₹)" + total;

    document.querySelector("#totalamount").innerHTML="TotalAmount to Pay:(₹)" + totalamount;

}