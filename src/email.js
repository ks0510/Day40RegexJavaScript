//UC1 To validate  email
let emailRegex = RegExp('^[a][b][c][.][a-z]{1,}[@][b][r][i][d][g][e][l][a][b][z][.][c][o][.][a-z]{1,}$');
let checkEmail1 = emailRegex.test("abc.xyx@bridgelabz.co.in");
console.log(checkEmail1);
if(checkEmail1){
    console.log("Email is valid");
}
else{
    console.log("Email is not valid");
}