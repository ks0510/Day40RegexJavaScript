//To check pincode using regex.
let pincodeRegex = RegExp('^[0-9]{6}$');
let pincodeCheck = pincodeRegex.test("400088");
if(pincodeCheck){
    console.log("Pincode is valid");
}
else{
    console.log("Pincode is not valid");
}
//UC2 Restrict to take alphabet at start
let pincodeCheck1 = pincodeRegex.test("A400088");

if(pincodeCheck1){
    console.log("Pincode is valid");
}
else{
    console.log("Pincode is not valid");
}

//UC3 Restrict to take alphabet and special characters at end

let pincodeCheck2 = pincodeRegex.test("400088B");

if(pincodeCheck2){
    console.log("Pincode is valid");
}
else{
    console.log("Pincode is not valid");
}