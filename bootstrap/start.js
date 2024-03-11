var Name ="Justice";
var age = 56;
var height = 90.76;
var HIV = "negative";
alert(`Your information is ${Name} ${age} ${height} ${HIV}`);
// alert(age);
//  alert(  height);
// alert(HIV);
function createGreeting(name){

    return "Hello, " + name;
   }
   function displayGreeting(greetingFunction, userName){
    return greetingFunction(userName);
   }
   var result = displayGreeting(createGreeting, "Peter");
   alert(result); // Output: Hello, Peter
