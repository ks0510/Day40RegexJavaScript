//UC1 To validate  email with abc part
let emailRegex = RegExp('^[a][b][c][.][a-z]{1,}[@][b][r][i][d][g][e][l][a][b][z][.][c][o][.][a-z]{1,}$');
let checkEmail1 = emailRegex.test("abc.xyx@bridgelabz.co.in");
console.log(checkEmail1);
if(checkEmail1){
    console.log("Email is valid");
}
else{
    console.log("Email is not valid");
}

//UC2 To validate email with @ and bridgelabz part
let checkEmail2 = emailRegex.test("abc.pqr@bridgelabz.co.in");
if(checkEmail2){
    console.log("Email is valid");
}
else{
    console.log("Email is not valid");
}

//UC3 To validate email with . and co part in email
let checkEmail3 = emailRegex.test("abc.trust@bridgelabz.co.in");
if(checkEmail3){
    console.log("Email is valid");
}
else{
    console.log("Email is not valid");
}
