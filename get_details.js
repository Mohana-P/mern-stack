//customer details
var customer = {
    name: "ravi",
    accno:18647364,
    balance: 90000,
    isPreviliged: false,
    cards: ['credit card', 'debit card'],
    address: {
                   city: "Hyderabad",
                   state: "Telangana"
             },
     getCustomerDetails: function(){
              return this.name+ "\t"+ this.accno+ "\t"+ this.balance;
     }
}

console.log(customer.name);

console.log(customer.balance);

console.log(customer.getCustomerDetails());

console.log(customer.address.city);

console.log(customer['name']);

console.log(customer.cards);

// product details
var product = {
    name: "boAt Airdopes 131 Bluetooth Headset  (Active Black, True Wireless)",
    warranty:"1year",
    Replacement_policy:"within 7 Days",
    Payment:"Cash on delivery available",
       
     getproductDetails: function(){
              return this.name+ "\t"+ this.warranty+ "\t"+ this.Replacement_policy+ "\t"+ this.Payment;
     }
}
console.log(product.getproductDetails())

