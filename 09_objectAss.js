let sbiBank={
         bankName:"SBI Bank",
         location:"Pune",
         accountNo:"12334546",
         IFSC:"SBINO005678",
         InterestRate:"3.00%-7.10%p.a",
         showDetails:function () {
            console.log(`The Bank Details :${this.bankName},${this.location},${this.accountNo},${this.IFSC},${this.InterestRate}`);
         }
}
let axisBank={
    bankName:"AXIS Bank",
    location:"Mumbai",
    accountNo:"3429495859",
    IFSC:"AXISNO0065743",
    InterestRate:"3%-3.5%p.a",
    showDetails:function () {
        console.log(`The Bank Details :${this.bankName},${this.location},${this.accountNo},${this.IFSC},${this.InterestRate}`);
     }