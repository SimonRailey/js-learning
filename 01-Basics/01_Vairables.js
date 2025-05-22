const accountId=12567
let accountEmail = "abc@gmail.com"
var accountPassword = "123456"
accountCity="Kolkata"
let accountState;
// accountId=5
// We cant change value of const keywords when declared in variables

accountEmail="abcd@gmail.com"
accountPassword="123@g"
accountCity="Pune"

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

/*
 In javascript we can declare variables in two way : 
 a. let
 b. var
 In early version there was functional and block scope issues with var, so they 
 intrdouced let so.
 Now we use let keyword to declare a variable.

 In javascript if we only declare variables without assigning then the value is by default undefined
*/