let pincodeRegex = RegExp('^[0-9]{6}$');
let pincodeCheck = pincodeRegex.test(400088);
if(pincodeCheck){
    console.log("Pincode is valid");
}
else{
    console.log("Pincode is not valid");
}